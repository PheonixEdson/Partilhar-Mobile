# Partilhar — Mobile (React Native + Expo)

## Como rodar

```bash
npm install
npx expo install react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage @expo/vector-icons @react-native-picker/picker react-native-paper react-native-reanimated
npx expo start
```

## Build com EAS (Android)

```bash
npm install -g eas-cli
eas login
eas build -p android --profile production
```
