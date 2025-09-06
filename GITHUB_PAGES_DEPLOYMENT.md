# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Instructions to Deploy Your Portfolio

### Prerequisites
- GitHub account (free)
- Git installed on your computer
- Your portfolio files ready

---

## Method 1: Using GitHub Web Interface (Easiest)

### Step 1: Create New Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button → **"New repository"**
3. Repository name: `ritik-thawani-portfolio` (or any name you prefer)
4. Description: `Professional Portfolio Website - Software Development Engineer in Test`
5. Set to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Upload Files
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these files from your project folder:
   - `index.html`
   - `css/` folder (with `styles.css`)
   - `js/` folder (with `script.js`)
   - `resume.pdf`
   - `README.md`
   - `.gitignore`
3. Add commit message: `Initial portfolio website upload`
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to **"Pages"** section (left sidebar)
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**
6. Wait 2-3 minutes for deployment

### Step 4: Access Your Website
Your website will be available at:
`https://YOUR_USERNAME.github.io/ritik-thawani-portfolio`

---

## Method 2: Using Git Commands (Advanced)

### Step 1: Add Files to Git
```bash
git add .
git commit -m "Initial portfolio website"
```

### Step 2: Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/ritik-thawani-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
Follow Step 3 from Method 1 above.

---

## 🎯 After Deployment

### Your Live Website URL
`https://YOUR_USERNAME.github.io/REPOSITORY_NAME`

### Features That Will Work
- ✅ **Responsive design** on all devices
- ✅ **Resume download** functionality
- ✅ **Contact form** with EmailJS (if configured)
- ✅ **Smooth animations** and interactions
- ✅ **Professional styling**

### Custom Domain (Optional)
1. Buy a domain (e.g., `ritikthawani.com`)
2. In GitHub Pages settings, add your custom domain
3. Update DNS records with your domain provider

---

## 🔧 Troubleshooting

### If Pages Don't Load
1. Check repository is **Public**
2. Verify `index.html` is in the **root** directory
3. Wait 5-10 minutes for deployment
4. Check repository **Actions** tab for errors

### If Contact Form Doesn't Work
1. Ensure EmailJS is properly configured
2. Check browser console for errors (F12)
3. Verify all EmailJS credentials are correct

### If Styling Looks Broken
1. Check file paths in `index.html`
2. Ensure `css/styles.css` is uploaded
3. Verify `js/script.js` is uploaded

---

## 📱 Testing Your Deployed Site

1. **Desktop**: Open your GitHub Pages URL
2. **Mobile**: Test on phone/tablet
3. **Contact Form**: Submit a test message
4. **Resume Download**: Test the download button
5. **Navigation**: Test all menu links

---

## 🚀 Next Steps

1. **Share your portfolio** with potential employers
2. **Add to your resume** with the live URL
3. **Update regularly** with new projects
4. **Monitor analytics** (optional)

---

## 📞 Support

If you encounter any issues:
1. Check GitHub Pages documentation
2. Verify all files are uploaded correctly
3. Ensure repository is public
4. Wait for deployment to complete

**Your portfolio is now live and professional! 🎉**
