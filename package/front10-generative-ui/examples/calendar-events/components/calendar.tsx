'use client';

import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Edit,
  Trash2,
  Filter,
} from 'lucide-react';
import { cn } from '../../../src/utils';
import type { CalendarEvent, CalendarView, EventFilter } from '../types';
import { useCalendarStore } from '../store';

// Color mapping for events
const colorClasses = {
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
};

const priorityClasses = {
  low: 'text-gray-500',
  medium: 'text-yellow-600',
  high: 'text-red-600',
};

// Loading state component
export const CalendarLoading: React.FC<{
  input?: { startDate?: string; endDate?: string };
}> = ({ input: _input }) => (
  <div className="animate-pulse bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="bg-blue-100 rounded-lg size-12 flex items-center justify-center">
        <Calendar className="size-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    </div>

    {/* Calendar grid skeleton */}
    <div className="grid grid-cols-7 gap-1 mb-4">
      {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
        <div
          key={day}
          className="h-8 bg-gray-200 rounded text-center flex items-center justify-center"
        >
          <div className="h-4 bg-gray-300 rounded w-8" />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 35 }).map((_, i) => (
        <div
          key={i}
          className="h-20 bg-gray-100 rounded border-2 border-dashed border-gray-200"
        />
      ))}
    </div>

    <div className="mt-4 flex items-center space-x-2">
      <Clock className="size-4 text-gray-400" />
      <span className="text-sm text-gray-500">
        Loading calendar for{' '}
        {_input?.startDate
          ? new Date(_input.startDate).toLocaleDateString()
          : 'current month'}
        ...
      </span>
    </div>
  </div>
);

// Success state component
export const CalendarComponent: React.FC<{
  output: {
    events: CalendarEvent[];
    total: number;
    view: CalendarView;
  };
  input?: { startDate?: string; endDate?: string };
}> = ({ output, input: _input }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewType, setViewType] = useState<'month' | 'week' | 'day'>('month');
  const [filters, setFilters] = useState<EventFilter>({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  );

  const { addEvent, updateEvent, deleteEvent, addAction } = useCalendarStore();

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    while (currentDate <= lastDay || days.length < 42) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }, [selectedDate]);

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return output.events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);

      return eventStart <= targetDate && eventEnd >= targetDate;
    });
  };

  // Handle event selection
  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    addAction({
      type: 'view',
      payload: { eventId: event.id },
      timestamp: new Date().toISOString(),
    });
  };

  // Handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    addAction({
      type: 'view',
      payload: { date: date.toISOString() },
      timestamp: new Date().toISOString(),
    });
  };

  // Handle event creation
  const handleCreateEvent = () => {
    const newEvent: CalendarEvent = {
      id: `event_${Date.now()}`,
      title: 'Nuevo evento',
      description: 'Descripción del evento',
      startDate: selectedDate.toISOString(),
      endDate: new Date(selectedDate.getTime() + 60 * 60 * 1000).toISOString(),
      allDay: false,
      color: 'blue',
      priority: 'medium',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addEvent(newEvent);
    addAction({
      type: 'create',
      payload: { event: newEvent },
      timestamp: new Date().toISOString(),
    });
  };

  // Handle event update
  const handleUpdateEvent = (
    eventId: string,
    updates: Partial<CalendarEvent>,
  ) => {
    updateEvent(eventId, updates);
    addAction({
      type: 'update',
      payload: { eventId, updates },
      timestamp: new Date().toISOString(),
    });
  };

  // Handle event deletion
  const handleDeleteEvent = (eventId: string) => {
    deleteEvent(eventId);
    addAction({
      type: 'delete',
      payload: { eventId },
      timestamp: new Date().toISOString(),
    });
    setSelectedEvent(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 rounded-lg size-12 flex items-center justify-center">
            <Calendar className="size-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Calendario de Eventos</h3>
            <p className="text-gray-600 text-sm">
              {output.total} eventos •{' '}
              {selectedDate.toLocaleDateString('es-ES', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            <Filter className="size-4" />
            <span>Filtros</span>
          </button>
          <button
            onClick={handleCreateEvent}
            className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
          >
            <Plus className="size-4" />
            <span>Nuevo Evento</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <input
                type="text"
                placeholder="Buscar eventos..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={filters.search || ''}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={filters.status || ''}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value as any })
                }
              >
                <option value="">Todos</option>
                <option value="pending">Pendiente</option>
                <option value="confirmed">Confirmado</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prioridad
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={filters.priority || ''}
                onChange={(e) =>
                  setFilters({ ...filters, priority: e.target.value as any })
                }
              >
                <option value="">Todas</option>
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={filters.color || ''}
                onChange={(e) =>
                  setFilters({ ...filters, color: e.target.value as any })
                }
              >
                <option value="">Todos</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
                <option value="red">Rojo</option>
                <option value="yellow">Amarillo</option>
                <option value="purple">Púrpura</option>
                <option value="orange">Naranja</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                ),
              )
            }
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            ←
          </button>
          <h4 className="font-medium">
            {selectedDate.toLocaleDateString('es-ES', {
              month: 'long',
              year: 'numeric',
            })}
          </h4>
          <button
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                ),
              )
            }
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            →
          </button>
        </div>

        <div className="flex items-center space-x-1">
          {(['month', 'week', 'day'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setViewType(type)}
              className={cn(
                'px-3 py-1 text-sm rounded transition-colors',
                viewType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200',
              )}
            >
              {type === 'month' ? 'Mes' : type === 'week' ? 'Semana' : 'Día'}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
          <div
            key={day}
            className="h-8 bg-gray-50 rounded text-center flex items-center justify-center text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((date, index) => {
          const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
          const isToday = date.toDateString() === new Date().toDateString();
          const dayEvents = getEventsForDate(date);

          return (
            <div
              key={index}
              onClick={() => handleDateClick(date)}
              className={cn(
                'h-20 p-1 border border-gray-200 rounded cursor-pointer transition-colors hover:bg-gray-50',
                !isCurrentMonth && 'bg-gray-50 text-gray-400',
                isToday && 'bg-blue-50 border-blue-300',
              )}
            >
              <div className="text-xs font-medium mb-1">{date.getDate()}</div>
              <div className="space-y-1">
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventClick(event);
                    }}
                    className={cn(
                      'px-1 py-0.5 text-xs rounded truncate cursor-pointer border',
                      colorClasses[event.color || 'blue'],
                    )}
                    title={event.title}
                  >
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-gray-500 px-1">
                    +{dayEvents.length - 2} más
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Event Details */}
      {selectedEvent && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">
                {selectedEvent.title}
              </h4>
              {selectedEvent.description && (
                <p className="text-gray-600 mb-3">
                  {selectedEvent.description}
                </p>
              )}

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="size-4 text-gray-400" />
                  <span>
                    {new Date(selectedEvent.startDate).toLocaleString('es-ES')}{' '}
                    -{new Date(selectedEvent.endDate).toLocaleString('es-ES')}
                  </span>
                </div>

                {selectedEvent.location && (
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="size-4 text-gray-400" />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}

                {selectedEvent.attendees &&
                  selectedEvent.attendees.length > 0 && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="size-4 text-gray-400" />
                      <span>{selectedEvent.attendees.join(', ')}</span>
                    </div>
                  )}

                <div className="flex items-center space-x-4 text-sm">
                  <span
                    className={cn(
                      'font-medium',
                      priorityClasses[selectedEvent.priority || 'medium'],
                    )}
                  >
                    Prioridad: {selectedEvent.priority}
                  </span>
                  <span className="capitalize">
                    Estado: {selectedEvent.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  handleUpdateEvent(selectedEvent.id, { status: 'confirmed' })
                }
                className="p-2 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                title="Editar evento"
              >
                <Edit className="size-4" />
              </button>
              <button
                onClick={() => handleDeleteEvent(selectedEvent.id)}
                className="p-2 text-red-600 hover:bg-red-100 rounded transition-colors"
                title="Eliminar evento"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>Total de eventos: {output.total}</span>
        <span>
          Vista:{' '}
          {viewType === 'month'
            ? 'Mensual'
            : viewType === 'week'
              ? 'Semanal'
              : 'Diaria'}
        </span>
      </div>
    </div>
  );
};

// Error state component
export const CalendarError: React.FC<{
  error: string;
  input?: { startDate?: string; endDate?: string };
}> = ({ error, input }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
    <div className="flex items-center space-x-3">
      <div className="bg-red-100 rounded-lg size-12 flex items-center justify-center">
        <Calendar className="size-6 text-red-600" />
      </div>
      <div>
        <h3 className="font-semibold text-red-800">
          Error al cargar el calendario
        </h3>
        <p className="text-red-600 text-sm">{error}</p>
        {input && (
          <p className="text-red-500 text-xs mt-1">
            Período:{' '}
            {input.startDate
              ? new Date(input.startDate).toLocaleDateString()
              : 'actual'}{' '}
            -
            {input.endDate
              ? new Date(input.endDate).toLocaleDateString()
              : 'actual'}
          </p>
        )}
      </div>
    </div>
  </div>
);
