# 🚀 React Conversion Guide - Interactive Landing Page

> Hướng dẫn chi tiết chuyển đổi từ HTML/CSS/JS sang React Components

---

## 📋 Tổng Quan Chuyển Đổi

### ✅ Những Gì Đã Thay Đổi

| Aspect | HTML/CSS/JS | React |
|--------|-----------|-------|
| **Structure** | HTML sections | React Components |
| **Classes** | `class=""` | `className=""` |
| **Attributes** | `data-target` | Props, State, `dataset` |
| **Events** | `addEventListener` | `onClick`, `onChange` |
| **Animations** | Vanilla JS | GSAP functions exported |
| **Styling** | Single CSS file | Component-level CSS |
| **Data** | Hardcoded HTML | State/Props objects |

---

## 📁 Cấu Trúc File React

```
src/
├── components/              # React Components
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Features grid
│   ├── FeatureCard.jsx     # Feature card (reusable)
│   ├── About.jsx           # About section
│   ├── Highlights.jsx      # Highlights section
│   ├── HighlightItem.jsx   # Highlight item (reusable)
│   ├── Stats.jsx           # Statistics section
│   ├── CTA.jsx             # Call-to-action
│   └── Footer.jsx          # Footer
├── animations/             # GSAP Animation functions
│   ├── heroAnimations.js   # Hero-specific animations
│   └── sectionAnimations.js # Other section animations
├── styles/                 # Component CSS files
│   ├── App.css
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Features.css
│   ├── FeatureCard.css
│   ├── About.css
│   ├── Highlights.css
│   ├── HighlightItem.css
│   ├── Stats.css
│   ├── CTA.css
│   └── Footer.css
├── App.jsx                 # Main App component
├── index.jsx               # React entry point
├── index.css               # Global styles
└── main.jsx                # Vite entry point
```

---

## 🔄 Các Thay Đổi Chính

### 1️⃣ **Class → className**

```jsx
// ❌ HTML
<div class="container">

// ✅ React
<div className="container">
```

### 2️⃣ **Event Listeners → React Events**

```jsx
// ❌ HTML/JS
document.addEventListener('click', handleClick);

// ✅ React
<button onClick={handleClick}>Click me</button>
```

### 3️⃣ **State & Props**

```jsx
// ✅ React Component with State
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  return <nav className={isScrolled ? 'scrolled' : ''} />
};

// ✅ Reusable Component with Props
const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
```

### 4️⃣ **Data as Objects**

```jsx
// ✅ Data stored as arrays/objects
const featuresData = [
  { id: 1, title: 'Responsive Design', description: '...' },
  { id: 2, title: 'Smooth Animations', description: '...' },
];

// ✅ Render with map
{featuresData.map((feature) => (
  <FeatureCard key={feature.id} {...feature} />
))}
```

### 5️⃣ **useEffect for Side Effects**

```jsx
// ✅ Run animations when component mounts
useEffect(() => {
  animateHeroTitle();
  animateHeroElements();
  animateHeroImage();
}, []); // Empty dependency = run once on mount
```

---

## 🎯 Component Architecture

### ✅ Smart & Dumb Components

```
App (Smart - no animations)
├── Navbar (Smart - handles scroll state)
├── Hero (Smart - handles animations)
├── Features (Smart - handles animations)
│   └── FeatureCard (Dumb - receives props)
├── About (Smart - handles animations)
├── Highlights (Smart - handles animations)
│   └── HighlightItem (Dumb - receives props)
├── Stats (Smart - handles animations)
├── CTA (Smart - handles animations)
└── Footer (Dumb - static content)
```

**Smart Components:** Có state, lifecycle (useEffect), animations
**Dumb Components:** Chỉ nhận props, render UI

---

## 🎬 Animation Pattern

### ✅ Animations với useEffect

```jsx
// heroAnimations.js (exported functions)
export const animateHeroTitle = () => {
  const words = gsap.utils.toArray('.hero-title .word');
  gsap.to(words, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });
};

// Hero.jsx (use in component)
const Hero = () => {
  useEffect(() => {
    animateHeroTitle();      // Trigger khi component mount
    animateHeroElements();
    animateHeroImage();
  }, []);                    // Empty dependency = chỉ chạy một lần

  return <section id="hero" className="hero">...</section>;
};
```

**Lợi ích:**
- ✅ Animation functions reusable
- ✅ Dễ debug & test
- ✅ Separation of concerns

---

## 📊 Data Mapping Pattern

### ✅ Features Section

```jsx
// Data as array of objects
const featuresData = [
  {
    id: 1,
    icon: <CheckIcon />,
    title: 'Responsive Design',
    description: '...'
  },
  // ... more features
];

// Render with .map()
<div className="features-grid">
  {featuresData.map((feature) => (
    <FeatureCard
      key={feature.id}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
    />
  ))}
</div>
```

**Benefit:** Dễ update data, thêm/xóa item, maintain code

---

## 🎨 Styling Strategy

### ✅ Component-level CSS (Recommended)

```
src/
├── styles/
│   ├── Navbar.css          # Only Navbar styles
│   ├── Hero.css            # Only Hero styles
│   ├── Features.css        # Only Features styles
│   ├── FeatureCard.css     # Only FeatureCard styles
│   └── App.css             # Global styles
```

**Advantages:**
- ✅ Better organization
- ✅ Easier to maintain
- ✅ Can use CSS Modules if needed
- ✅ Can scale to Styled Components / Tailwind

### Optional: CSS Modules (Advanced)

```jsx
// import styles from './Hero.module.css';
// <div className={styles.hero}>
```

---

## 🚀 Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 2️⃣ Install GSAP (if not in package.json)
```bash
npm install gsap
```

### 3️⃣ Run Development Server
```bash
npm run dev
```

### 4️⃣ Build for Production
```bash
npm run build
```

---

## 🔧 Key Changes Explained

### Navbar Component
```jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setIsScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll); // Cleanup
}, []);
```

**Why:**
- ✅ State replaces `classList.add/remove`
- ✅ useEffect handles side effects (event listeners)
- ✅ Cleanup function prevents memory leaks

### Features Component
```jsx
{featuresData.map((feature) => (
  <FeatureCard key={feature.id} {...feature} />
))}
```

**Why:**
- ✅ `key` prop for efficient React rendering
- ✅ `...feature` spreads all properties as props
- ✅ `.map()` replaces repeated HTML

### Animations
```jsx
useEffect(() => {
  animateSectionHeaders();
  animateFeatureCards();
}, []);
```

**Why:**
- ✅ Animations run after component mounts
- ✅ Empty dependency array = run once (like `DOMContentLoaded`)
- ✅ No delay for user experience

---

## 📝 Conversion Checklist

- ✅ All HTML converted to JSX
- ✅ All `class` → `className`
- ✅ All event handlers → React events
- ✅ State management with `useState`
- ✅ Side effects with `useEffect`
- ✅ Components organized & reusable
- ✅ CSS files per component
- ✅ GSAP animations exported
- ✅ Mobile responsive maintained
- ✅ Accessibility features preserved

---

## 💡 Best Practices Used

| Practice | Implementation |
|----------|-----------------|
| **Component Composition** | Small, focused components |
| **Reusable Components** | FeatureCard, HighlightItem |
| **Props Over State** | Dumb components use props |
| **useEffect Cleanup** | Remove listeners on unmount |
| **Key Prop** | Proper list rendering with keys |
| **Separation of Concerns** | Animations in separate files |
| **Mobile Responsive** | CSS media queries maintained |
| **Accessibility** | Alt text, semantic HTML |
| **Performance** | Proper dependency arrays |

---

## 🎯 What's Working

- ✅ **GSAP Animations** - All animations preserved
- ✅ **Scroll Triggers** - ScrollTrigger functionality intact
- ✅ **Responsive Design** - Mobile-first approach maintained
- ✅ **Component Reusability** - FeatureCard, HighlightItem
- ✅ **State Management** - Navbar scroll detection
- ✅ **Event Handling** - Button clicks, smooth scroll

---

## 🚀 Next Steps (Optional Enhancements)

1. **Add routing** with React Router
2. **CSS Modules** for scoped styling
3. **Styled Components** for dynamic styles
4. **TypeScript** for type safety
5. **Context API** for global state
6. **Performance** optimization with React.memo

---

## 📚 File Summary

| File | Purpose | Key Features |
|------|---------|--------------|
| `App.jsx` | Main component | Composes all sections |
| `Navbar.jsx` | Navigation | Scroll detection, mobile menu |
| `Hero.jsx` | Hero section | Text reveal animation |
| `Features.jsx` | Features grid | Map data, call animations |
| `FeatureCard.jsx` | Card component | Reusable, receives props |
| `About.jsx` | About section | Image parallax |
| `Highlights.jsx` | Highlights grid | Numbered items |
| `Stats.jsx` | Statistics | Number counter animation |
| `CTA.jsx` | Call-to-action | Gradient background |
| `Footer.jsx` | Footer | Links, social media |

---

## 🎓 Learning Resources

- **React Docs:** https://react.dev
- **GSAP Docs:** https://gsap.com
- **React Hooks:** https://react.dev/reference/react
- **CSS in React:** https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

---

**✅ Project successfully converted to React!**

All components, animations, and styling are now organized using React best practices.

*Conversion completed on November 14, 2025*
