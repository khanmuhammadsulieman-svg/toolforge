# Toolforge Scanner

Toolforge Scanner is a starter mobile app (Expo / React Native) that implements the core tabs and scaffolding for a documents scanner app similar to CamScanner.

Features included in this starter:
- Tabs: Documents, Scanner, Edit, Excel, History
- Basic camera capture flow (expo-camera)
- Document list placeholder
- Edit screen placeholder for cropping/filters (UI only)
- Excel/CSV file picker placeholder (expo-document-picker)

This is a scaffold to help you iterate quickly. To run locally:

1. Install Node (>=16) and Expo CLI (optional):
   npm install -g expo-cli

2. From this folder run:
   cd toolforge-scanner
   npm install
   npx expo start

3. Open the Expo app on your device or run in an emulator.

Notes / Next steps:
- Install and configure native modules you need (PDF export, advanced image processing, OCR).
- Add persistent storage for Documents and History (SQLite or Realm).
- Implement image cropping, filters, and OCR (Tesseract or Google ML Kit).

License: MIT
