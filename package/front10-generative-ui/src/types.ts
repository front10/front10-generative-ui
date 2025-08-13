import type { ReactNode } from 'react';

// Estados de las herramientas según AI SDK 5.0
export type ToolState =
  | 'input-streaming'
  | 'input-available'
  | 'output-available'
  | 'output-error';

// Configuración de un componente generativo
export interface GenerativeUIComponent<TInput = any, TOutput = any> {
  // Identificador único del tool
  toolId: string;
  // Componente para mostrar cuando el tool está cargando
  LoadingComponent?: React.ComponentType<{ input?: TInput }>;
  // Componente para mostrar cuando el tool tiene resultado
  SuccessComponent: React.ComponentType<{ output: TOutput; input?: TInput }>;
  // Componente para mostrar cuando hay error
  ErrorComponent?: React.ComponentType<{ error: string; input?: TInput }>;
}

// Configuración del registro de componentes generativos
export interface GenerativeUIRegistryType {
  [toolId: string]: GenerativeUIComponent;
}

// Props para el componente de renderizado
export interface GenerativeUIRendererProps {
  toolId: string;
  state: ToolState;
  input?: any;
  output?: any;
  error?: string;
  toolCallId: string;
}

// Hook para registrar componentes generativos
export interface UseGenerativeUI {
  registerComponent: <TInput = any, TOutput = any>(
    component: GenerativeUIComponent<TInput, TOutput>,
  ) => void;
  renderComponent: (props: GenerativeUIRendererProps) => ReactNode | null;
}
