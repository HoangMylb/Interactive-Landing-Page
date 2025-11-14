# 🎨 Interactive Landing Page – React Version

> A professional, responsive landing page portfolio featuring GSAP animations, modern React components, and mobile-first design.

---

## 📋 Mục Lục

- [Giới Thiệu](#giới-thiệu)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
- [Cài Đặt & Chạy](#cài-đặt--chạy)
- [Các Tính Năng](#các-tính-năng)
- [Hướng Dẫn Tùy Chỉnh](#hướng-dẫn-tùy-chỉnh)
- [Liên Kết Hữu Ích](#liên-kết-hữu-ích)

---

## 🎯 Giới Thiệu

Dự án này là một **Landing Page hiện đại được xây dựng với React** có:
- ✅ 10 React components (Navbar, Hero, Features, About, Highlights, Stats, CTA, Footer...)
- ✅ GSAP animations (60 FPS)
- ✅ ScrollTrigger effects
- ✅ Responsive design (Mobile-first)
- ✅ Vite build tool
- ✅ Component-scoped CSS
- ✅ React hooks (useState, useEffect)

**Lý tưởng cho:**
- Portfolio cá nhân
- Landing page dự án
- Demo công ty
- Học tập React & modern web development

---

## 🛠️ Công Nghệ Sử Dụng

| Công Nghệ | Phiên Bản | Mục Đích |
|-----------|---------|---------|
| **React** | 18.2.0 | UI library & components |
| **React DOM** | 18.2.0 | DOM rendering |
| **GSAP** | 3.12.2 | Smooth animations |
| **ScrollTrigger** | Plugin | Scroll-based triggers |
| **Vite** | 4.3.9 | Modern build tool |
| **JavaScript** | ES6+ | Modern syntax |

---

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/                    # 10 React components
│   ├── Navbar.jsx                # Navigation with scroll state
│   ├── Hero.jsx                  # Hero section with animations
│   ├── Features.jsx              # Features grid
│   ├── FeatureCard.jsx           # Reusable feature card
│   ├── About.jsx                 # About section
│   ├── Highlights.jsx            # Highlights grid
│   ├── HighlightItem.jsx         # Reusable highlight item
│   ├── Stats.jsx                 # Statistics section
│   ├── CTA.jsx                   # Call-to-action section
│   └── Footer.jsx                # Footer with links
│
├── animations/                    # GSAP animation functions (exported)
│   ├── heroAnimations.js         # Hero-specific animations
│   └── sectionAnimations.js      # All section animations
│
├── styles/                        # Component-scoped CSS
│   ├── App.css                   # Global styles
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Features.css
│   ├── FeatureCard.css
│   ├── About.css
│   ├── Highlights.css
│   ├── HighlightItem.css
│   ├── Stats.css
│   ├── CTA.css
│   ├── Footer.css
│   └── index.css                 # Global root styles
│
├── App.jsx                        # Main component
├── main.jsx                       # Vite entry point
└── index.jsx                      # React entry point

assets/
└── img/                           # Image placeholders
    ├── hero-placeholder.svg
    └── about-placeholder.svg

Configuration:
├── index.html                     # HTML entry point
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies & scripts
```

---

## 🚀 Cài Đặt & Chạy

### 1️⃣ Yêu Cầu
- Node.js 14+ và npm
- VS Code (tùy chọn)

### 2️⃣ Cài Đặt

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Browser sẽ tự mở tại http://localhost:5173
```

### 3️⃣ Build for Production

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

---

## ✨ Các Tính Năng

### Components
- **Navbar** - Sticky navigation với scroll detection và mobile menu
- **Hero** - Hero section với text reveal animation và parallax
- **Features** - 4 feature cards với icons
- **About** - About section với image và checklist
- **Highlights** - 6 highlight items với animations
- **Stats** - 4 statistics với counter animation
- **CTA** - Call-to-action section
- **Footer** - Footer với links và social media

### Animations
- ✅ Text reveal (words slide up)
- ✅ Fade-in effects
- ✅ Slide-in animations
- ✅ Parallax scrolling
- ✅ Scale & bounce effects
- ✅ Counter animations
- ✅ Scroll-triggered animations
- ✅ Hover effects

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimization (768px)
- ✅ Desktop layouts (1024px+)
- ✅ All animations work on mobile

---

## 📚 Hướng Dẫn Tùy Chỉnh

### Thay Đổi Màu Sắc

Mở `src/styles/index.css` và tìm `:root`:

```css
:root {
  --primary-color: #667eea;      /* Màu chính */
  --primary-dark: #764ba2;       /* Màu chính tối */
  --secondary-color: #f093fb;    /* Màu phụ */
  --text-dark: #1a202c;          /* Màu chữ */
  --text-light: #718096;         /* Màu chữ nhạt */
}
```

### Thêm Feature Mới

1. Mở `src/components/Features.jsx`
2. Thêm object vào `featuresData` array:

```jsx
{
  id: 5,
  icon: <YourIcon />,
  title: "Feature Name",
  description: "Feature description"
}
```

### Tùy Chỉnh Animation

Mở `src/animations/sectionAnimations.js` và chỉnh sửa GSAP timeline:

```javascript
export const animateFeatureCards = () => {
  gsap.to('.feature-card', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.12,
    scrollTrigger: {
      trigger: '.features-section',
      start: 'top 80%'
    }
  });
};
```

---

## 📖 Liên Kết Hữu Ích

### Documentation
- 📄 **SETUP_AND_EXPLANATION.md** - Hướng dẫn setup chi tiết & cách hoạt động
- 📄 **REACT_CONVERSION_SUMMARY.md** - Tóm tắt quá trình chuyển đổi
- 📄 **REACT_CONVERSION_GUIDE.md** - Hướng dẫn chi tiết từng conversion
- 📄 **CONVERSION_INDEX.md** - Index của toàn bộ dự án

### Resources
- [React Documentation](https://react.dev)
- [GSAP Documentation](https://gsap.com)
- [Vite Documentation](https://vitejs.dev)
- [ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger)

---

## 🎓 Học Tập

### Beginner
1. Đọc `REACT_CONVERSION_SUMMARY.md` để hiểu overview
2. Nhìn `src/components/FeatureCard.jsx` (component đơn giản)
3. Nhìn `src/components/Navbar.jsx` (component với state)

### Intermediate
1. Đọc `SETUP_AND_EXPLANATION.md`
2. Xem tất cả components trong `src/components/`
3. Hiểu pattern animation trong `src/animations/`

### Advanced
1. Đọc `REACT_CONVERSION_GUIDE.md`
2. Modify components để thêm features mới
3. Tạo components mới cho sections mới

---

## 🚀 Next Steps

- [ ] Customize với content thực tế
- [ ] Adjust colors theo branding
- [ ] Add contact form
- [ ] Add dark mode
- [ ] Deploy to Netlify/Vercel
- [ ] Add TypeScript

---

**Created:** November 2025  
**Version:** React 1.0 (Converted from Vanilla HTML/CSS/JS)  
**Status:** ✅ Production Ready
