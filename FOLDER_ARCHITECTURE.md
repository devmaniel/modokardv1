# Folder Architecture Guide

## Tech Stack
- **React.ts** - React with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Pre-built component library
- **TanStack Router** - Type-safe routing
- **Supabase** - Backend-as-a-Service

## Folder Structure

```
src/
├── api/                    # API layer (Axios configurations)
├── components/             # Custom components
├── data/                   # Get/Post operations
├── hooks/                  # Custom React hooks
├── layouts/                # Layout and partial components
├── lib/                    # Third-party configurations
├── styles/                 # Global styles and Tailwind configs
├── types/                  # TypeScript types and interfaces
└── utils/                  # Utility functions
```

## Folder Usage Guide

### 📡 `api/`
**Purpose**: Axios instances, interceptors, and API configuration
```typescript
// api/client.ts - Base axios instance
// api/endpoints.ts - API endpoint constants
```

### 🧩 `components/`
**Purpose**: Your custom-built reusable components
```typescript
// components/UserCard.tsx
// components/ProductGrid.tsx
// Avoid conflicts with shadcn by keeping custom components here
```

### 📊 `data/`
**Purpose**: Data fetching logic, API calls that return data only
```typescript
// data/users.ts - getUserById(), getAllUsers()
// data/products.ts - getProducts(), createProduct()
// Pure data operations, no UI logic
```

### 🪝 `hooks/`
**Purpose**: Custom React hooks for shared logic
```typescript
// hooks/useAuth.ts
// hooks/useLocalStorage.ts
// hooks/useSupabase.ts
```

### 🎨 `layouts/`
**Purpose**: Reusable layout components and partials
```typescript
// layouts/AppLayout.tsx - Main app wrapper
// layouts/AuthLayout.tsx - Authentication pages layout
// layouts/partials/Header.tsx
// layouts/partials/Sidebar.tsx
```

### ⚙️ `lib/`
**Purpose**: Third-party library configurations
```typescript
// lib/supabase.ts - Supabase client setup
// lib/utils.ts - Shadcn utility functions (cn helper)
// lib/router.ts - TanStack Router configuration
```

### 🎨 `styles/`
**Purpose**: Global styles and Tailwind customizations
```css
/* styles/globals.css - Global styles */
/* styles/components.css - Component-specific styles */
```

### 📝 `types/`
**Purpose**: TypeScript type definitions and interfaces
```typescript
// types/user.ts - User interface, UserRole enum
// types/api.ts - API response types, error types
// types/database.ts - Supabase database types
// types/global.ts - Global type definitions
```



### 🛠️ `utils/`
**Purpose**: Helper functions and utilities
```typescript
// utils/formatters.ts - Date, currency formatters
// utils/validators.ts - Form validation helpers
// utils/constants.ts - App constants
```

## Key Separation Principles

- **Components vs UI**: Custom components in `components/`, Shadcn components in `ui/`
- **Data vs Logic**: Pure data operations in `data/`, business logic in `hooks/`
- **Layout vs Components**: Reusable layouts in `layouts/`, specific components in `components/`
- **Config vs Utils**: Third-party configs in `lib/`, helper functions in `utils/`

## Import Examples

```typescript
// Shadcn component
import { Button } from "@/ui/button"

// Custom component  
import { UserCard } from "@/components/UserCard"

// Data operation
import { getUsers } from "@/data/users"

// Custom hook
import { useAuth } from "@/hooks/useAuth"

// Layout
import { AppLayout } from "@/layouts/AppLayout"

// Supabase
import { supabase } from "@/lib/supabase"

// Types
import type { User, ApiResponse } from "@/types/user"
```