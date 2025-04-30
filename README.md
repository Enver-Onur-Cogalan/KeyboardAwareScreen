
# 🔐 Keyboard Aware Login Screen

This is a simple but fully functional **keyboard-aware login screen** built with React Native.  
It uses `KeyboardAvoidingView`, `ScrollView`, and `TouchableWithoutFeedback` to create a seamless user experience when the keyboard is active.

---

## 📱 Features

- Two `TextInput` fields for email and password
- A login `TouchableOpacity` button that remains visible when the keyboard is open
- `KeyboardAvoidingView` to prevent inputs from being hidden behind the keyboard
- Dismiss keyboard on tapping outside
- Added scrollable content to simulate a busy screen
- Compatible with both **iOS** and **Android**

---

## 🚀 How to Run

1. Clone the repository
2. Run:

```bash
npm install
npm run android # or npm run ios
```

> Tested on:  
> - React Native CLI  
> - React Native 0.7x  
> - Android Emulator & iOS Simulator

---

## 🧠 Learnings & Purpose

This challenge was created to improve UX in login forms and understand how to handle keyboard-aware layouts in mobile development.  
Handling the keyboard properly is critical for accessibility and user satisfaction.

---

## 📁 File Structure

```
/screens/LoginScreen.tsx
App.tsx
```

---

## ✅ Screenshot

![Login Screen](./screenshot-login.png)


---

Let’s keep building better UI/UX! 💪
