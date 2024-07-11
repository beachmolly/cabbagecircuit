# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## File Structure

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

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
