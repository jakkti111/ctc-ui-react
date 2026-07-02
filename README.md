[![Untitled UI React](https://www.untitledui.com/react/untitled-ui-react-open-graph.jpg)](https://www.untitledui.com/react)

# CTC UI React — Component Preview

โปรเจกต์ตัวอย่างคอมโพเนนต์ UI ที่พัฒนาต่อยอดจากไลบรารีโอเพนซอร์ส [Untitled UI React](https://www.untitledui.com/react) โปรเจกต์นี้ให้พรีวิวแบบเข้าดูผ่านเบราว์เซอร์ได้กว่า **230+ หน้า** ครอบคลุมคอมโพเนนต์พื้นฐาน, Application UI, ส่วนการตลาด (Marketing) และตัวอย่างหน้าเต็มรูปแบบ

## เทคโนโลยีที่ใช้

| เทคโนโลยี | เวอร์ชัน | หน้าที่ |
|-----------|---------|---------|
| React | 19.2 | เฟรมเวิร์ก UI |
| TypeScript | 5.9 | ระบบ Type safety |
| Tailwind CSS | 4.2 | จัดการสไตล์ |
| Vite | 8.0 | เครื่องมือ build & dev server |
| React Aria | 1.16 | Accessibility |
| Recharts | 3.8 | กราฟและการแสดงผลข้อมูล |
| Lucide / Untitled UI Icons | ล่าสุด | ไลบรารีไอคอน |

## เริ่มต้นใช้งาน

### สิ่งที่ต้องมีก่อน

- ติดตั้ง Node.js 18 ขึ้นไป
- [pnpm](https://pnpm.io/installation) (แนะนำ — โปรเจกต์นี้มีไฟล์ `pnpm-lock.yaml` มาให้แล้ว) หรือใช้ npm/bun แทนก็ได้

### วิธีติดตั้ง

```bash
# โคลนโปรเจกต์
git clone https://github.com/jakkti111/ctc-ui-react.git
cd ctc-ui-react

# ติดตั้ง dependencies
pnpm install

# หรือใช้ npm
npm install --legacy-peer-deps
```

> **หมายเหตุ:** ต้องใส่ `--legacy-peer-deps` เมื่อใช้ npm เนื่องจากมี peer dependency ขัดแย้งกันระหว่าง `eslint-plugin-import` กับ `eslint@10` ส่วน pnpm ไม่ต้องใส่ flag นี้

### รัน Dev Server

```bash
pnpm dev
# หรือ: npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:5173](http://localhost:5173)

### Build สำหรับ Production

```bash
pnpm build
# หรือ: npm run build
```

ไฟล์ผลลัพธ์จะอยู่ในโฟลเดอร์ `dist/` ดูตัวอย่างผลลัพธ์บนเครื่องได้ด้วยคำสั่ง `pnpm preview`

### Storybook (เอกสารไลบรารีคอมโพเนนต์)

```bash
pnpm storybook
# หรือ: npm run storybook
```

เปิด Storybook ที่ [http://localhost:6006](http://localhost:6006)

### ตรวจสอบ Type & Lint

```bash
pnpm test          # รัน type-check + lint + prettier พร้อมกัน
pnpm type-check    # ตรวจสอบ TypeScript เท่านั้น
pnpm lint          # รัน ESLint เท่านั้น
pnpm prettier      # จัดฟอร์แมตโค้ดด้วย Prettier
```

## โครงสร้างโปรเจกต์

```
ctc-ui-react/
├── components/                    # ไลบรารี Untitled UI (โอเพนซอร์ส)
│   ├── base/                      # คอมโพเนนต์พื้นฐาน (17 หมวดหมู่)
│   │   ├── avatar/                # Avatar, AvatarLabelGroup
│   │   ├── badges/                # Badge, BadgeWithDot, BadgeWithIcon
│   │   ├── buttons/               # Button, SocialButtons, AppStoreButtons
│   │   ├── checkbox/              # Checkbox
│   │   ├── dropdown/              # เมนูดรอปดาวน์
│   │   ├── input/                 # Input, PinInput
│   │   ├── progress-indicators/   # ProgressBar, CircleProgress
│   │   ├── radio-buttons/         # RadioButton, RadioGroup
│   │   ├── select/                # Select, MultiSelect, TagSelect
│   │   ├── slider/                # Slider
│   │   ├── tags/                  # Tags
│   │   ├── textarea/              # Textarea
│   │   ├── toggle/                # สวิตช์ Toggle
│   │   └── tooltip/               # Tooltip
│   ├── application/               # คอมโพเนนต์แอปพลิเคชันขั้นสูง
│   │   ├── activity-feed/         # Activity feed (คัสตอม)
│   │   ├── alerts/                # คอมโพเนนต์แจ้งเตือน (คัสตอม)
│   │   ├── app-navigation/        # Header & sidebar navigation
│   │   ├── carousel/              # แคโรเซลรูปภาพ
│   │   ├── charts/                # กราฟแท่ง, เส้น, วงกลม, เรดาร์, เกจ
│   │   ├── date-picker/           # เลือกวันที่ & ช่วงวันที่
│   │   ├── empty-state/           # รูปแบบหน้าว่างข้อมูล
│   │   ├── file-upload/           # อัปโหลดไฟล์พร้อม progress
│   │   ├── loading-indicator/     # ตัวโหลด/สปินเนอร์
│   │   ├── modals/                # กล่องโต้ตอบ Modal
│   │   ├── pagination/            # รูปแบบ Pagination
│   │   ├── slideout-menus/        # แผงเมนูเลื่อนออก
│   │   ├── table/                 # ตารางข้อมูล
│   │   └── tabs/                  # แท็บนำทาง
│   ├── foundations/               # ดีไซน์โทเคน & ไอคอน
│   └── shared-assets/             # ภาพประกอบ, QR code ฯลฯ
│
├── src/                           # แอปพลิเคชันสำหรับพรีวิว
│   ├── main.tsx                   # จุดเริ่มต้น React
│   ├── app.tsx                    # โครงแอปพร้อม sidebar navigation
│   ├── components/
│   │   ├── example-gallery.tsx    # กริดแกลเลอรีพร้อมภาพ wireframe ย่อ
│   │   ├── mock-templates.tsx     # ตัวจัดเส้นทางหน้ารายละเอียด
│   │   ├── dashboard-details/     # แดชบอร์ด 19 รูปแบบ
│   │   ├── settings-details/      # หน้าตั้งค่า 21 รูปแบบ
│   │   ├── informational-details/ # หน้าข้อมูล 19 รูปแบบ
│   │   ├── auth-details/          # หน้า login 16 + สมัครสมาชิก 21 รูปแบบ
│   │   ├── error-details/         # หน้า 404 จำนวน 14 รูปแบบ
│   │   ├── verification-details/  # ยืนยันตัวตน 3 + ลืมรหัสผ่าน 5 รูปแบบ
│   │   └── email-details/         # เทมเพลตอีเมล 10 รูปแบบ
│   └── pages/
│       ├── marketing/             # คอมโพเนนต์การตลาด 18 + ตัวอย่าง 10 หน้า
│       └── *.tsx                  # หน้าโชว์คอมโพเนนต์
│
├── styles/                        # สไตล์ส่วนกลาง
│   ├── globals.css                # นำเข้า Tailwind & utilities
│   ├── theme.css                  # ดีไซน์โทเคน (สี, เงา, ฟอนต์)
│   └── typography.css             # สเกลตัวอักษร
│
├── hooks/                         # Custom React hooks
│   ├── use-active-item.ts         # ติดตามด้วย Intersection observer
│   ├── use-breakpoint.ts          # ตรวจจับ breakpoint ของ Tailwind
│   ├── use-clipboard.ts           # คัดลอกไปคลิปบอร์ด
│   └── use-resize-observer.ts     # ติดตามการเปลี่ยนขนาด element
│
├── utils/                         # ยูทิลิตี้
│   ├── cx.ts                      # รวม class ของ Tailwind
│   ├── countries.tsx              # ข้อมูลประเทศ
│   ├── is-react-component.ts      # ตรวจสอบชนิดของคอมโพเนนต์
│   └── timezones.tsx              # ข้อมูล timezone
│
├── index.html                     # HTML entry
├── vite.config.mts                # ค่าคอนฟิก Vite
├── tsconfig.json                  # ค่าคอนฟิก TypeScript
└── package.json                   # Dependencies & scripts
```

## ภาพรวมหน้าทั้งหมด

### คอมโพเนนต์พื้นฐาน (27 หน้า)

Avatars, Badge groups, Badges, Button groups, Buttons, Checkboxes, Credit cards, Dropdowns, Featured icons, Illustrations, Inputs, Mobile app store buttons, Progress indicators, QR codes, Radio buttons, Radio groups, Rating badge & stars, Select, Multi select, Sliders, Social buttons, Tags, Textareas, Toggles, Tooltips, Utility buttons, Verification code inputs

### คอมโพเนนต์ Application UI (37 หน้า)

Activity feeds, Activity gauges, Alerts, Breadcrumbs, Calendars, Card headers, Carousels, Code snippets, Color pickers, Command menus, Content dividers, Date pickers, Empty states, File uploaders, Filter bars, Gradient pickers, Header navigations, Image pickers, Inline CTAs, Line & bar charts, Loading indicators, Messaging, Metrics, Modals, Notifications, Page headers, Pagination, Pie charts, Progress steps, Radar charts, Section footers, Section headers, Sidebar navigations, Slideout menus, Tables, Tabs, Tree views

### ตัวอย่าง Application UI (แกลเลอรี 6 หน้า → หน้ารายละเอียด 128 หน้า)

| หมวดหมู่ | จำนวนหน้า | เนื้อหา |
|----------|-------|---------|
| Dashboards 01 | 10 | แดชบอร์ด analytics, traffic, ecommerce, ลูกค้า |
| Dashboards 02 | 9 | แดชบอร์ดยอดขาย, การเงิน, ธนาคาร, fintech, บัตร |
| Settings 01 | 11 | ตั้งค่าโปรไฟล์, รหัสผ่าน, ทีม, การเรียกเก็บเงิน |
| Settings 02 | 10 | การเรียกเก็บเงิน, การแจ้งเตือน, การเชื่อมต่อ |
| Informational 01 | 10 | ประวัติการซื้อขาย, คำสั่งซื้อ, ลูกค้า, ปฏิทิน |
| Informational 02 | 9 | การส่งข้อความ, โปรเจกต์, โปรไฟล์, editor |

แต่ละหน้ารายละเอียดมี **เลย์เอาต์เฉพาะตัว** พร้อม sidebar navigation จริง, ตารางข้อมูล, กราฟ และฟอร์มต่างๆ

### ตัวอย่างหน้าที่ใช้ร่วมกัน (แกลเลอรี 6 หน้า → หน้ารายละเอียด 69 หน้า)

| หมวดหมู่ | จำนวนหน้า | รูปแบบ |
|----------|-------|---------|
| หน้า Log in | 16 | Simple, card, split, social login, illustration |
| หน้าสมัครสมาชิก | 21 | Simple, progress steps, split, sidebar progress |
| ยืนยันตัวตน | 3 | ตรวจอีเมล, กรอกรหัส, สำเร็จ |
| ลืมรหัสผ่าน | 5 | กรอกอีเมล, ตรวจอีเมล, ตั้งรหัสใหม่, สำเร็จ, sidebar |
| หน้า 404 | 14 | Simple, split image, illustration, maintenance |
| เทมเพลตอีเมล | 10 | ต้อนรับ, ยืนยันตัวตน, วิดีโอ, คำเชิญ, mockup |

### คอมโพเนนต์การตลาด (18 หน้า)

Banners, Blog sections, Careers sections, Contact sections, Content & rich text, CTA sections, FAQ sections, Features sections, Footers, Header navigations, Hero header sections, Header sections, Metrics sections, Newsletter CTA, Pricing sections, Social proof, Team sections, Testimonial sections

### ตัวอย่างหน้าการตลาด (10 หน้าแบบเต็ม)

About pages, Blog posts, Blogs, Contact pages, FAQ pages, Landing pages, Legal pages, Pricing pages, Team pages, 404 pages

## ฟีเจอร์เด่น

- **Lazy-loaded pages** — ทุกหน้าใช้ `React.lazy()` เพื่อประสิทธิภาพสูงสุด
- **Wireframe thumbnails** — การ์ดในแกลเลอรีแสดงภาพ wireframe ย่อให้ตรงกับแต่ละประเภทหน้า
- **คอมโพเนนต์แบบโต้ตอบได้** — ตัวกรอง, toggle, แท็บ และ modal ใช้งานได้จริงทั้งหมด
- **ข้อมูลจริง** — ตาราง, กราฟ และรายการใช้ข้อมูลตัวอย่างที่สมจริง
- **รองรับหลายขนาดหน้าจอ** — คอมโพเนนต์ปรับตามขนาดหน้าจอได้
- **Accessible** — สร้างบน React Aria เพื่อรองรับมาตรฐาน WCAG

## การปรับแต่ง

### สีแบรนด์

แก้ไขไฟล์ `styles/theme.css` เพื่อเปลี่ยนชุดสีแบรนด์:

```css
@theme {
  --color-brand-500: rgb(158 119 237);  /* สีหลักของแบรนด์ */
  --color-brand-600: rgb(127 86 217);   /* สีสำหรับสถานะ interactive */
  /* ... สเกลสีเต็มตั้งแต่ 25 ถึง 950 */
}
```

### การเพิ่มหน้าใหม่

1. สร้างไฟล์หน้าใหม่ในโฟลเดอร์ `src/pages/`
2. เพิ่ม lazy import ในไฟล์ `src/app.tsx`
3. ลงทะเบียนในอ็อบเจกต์ `pageComponents`
4. เพิ่มเข้าไปใน array `navSections` ที่เกี่ยวข้อง

## สัญญาอนุญาต (License)

คอมโพเนนต์โอเพนซอร์สของ Untitled UI อยู่ภายใต้สัญญาอนุญาต [MIT license](./LICENSE)

แอปพลิเคชันพรีวิวนี้ (โฟลเดอร์ `src/`) จัดทำขึ้นเพื่อการสาธิตเท่านั้น

## เครดิต

- [Untitled UI](https://www.untitledui.com/react) — ไลบรารีคอมโพเนนต์
- [React Aria](https://react-spectrum.adobe.com/react-aria/) — Accessibility primitives
- [Recharts](https://recharts.org/) — ไลบรารีกราฟ
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
