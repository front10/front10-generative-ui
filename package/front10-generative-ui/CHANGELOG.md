# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added

- Initial release of @front10/generative-ui
- Core abstraction for Generative UI components
- `GenerativeUIProvider` for context management
- `useGenerativeUI` hook for component registration and rendering
- `GenerativeUIRegistry` component for bulk registration
- `useRegisterGenerativeComponent` hook for single component registration
- `GenerativeUIRenderer` component for rendering based on tool state
- `useRenderGenerativeUI` hook for message system integration
- Complete TypeScript support with full type definitions
- Support for all Vercel AI SDK 5.0 tool states
- State persistence across re-renders using useRef
- Comprehensive error handling and fallbacks

### Examples

- **Product Card Example**: Complete product information display with loading, success, and error states
- **Image Gallery Example**: Interactive image search with hover effects and download actions
- **Sentiment Analyzer Example**: Advanced text sentiment analysis with visual charts and suggestions

### Features

- Automatic component rendering based on tool execution
- Loading states with skeleton animations
- Error states with detailed error information
- Success states with rich data display
- Hover effects and interactive elements
- Responsive design with Tailwind CSS
- Lucide React icon integration
- Fully customizable component styling
- Support for complex data structures
- Real-time state updates during tool execution

### Technical

- Built with TypeScript for type safety
- React 18+ compatibility
- Vercel AI SDK 5.0 integration
- Tree-shaking support for optimal bundle size
- ESM and CommonJS module support
- Source maps for debugging
- Comprehensive documentation
- Example implementations for all features

### Documentation

- Complete API reference
- Quick start guide
- Example implementations
- Type definitions
- Best practices guide
- Integration examples
