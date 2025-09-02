# Front10 Generative UI - Chatbot Demo

<p align="center">
  <img alt="Front10 Generative UI Chatbot Demo" src="app/(chat)/opengraph-image.png" width="600">
  <h1 align="center">Front10 Generative UI - Chatbot Demo</h1>
</p>

<p align="center">
    A comprehensive chatbot demo application built with Next.js and the AI SDK to showcase and test the <strong>@front10/generative-ui</strong> package. This demo demonstrates how to create dynamic, interactive user experiences with automatic UI component rendering based on tool execution.
</p>

<p align="center">
  <a href="package/front10-generative-ui/README.md"><strong>Package Documentation</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## 🎯 What is @front10/generative-ui?

**@front10/generative-ui** is a complete abstraction for creating generative UI components that automatically display when specific tools are executed in chat. It's designed to work with **Vercel AI SDK 5.0** and provides a simple, scalable, and reusable way to create dynamic user experiences with interactive feedback capabilities.

This demo showcases the package's capabilities through real-world examples and interactive components.

## 🚀 Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Supports OpenAI (default), Anthropic, Cohere, and other model providers
- [@front10/generative-ui](package/front10-generative-ui/README.md)
  - **Automatic UI Rendering**: Components automatically display when tools are executed
  - **Interactive Feedback**: Components can send actions back to the LLM
  - **Multiple Actions**: Single components can trigger multiple different actions
  - **State Management**: Handles loading, success, and error states automatically
  - **Type Safety**: Complete TypeScript support for better developer experience
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Neon Serverless Postgres](https://vercel.com/marketplace/neon) for saving chat history and user data
  - [Vercel Blob](https://vercel.com/storage/blob) for efficient file storage
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication

## 🤖 Model Providers

This demo is configured with **OpenAI** as the default chat model. However, with the [AI SDK](https://sdk.vercel.ai/docs), you can easily switch LLM providers to [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [xAI](https://x.ai), and [many more](https://sdk.vercel.ai/providers/ai-sdk-providers) with just a few lines of code.

## 🎨 Interactive Examples

### Product Card with Multiple Actions
- **Tool**: `getProductInfo`
- **Actions**: Add to cart, view details, add to wishlist, share product
- **Features**: Interactive buttons, product information display, action feedback

### Image Gallery with Selection
- **Tool**: `searchImages`
- **Actions**: Select images, view full size, download, share
- **Features**: Grid layout, image previews, selection management

### Sentiment Analyzer with Visualization
- **Tool**: `analyzeSentiment`
- **Actions**: Analyze text, view charts, export results
- **Features**: Text input, sentiment charts, export functionality

### Calendar Events Management
- **Tools**: `getEvents`, `createEvent`, `updateEvent`, `deleteEvent`
- **Actions**: Create, edit, delete, confirm, cancel, view details, share
- **Features**: Full calendar view, event management, recurring events, filtering

## 🚀 Deploy Your Own

You can deploy your own version of this Front10 Generative UI Chatbot Demo to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Ffront-10-generative-ui&env=OPENAI_API_KEY&envDescription=Your+OpenAI+API+Key+for+the+chatbot&envLink=https%3A%2F%2Fgithub.com%2Fyour-username%2Ffront-10-generative-ui%2Fblob%2Fmain%2F.env.example&demo-title=Front10+Generative+UI+Chatbot&demo-description=A+comprehensive+chatbot+demo+for+testing+and+developing+the+@front10%2Fgenerative-ui+package&demo-url=https%3A%2F%2Fyour-demo-url.vercel.app)

## 💻 Running locally

### Prerequisites

- Node.js 18+ and pnpm
- OpenAI API key
- PostgreSQL database (Neon recommended)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/front-10-generative-ui.git
cd front-10-generative-ui
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Environment setup**
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your configuration
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=your_postgres_connection_string
AUTH_SECRET=your_auth_secret_here
```

4. **Database setup**
```bash
# Run database migrations
pnpm db:migrate

# Seed the database (if applicable)
pnpm db:seed
```

5. **Start the development server**
```bash
pnpm dev
```

Your Front10 Generative UI Chatbot Demo should now be running on [localhost:3000](http://localhost:3000).

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Database operations
pnpm db:migrate
pnpm db:seed
pnpm db:studio
```

## 🧪 Testing the Package

This demo is designed to test and showcase the @front10/generative-ui package. Try these interactions:

### Basic Tool Execution
```
Show me a product card for "iPhone 15 Pro"
```

### Interactive Components
```
Search for images of "sunset over mountains"
```

### Complex Workflows
```
Show me my calendar events for this month
Create a new meeting for tomorrow at 2 PM
```

### Action Handling
- Click buttons in rendered components
- Observe how actions are sent back to the LLM
- Test different component states (loading, success, error)

## 📚 Package Documentation

For detailed information about the @front10/generative-ui package, including:

- Complete API reference
- Component registration examples
- Action handling patterns
- TypeScript interfaces
- Best practices

Visit the [package documentation](package/front10-generative-ui/README.md).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-new-feature`)
3. Commit your changes (`git commit -m 'Add some amazing new feature'`)
4. Push to the branch (`git push origin feature/amazing-new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Need help?** Check the [package documentation](package/front10-generative-ui/README.md) or open an issue on GitHub.
