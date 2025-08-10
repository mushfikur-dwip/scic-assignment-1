# E-Commerce Product Management System

A modern e-commerce product management system built with React, Vite, Firebase, and Tailwind CSS.

## Features

- User authentication (Email/Password and Google Sign-in)
- Product management (Add, Edit, Delete products)
- Product filtering and search
- Responsive design with dark/light mode
- Firebase integration for authentication and data storage

## Environment Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Firebase project with authentication enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scic-assignment-1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

4. Start the development server:
```bash
npm run dev
```

## Firebase Configuration

To set up Firebase for this project:

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and select Email/Password and Google providers
3. Create a Firestore database
4. Get your Firebase config from Project Settings > General > Your apps
5. Add the config values to your `.env` file

## Security Notes

- Never commit `.env` files to version control
- Use environment variables for all sensitive configuration
- Regularly rotate API keys and credentials
- Enable Firebase security rules for production

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (AuthProvider)
├── firebase/       # Firebase configuration
├── hooks/          # Custom React hooks
├── pages/          # Page components
└── assets/         # Static assets
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
