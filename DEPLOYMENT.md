# 🚀 Deployment Guide

## GitHub Repository Setup

### 1. Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name it: `admitt-mentorship` or `study-abroad-mentorship`
5. Make it **Public** (for free hosting)
6. **Don't** initialize with README (we already have one)
7. Click **"Create repository"**

### 2. Connect Your Local Repository
After creating the GitHub repo, you'll see setup instructions. Run these commands:

```bash
# Add the remote origin (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deploy to Vercel (Recommended)

### 1. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project

### 2. Deploy Settings
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3. Environment Variables
No environment variables needed for this project.

### 4. Deploy
Click **"Deploy"** and wait for the build to complete.

## 🔧 Alternative: Deploy to GitHub Pages

### 1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. Add Scripts to package.json
```json
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "deploy": "npm run build && npm run export && gh-pages -d out"
  }
}
```

### 3. Deploy
```bash
npm run deploy
```

## 📱 After Deployment

### Vercel Benefits:
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Automatic deployments** on every push
- ✅ **Preview deployments** for pull requests
- ✅ **Analytics and performance monitoring**

### Your Live URLs:
- **Vercel**: `https://your-project-name.vercel.app`
- **GitHub Pages**: `https://your-username.github.io/repo-name`

## 🎯 Quick Deploy Commands

```bash
# 1. Create GitHub repo (do this manually on GitHub.com)

# 2. Connect and push (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel (do this manually on Vercel.com)
# - Import your GitHub repo
# - Click Deploy
```

## 🚨 Troubleshooting

### Build Errors:
- Make sure all dependencies are in `package.json`
- Check that `.next` folder is in `.gitignore`
- Verify TypeScript compilation: `npm run build`

### Image Issues:
- Images are in `public/images/` and should work automatically
- Check file paths are correct: `/images/mentor-headshot.png`

### Deployment Issues:
- Check Vercel build logs for errors
- Ensure repository is public (for free tier)
- Verify build command: `npm run build`

## 🎉 Success!

Once deployed, you'll have:
- ✅ **Live mentorship page** accessible from anywhere
- ✅ **Professional URL** to share with others
- ✅ **Automatic updates** when you push to GitHub
- ✅ **No more local server issues**!

Your mentorship subscription page will be live and accessible to everyone! 🚀
