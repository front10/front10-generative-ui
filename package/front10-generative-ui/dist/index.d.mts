import * as react from 'react';
import react__default, { ReactNode } from 'react';
import { ClassValue } from 'clsx';

type ToolState = 'input-streaming' | 'input-available' | 'output-available' | 'output-error';
interface GenerativeUIComponent<TInput = any, TOutput = any> {
    toolId: string;
    LoadingComponent?: React.ComponentType<{
        input?: TInput;
    }>;
    SuccessComponent: React.ComponentType<{
        output: TOutput;
        input?: TInput;
    }>;
    ErrorComponent?: React.ComponentType<{
        error: string;
        input?: TInput;
    }>;
}
interface GenerativeUIRegistryType {
    [toolId: string]: GenerativeUIComponent;
}
interface GenerativeUIRendererProps {
    toolId: string;
    state: ToolState;
    input?: any;
    output?: any;
    error?: string;
    toolCallId: string;
}
interface UseGenerativeUI {
    registerComponent: <TInput = any, TOutput = any>(component: GenerativeUIComponent<TInput, TOutput>) => void;
    renderComponent: (props: GenerativeUIRendererProps) => ReactNode | null;
}

declare const useGenerativeUI: () => UseGenerativeUI;
declare const GenerativeUIProvider: react__default.FC<{
    children: react__default.ReactNode;
}>;

declare const GenerativeUIRegistry: React.FC<{
    components: GenerativeUIComponent[];
}>;
declare const useRegisterGenerativeComponent: <TInput = any, TOutput = any>(component: GenerativeUIComponent<TInput, TOutput>) => void;

declare const GenerativeUIRenderer: React.FC<GenerativeUIRendererProps>;
declare const useRenderGenerativeUI: () => (props: GenerativeUIRendererProps) => react.ReactNode | null;

declare function cn(...inputs: ClassValue[]): string;

export { type GenerativeUIComponent, GenerativeUIProvider, GenerativeUIRegistry, type GenerativeUIRegistryType, GenerativeUIRenderer, type GenerativeUIRendererProps, type ToolState, type UseGenerativeUI, cn, useGenerativeUI, useRegisterGenerativeComponent, useRenderGenerativeUI };
