# CabbageCircuit

**CabbageCircuit** is a React Native application that uses parallax scrolling for visually rich user interfaces. It features animated header images that adjust based on the scroll position, with different background colors for light and dark modes. Users can explore content with smooth animations and dynamic effects, making it an interactive and immersive UI.

This app is built with the power of **react-native-reanimated** and **Expo** to create smooth parallax scrolling effects that adjust to the scroll position, creating an engaging experience.

---

## Features
- **Parallax Scrolling**: Animated header image that moves and scales as users scroll down the screen.
- **Themed Backgrounds**: Automatic adjustment of header backgrounds based on system color scheme (light/dark mode).
- **Responsive Design**: Optimized for both mobile and tablet devices.
- **Smooth Animations**: Using `react-native-reanimated` for interactive UI components.

---

## Tech Stack

### **Frontend**:
- **React Native**: For building native mobile apps using JavaScript and React.
- **React Navigation**: For routing and navigation between different screens.
- **Expo**: A framework and platform for universal React applications.
- **react-native-reanimated**: A library for creating smooth animations and transitions.
- **react-native-safe-area-context**: Provides support for safe area insets on devices with notches or rounded corners.
- **TypeScript**: For type safety and better development experience.
- **Jest**: For testing React components and logic.

---

## File Structure

The following is the file structure of the **CabbageCircuit** application:

```
cabbagecircuit/
├── .expo/
│   ├── types/
│   │   └── router.d.ts
│   ├── web/
│   │   └── cache/
│   │       └── production/
│   │           └── images/
│   │                └── favicon-48.png
│   ├── devices.json
│   ├── README.md
│   └── settings.json
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── explore.tsx
│   │   ├── index.tsx
│   │   └── profile.tsx
│   ├── _layout.tsx
│   ├── +html.tsx
│   └── +not-found.tsx
├── assets/
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   └── images/
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash.png
├── components/
│   ├── __tests__/
│   │   └── __snapshots__/
│   │       └── ThemedText-test.tsx.snap
│   ├── navigation/
│   │   └── TabBarIcon.tsx
│   ├── Collapsible.tsx
│   ├── ExternalLink.tsx
│   ├── HelloWave.tsx
│   ├── ParallaxScrollView.tsx
│   ├── ThemedText.tsx
│   └── ThemedView.tsx
│   ├── constants/
│   │   └── Colors.ts
│   └── hooks/
│       ├── useColorScheme.ts
│       ├── useColorScheme.web.ts
│       └── useThemeColor.ts
├── node_modules/
├── scripts/
├── .gitignore
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cabbagecircuit.git
   cd cabbagecircuit
   ```
2. **Install dependencies:**:
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Start the development server:**
   ```bash
   yarn start
   # or
   npm start
   ```

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
