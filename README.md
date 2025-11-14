# VoyLearning - Your Voyage to Web Development Mastery

A modern learning platform built with Next.js 15, Firebase, and AI-powered assistance where juniors can explore and edit curated HTML notes. The goal is to help learners personalize notes across core subjects and grow faster.

## Features

- 🔐 **Firebase Authentication** - Secure sign-in with email/password and Google OAuth
- 📚 **Course Management** - Organized courses (ATA, BDA, FSP, LANA) with HTML notes
- 🤖 **AI Assistant** - Gemini-powered assistant to help understand and modify notes
- 🖼️ **Image Upload** - Firebase Storage and ImgBB integration for image hosting
- 💾 **Data Persistence** - User-specific note modifications saved to Firestore
- 💬 **Chat History** - Persistent conversation history with AI assistant
- 🎨 **Modern UI** - Built with Tailwind CSS, shadcn/ui, and Radix UI
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

## Subjects

VoyLearning includes curated HTML notes for the following subjects:

- **ATA** — Algorithmic Thinking and its Applications
- **BDA** — Basics Of Data Analytics
- **FSP** — Foundations Of Statistics and Probability
- **LANA** — Linear Algebra and Numerical Analysis

Browse them from the landing page Subjects section or directly under the Dashboard.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Firebase (Auth, Firestore, Storage)
- **AI**: Google Gemini via Genkit
- **Image Processing**: browser-image-compression

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project set up
- Gemini API key from Google AI Studio

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env`:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Server-side only
GEMINI_API_KEY=your_gemini_api_key
IMGBB_API_KEY=your_imgbb_api_key (optional)
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key (optional)
```

Important for Google sign-in during development:

- Add your dev origins (e.g., `http://localhost:9003`) and any custom domains to Firebase Authentication → Authorized domains.
- Ensure the Google provider is enabled in Authentication → Sign-in method.

4. Deploy Firestore security rules:

```bash
firebase deploy --only firestore:rules
```

5. Deploy Storage security rules:

```bash
firebase deploy --only storage
```

6. Run the development server:

```bash
npm run dev
```

Open [http://localhost:9003](http://localhost:9003) in your browser.

## Project Structure

```ini
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Protected dashboard routes
│   ├── signin/            # Authentication pages
│   └── signup/
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   ├── voy-learning/     # Landing page sections (hero, subjects, etc.)
│   └── ui/               # Reusable UI components (shadcn)
├── firebase/             # Firebase configuration and hooks
│   ├── firestore/        # Firestore hooks and utilities
│   ├── config.ts         # Firebase config
│   ├── index.ts          # Firebase initialization
│   └── storage.ts        # Storage utilities
├── ai/                   # AI/Genkit flows
│   └── flows/            # Genkit flow definitions
├── data/                 # Static data (note metadata)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Key Features Explained

### AI Assistant

The AI assistant uses Google's Gemini model via Genkit to:

- Answer questions about note content
- Modify HTML structure and content
- Insert images and links into notes
- Provide contextual help

**Note:** The Gemini API key is configured server-side in `.env` for security and ease of use.

### Data Persistence

User modifications are stored in Firestore at:

- `users/{userId}/notes/{noteId}` - Modified HTML content
- `users/{userId}/noteChats/{noteId}/messages` - Chat history

Images uploaded from chats are stored in Firebase Storage at:

- `users/{userId}/noteImages/{noteId}/{timestamp}_{fileName}`

### Security

- Firestore rules ensure users can only access their own data
- Storage rules validate file types and sizes
- HTML is rendered in sandboxed iframes
- Server-side HTML sanitization in AI flows

## Editing Workflow

1. Sign in (email/password or Google).
2. Open Dashboard → choose a subject (ATA, BDA, FSP, LANA) → pick a note.
3. Use the AI Assistant to ask questions or request edits to the HTML.
4. Your personalized HTML is saved to Firestore under `users/{uid}/notes/{noteId}`.
5. You can reset to the original file at any time.

## Available Scripts

- `npm run dev` - Start development server on port 9003
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Deployment

This project is configured for Firebase App Hosting. Deploy with:

```bash
firebase deploy
```

## Troubleshooting

- **Google sign-in loops back to sign-up/sign-in**
   - Verify Google is enabled in Firebase Auth → Sign-in method.
   - Add dev domains to Authorized domains (e.g., `localhost`, `127.0.0.1`, your custom domain).
   - Ensure `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` matches your Firebase project’s auth domain.
   - Clear cookies for the site and retry.

## Contributing

Contributions are welcome! Suggested ways to contribute:

- Add or improve notes:

   - Place original HTML under `public/notes/{course}/{lectureId}.html` (e.g., `public/notes/fsp/FSPW1L1.html`).
   - Register the note metadata in `src/data/notes/{course}Data.ts`.

- Improve landing page copy/UX.
- Propose subjects or learning paths.
- Open issues with reproduction steps for any bugs.

## License

MIT License - see LICENSE file for details
