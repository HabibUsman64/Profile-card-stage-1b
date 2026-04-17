# HNG Stage 1b - Profile Card



## ✨ Features

- **Semantic HTML:** Built using proper tags like `<article>`, `<figure>`, and `<nav>` for better SEO and accessibility.
- **Real-Time UTC:** Displays the current time in milliseconds, updating dynamically using JavaScript.
- **Fully Responsive:** Adapts seamlessly from mobile devices (stacked layout) to desktop monitors.
- **Accessibility (A11y):** - Passes color contrast checks.
  - Keyboard navigable links.
  - Uses `aria-live="polite"` for dynamic time updates to notify screen readers.
- **Performance:** Lightweight implementation with zero external frameworks.

## 🚀 Technical Implementation

- **Data Test Attributes:** Includes all required `data-testid` attributes (e.g., `test-profile-card`, `test-user-time`) for automated test compliance.
- **Time Logic:** Uses `Date.now()` inside a `setInterval` function to provide high-precision millisecond tracking.
- **Layout:** Implemented using CSS Flexbox with media queries to ensure the avatar and content align correctly on larger screens.

## 🛠 Tech Stack
- HTML5 (Semantic)
- CSS3 (Flexbox & Responsive Design)
- Vanilla JavaScript

## 🔗 Live Link

profile-card-stage-1b.netlify.app
