# 🚀 Deployment Guide

## Railway (Recommended - No Credit Card)

1. **Push to GitHub** (if not done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub"
   - Select your repository
   - Railway auto-detects and deploys

3. **Add Environment Variables**:
   - In Railway dashboard → Variables
   - Add: `NODE_ENV=production`
   - Add: `MONGODB_URI=your_mongodb_connection_string`

## Alternative: Render

1. Go to [render.com](https://render.com)
2. "New" → "Web Service"
3. Connect GitHub → Select repo
4. Build Command: `npm run build`
5. Start Command: `npm start`
6. Add environment variables

## Your app will be live at the provided URL!