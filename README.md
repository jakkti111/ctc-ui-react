[![Untitled UI React](https://www.untitledui.com/react/untitled-ui-react-open-graph.jpg)](https://www.untitledui.com/react)

# CTC UI React — Component Preview

A comprehensive UI component showcase built on top of the [Untitled UI React](https://www.untitledui.com/react) open-source library. This project provides a browsable preview of **230+ pages** covering base components, application UI, marketing sections, and full-page examples.

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety |
| Tailwind CSS | 4.2 | Styling |
| Vite | 8.0 | Build tool & dev server |
| React Aria | 1.16 | Accessibility |
| Recharts | 3.8 | Charts & data visualization |
| Lucide / Untitled UI Icons | Latest | Icon library |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- [pnpm](https://pnpm.io/installation) (recommended — the project ships a `pnpm-lock.yaml`), or npm/bun as an alternative

### Installation

```bash
# Clone the repository
git clone https://github.com/jakkti111/ctc-ui-react.git
cd ctc-ui-react

# Install dependencies
pnpm install

# or, with npm
npm install --legacy-peer-deps
```

> **Note:** `--legacy-peer-deps` is required with npm due to a peer dependency conflict between `eslint-plugin-import` and `eslint@10`. pnpm does not need this flag.

### Development Server

```bash
pnpm dev
# or: npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm build
# or: npm run build
```

Output will be in the `dist/` directory. Preview the production build locally with `pnpm preview`.

### Storybook (Component Library Docs)

```bash
pnpm storybook
# or: npm run storybook
```

Opens Storybook on [http://localhost:6006](http://localhost:6006).

### Type Check & Lint

```bash
pnpm test          # Runs type-check + lint + prettier
pnpm type-check    # TypeScript only
pnpm lint          # ESLint only
pnpm prettier      # Prettier format
```

## Project Structure

```
ctc-ui-react/
├── components/                    # Untitled UI library (open-source)
│   ├── base/                      # Core UI components (17 categories)
│   │   ├── avatar/                # Avatar, AvatarLabelGroup
│   │   ├── badges/                # Badge, BadgeWithDot, BadgeWithIcon
│   │   ├── buttons/               # Button, SocialButtons, AppStoreButtons
│   │   ├── checkbox/              # Checkbox
│   │   ├── dropdown/              # Dropdown menus
│   │   ├── input/                 # Input, PinInput
│   │   ├── progress-indicators/   # ProgressBar, CircleProgress
│   │   ├── radio-buttons/         # RadioButton, RadioGroup
│   │   ├── select/                # Select, MultiSelect, TagSelect
│   │   ├── slider/                # Slider
│   │   ├── tags/                  # Tags
│   │   ├── textarea/              # Textarea
│   │   ├── toggle/                # Toggle switch
│   │   └── tooltip/               # Tooltip
│   ├── application/               # Complex app components
│   │   ├── activity-feed/         # Activity feed (custom)
│   │   ├── alerts/                # Alert components (custom)
│   │   ├── app-navigation/        # Header & sidebar navigation
│   │   ├── carousel/              # Image carousel
│   │   ├── charts/                # Bar, Line, Pie, Radar, Gauge charts
│   │   ├── date-picker/           # Date & range picker
│   │   ├── empty-state/           # Empty state patterns
│   │   ├── file-upload/           # File upload with progress
│   │   ├── loading-indicator/     # Spinners & loaders
│   │   ├── modals/                # Modal dialogs
│   │   ├── pagination/            # Pagination variants
│   │   ├── slideout-menus/        # Slideout panel
│   │   ├── table/                 # Data tables
│   │   └── tabs/                  # Tab navigation
│   ├── foundations/               # Design tokens & icons
│   └── shared-assets/             # Illustrations, QR codes, etc.
│
├── src/                           # Preview application
│   ├── main.tsx                   # React entry point
│   ├── app.tsx                    # App shell with sidebar navigation
│   ├── components/
│   │   ├── example-gallery.tsx    # Gallery grid with wireframe thumbnails
│   │   ├── mock-templates.tsx     # Detail page routers
│   │   ├── dashboard-details/     # 19 unique dashboard layouts
│   │   ├── settings-details/      # 21 unique settings pages
│   │   ├── informational-details/ # 19 unique informational pages
│   │   ├── auth-details/          # 16 login + 21 signup pages
│   │   ├── error-details/         # 14 unique 404 pages
│   │   ├── verification-details/  # 3 verification + 5 forgot password
│   │   └── email-details/         # 10 email templates
│   └── pages/
│       ├── marketing/             # 18 marketing components + 10 examples
│       └── *.tsx                  # Component showcase pages
│
├── styles/                        # Global styles
│   ├── globals.css                # Tailwind imports & utilities
│   ├── theme.css                  # Design tokens (colors, shadows, fonts)
│   └── typography.css             # Typography scale
│
├── hooks/                         # Custom React hooks
│   ├── use-active-item.ts         # Intersection observer tracking
│   ├── use-breakpoint.ts          # Tailwind breakpoint detection
│   ├── use-clipboard.ts           # Copy to clipboard
│   └── use-resize-observer.ts     # Element resize tracking
│
├── utils/                         # Utilities
│   ├── cx.ts                      # Tailwind merge (class merging)
│   ├── countries.tsx              # Country data
│   ├── is-react-component.ts      # Component type detection
│   └── timezones.tsx              # Timezone data
│
├── index.html                     # HTML entry
├── vite.config.mts                # Vite configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

## Pages Overview

### Base Components (27 pages)

Avatars, Badge groups, Badges, Button groups, Buttons, Checkboxes, Credit cards, Dropdowns, Featured icons, Illustrations, Inputs, Mobile app store buttons, Progress indicators, QR codes, Radio buttons, Radio groups, Rating badge & stars, Select, Multi select, Sliders, Social buttons, Tags, Textareas, Toggles, Tooltips, Utility buttons, Verification code inputs

### Application UI Components (37 pages)

Activity feeds, Activity gauges, Alerts, Breadcrumbs, Calendars, Card headers, Carousels, Code snippets, Color pickers, Command menus, Content dividers, Date pickers, Empty states, File uploaders, Filter bars, Gradient pickers, Header navigations, Image pickers, Inline CTAs, Line & bar charts, Loading indicators, Messaging, Metrics, Modals, Notifications, Page headers, Pagination, Pie charts, Progress steps, Radar charts, Section footers, Section headers, Sidebar navigations, Slideout menus, Tables, Tabs, Tree views

### Application UI Examples (6 gallery pages → 128 detail pages)

| Category | Pages | Content |
|----------|-------|---------|
| Dashboards 01 | 10 | Analytics, traffic, ecommerce, customer dashboards |
| Dashboards 02 | 9 | Sales, financial, banking, fintech, cards dashboards |
| Settings 01 | 11 | Profile, password, team, billing settings |
| Settings 02 | 10 | Billing, notifications, integrations settings |
| Informational 01 | 10 | Trade history, orders, customer, calendar pages |
| Informational 02 | 9 | Messaging, projects, profiles, editor pages |

Each detail page features a **unique layout** with real sidebar navigation, data tables, charts, and form components.

### Shared Page Examples (6 gallery pages → 69 detail pages)

| Category | Pages | Variants |
|----------|-------|----------|
| Log in pages | 16 | Simple, card, split, social login, illustration |
| Sign up pages | 21 | Simple, progress steps, split, sidebar progress |
| Verification | 3 | Check email, enter code, success |
| Forgot password | 5 | Enter email, check email, new password, success, sidebar |
| 404 sections | 14 | Simple, split image, illustration, maintenance |
| Email templates | 10 | Welcome, verification, video, invite, mockup |

### Marketing Components (18 pages)

Banners, Blog sections, Careers sections, Contact sections, Content & rich text, CTA sections, FAQ sections, Features sections, Footers, Header navigations, Hero header sections, Header sections, Metrics sections, Newsletter CTA, Pricing sections, Social proof, Team sections, Testimonial sections

### Marketing Examples (10 full-page examples)

About pages, Blog posts, Blogs, Contact pages, FAQ pages, Landing pages, Legal pages, Pricing pages, Team pages, 404 pages

## Key Features

- **Lazy-loaded pages** — All pages use `React.lazy()` for optimal performance
- **Wireframe thumbnails** — Gallery cards show mini wireframe previews matching each page type
- **Interactive components** — Filters, toggles, tabs, and modals are fully functional
- **Real data** — Tables, charts, and lists use realistic sample data
- **Responsive** — Components adapt to different screen sizes
- **Accessible** — Built on React Aria for WCAG compliance

## Customization

### Brand Colors

Edit `styles/theme.css` to change the brand color palette:

```css
@theme {
  --color-brand-500: rgb(158 119 237);  /* Primary brand */
  --color-brand-600: rgb(127 86 217);   /* Interactive */
  /* ... full scale from 25 to 950 */
}
```

### Adding New Pages

1. Create a new page file in `src/pages/`
2. Add a lazy import in `src/app.tsx`
3. Register in `pageComponents` object
4. Add to the appropriate `navSections` array

## License

The open-source Untitled UI components are licensed under the [MIT license](./LICENSE).

This preview application (the `src/` directory) is for demonstration purposes.

## Credits

- [Untitled UI](https://www.untitledui.com/react) — Component library
- [React Aria](https://react-spectrum.adobe.com/react-aria/) — Accessibility primitives
- [Recharts](https://recharts.org/) — Chart library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
