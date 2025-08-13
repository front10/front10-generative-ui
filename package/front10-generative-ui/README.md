# @front10/generative-ui

A complete abstraction for creating generative UI components that automatically display when specific tools are executed in chat. Designed to work with **Vercel AI SDK 5.0** and provide a simple, scalable, and reusable way to create dynamic user experiences.

## 🚀 Installation

```bash
npm install @front10/generative-ui
# or
yarn add @front10/generative-ui
# or
pnpm add @front10/generative-ui
```

## 📦 What's Included

### Core Package

```typescript
import {
  GenerativeUIProvider,
  useGenerativeUI,
  GenerativeUIRegistry,
  useRegisterGenerativeComponent,
  GenerativeUIRenderer,
  useRenderGenerativeUI
} from '@front10/generative-ui';
```

### Examples

```typescript
import {
  productCardExample,
  imageGalleryExample,
  sentimentAnalyzerExample,
  examples
} from '@front10/generative-ui/examples';
```

## 🎯 Quick Start

### 1. Setup Provider

```tsx
// app/layout.tsx
import { GenerativeUIProvider } from '@front10/generative-ui';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GenerativeUIProvider>{children}</GenerativeUIProvider>
      </body>
    </html>
  );
}
```

### 2. Register Components

```tsx
// components/chat.tsx
import { useGenerativeUI } from '@front10/generative-ui';
import { productCardExample } from '@front10/generative-ui/examples';

export function Chat() {
  const { registerComponent } = useGenerativeUI();

  // Register the product card example
  registerComponent({
    toolId: productCardExample.toolId,
    LoadingComponent: productCardExample.components.LoadingComponent,
    SuccessComponent: productCardExample.components.SuccessComponent,
    ErrorComponent: productCardExample.components.ErrorComponent
  });

  return <div>Chat Component</div>;
}
```

### 3. Render in Messages

```tsx
// components/message.tsx
import { useRenderGenerativeUI } from '@front10/generative-ui';

export function Message({ message }) {
  const renderGenerativeUI = useRenderGenerativeUI();

  return (
    <div>
      {message.parts?.map((part, index) => {
        if (part.type.startsWith('tool-')) {
          const toolId = part.type.replace('tool-', '');
          const { toolCallId, state } = part;
          const input = 'input' in part ? part.input : undefined;
          const output = 'output' in part ? part.output : undefined;
          const error = 'errorText' in part ? part.errorText : undefined;

          const renderedComponent = renderGenerativeUI({
            toolId,
            state,
            input,
            output,
            error,
            toolCallId
          });

          if (renderedComponent) {
            return <div key={toolCallId}>{renderedComponent}</div>;
          }
        }
        return null;
      })}
    </div>
  );
}
```

## 🎨 Examples

### Product Card

```tsx
import { productCardExample } from '@front10/generative-ui/examples';

// Register
registerComponent({
  toolId: productCardExample.toolId,
  ...productCardExample.components
});

// Use in API
import { getProductInfo } from '@front10/generative-ui/examples';

export async function POST(request: Request) {
  const result = streamText({
    model: openai('gpt-4'),
    messages,
    tools: {
      getProductInfo
    }
  });
}
```

### Image Gallery

```tsx
import { imageGalleryExample } from '@front10/generative-ui/examples';

// Register
registerComponent({
  toolId: imageGalleryExample.toolId,
  ...imageGalleryExample.components
});

// Use in API
import { searchImages } from '@front10/generative-ui/examples';

export async function POST(request: Request) {
  const result = streamText({
    model: openai('gpt-4'),
    messages,
    tools: {
      searchImages
    }
  });
}
```

### Sentiment Analyzer

```tsx
import { sentimentAnalyzerExample } from '@front10/generative-ui/examples';

// Register
registerComponent({
  toolId: sentimentAnalyzerExample.toolId,
  ...sentimentAnalyzerExample.components
});

// Use in API
import { analyzeSentimentTool } from '@front10/generative-ui/examples';

export async function POST(request: Request) {
  const result = streamText({
    model: openai('gpt-4'),
    messages,
    tools: {
      analyzeSentimentTool
    }
  });
}
```

## 🔧 API Reference

### Core Components

#### `GenerativeUIProvider`

The main provider that handles component registration and rendering.

```tsx
<GenerativeUIProvider>{children}</GenerativeUIProvider>
```

#### `useGenerativeUI`

Hook to access the Generative UI context.

```tsx
const { registerComponent, renderComponent } = useGenerativeUI();
```

#### `GenerativeUIRegistry`

Component for automatically registering multiple components.

```tsx
<GenerativeUIRegistry components={[component1, component2]} />
```

#### `useRegisterGenerativeComponent`

Helper hook for registering a single component.

```tsx
useRegisterGenerativeComponent({
  toolId: 'myTool',
  LoadingComponent: MyLoading,
  SuccessComponent: MySuccess,
  ErrorComponent: MyError
});
```

#### `GenerativeUIRenderer`

Component that renders components based on the tool's state.

```tsx
<GenerativeUIRenderer
  toolId='myTool'
  state='output-available'
  input={input}
  output={output}
  error={error}
  toolCallId='call-123'
/>
```

#### `useRenderGenerativeUI`

Hook helper for rendering components from the message system.

```tsx
const renderGenerativeUI = useRenderGenerativeUI();
```

### Types

#### `GenerativeUIComponent<TInput, TOutput>`

```tsx
interface GenerativeUIComponent<TInput = any, TOutput = any> {
  toolId: string;
  LoadingComponent?: React.ComponentType<{ input?: TInput }>;
  SuccessComponent: React.ComponentType<{ output: TOutput; input?: TInput }>;
  ErrorComponent?: React.ComponentType<{ error: string; input?: TInput }>;
}
```

#### `ToolState`

```tsx
type ToolState =
  | 'input-streaming'
  | 'input-available'
  | 'output-available'
  | 'output-error';
```

#### `GenerativeUIRendererProps`

```tsx
interface GenerativeUIRendererProps {
  toolId: string;
  state: ToolState;
  input?: any;
  output?: any;
  error?: string;
  toolCallId: string;
}
```

## 🎯 Benefits

1. **Separation of concerns**: UI separated from tool logic
2. **Reusability**: Components reusable in different contexts
3. **Maintainability**: Easy to maintain and extend
4. **User experience**: Immediate visual feedback during execution
5. **Consistency**: Uniform experience across the application
6. **Scalability**: Easy to add new tools and components
7. **Type safety**: Complete TypeScript for better DX
8. **Compatibility**: Works with any Vercel AI SDK implementation

## 🚀 Project Status

✅ **Production ready** - The abstraction is fully functional, documented, and tested.

## 📚 Examples

See the `examples/` directory for complete working examples:

- **Product Card**: Product information display
- **Image Gallery**: Image search with interactive gallery
- **Sentiment Analyzer**: Text sentiment analysis with visualizations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Need help?** Check the examples in the `examples/` directory or open an issue on GitHub.
