# DocsSidebar Component

## Overview
The `DocsSidebar` component provides a navigation sidebar for documentation sections with accessibility features and responsive design.

## Features
- ✅ Fully accessible with ARIA attributes
- ✅ Keyboard navigation support
- ✅ Responsive design (mobile-friendly)
- ✅ TypeScript support with proper type definitions
- ✅ Optimized performance with React hooks
- ✅ Clean, modern Material Design-inspired UI

## Usage

```tsx
import DocsSidebar from '@/components/DocsSidebar/docsSidebar';

function App() {
  const handleOptionSelect = (option: string) => {
    console.log('Selected:', option);
  };

  return (
    <DocsSidebar 
      onOptionSelect={handleOptionSelect}
      className="custom-sidebar"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onOptionSelect` | `(option: string) => void` | `undefined` | Callback fired when an option is selected |
| `className` | `string` | `''` | Additional CSS class names |

## Accessibility Features
- Semantic HTML structure with `<nav>`, `<aside>`, and proper list elements
- ARIA labels and attributes for screen readers
- Keyboard navigation with Enter and Space key support
- Focus management with visible focus indicators
- `aria-current` attribute for active states

## Responsive Behavior
- Desktop: Fixed width sidebar (300px)
- Mobile (≤768px): Full width with adjusted padding
- Smooth transitions and hover states

## Data Structure
The component expects data in the following format:
```json
[
  {
    "title": "Section Name",
    "options": ["Option 1", "Option 2", "Option 3"]
  }
]
```

## Styling
Uses CSS modules for scoped styling. Key classes:
- `.docsSidebar` - Main container
- `.sectionTitle` - Section headers
- `.option` - Individual navigation items
- `.active` - Active/selected state
