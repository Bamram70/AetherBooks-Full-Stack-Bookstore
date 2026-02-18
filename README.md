# AetherBooks - Firebase Studio

This is an AI-powered e-commerce bookstore prototype built with Next.js, Tailwind CSS, and Genkit.

## Getting Started

To get started, take a look at `src/app/page.tsx`.

## How to Push to GitHub

Since this environment doesn't have an automatic "Push to GitHub" button, you can use one of these two methods:

### Method 1: Using the Source Control Panel
1. Click the **Source Control** icon in the left sidebar (it looks like a branch).
2. Click **Initialize Repository** if you haven't yet.
3. Type a message in the "Message" box and click **Commit**.
4. Click **Publish Branch** or **Sync Changes** to connect to your GitHub account and push.

### Method 2: Using the Terminal
Open the terminal at the bottom of the screen and run:

```bash
# Initialize the repo (if not already done)
git init

# Stage all files
git add .

# Commit changes
git commit -m "My update message"

# Add your GitHub repository as a remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to the main branch
git push -u origin main
```

## Project Structure

- `src/app`: Application routes and layouts.
- `src/components`: Reusable UI components.
- `src/ai`: Genkit flows and AI logic.
- `src/lib`: Data, types, and utility functions.
