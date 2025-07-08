# Deployment Guide

This guide covers different ways to deploy your portfolio website to make it accessible online.

## Local Development

### Method 1: Python HTTP Server (Recommended)
```bash
# Navigate to your project directory
cd ishrat-amin-portfolio

# Start local server
python -m http.server 8000

# Access at: http://localhost:8000
```

### Method 2: Node.js Live Server
```bash
# Install live-server globally
npm install -g live-server

# Start server in project directory
live-server --port=3000

# Access at: http://localhost:3000
```

## Free Hosting Options

### 1. GitHub Pages (Recommended)

**Setup:**
1. Create a GitHub account at https://github.com
2. Create a new repository named `portfolio` or `ishrat-amin-portfolio`
3. Upload all your files to the repository
4. Go to Settings → Pages
5. Select "Deploy from a branch" → main branch
6. Your site will be live at: `https://yourusername.github.io/portfolio`

**Steps:**
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio upload"

# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Netlify

**Setup:**
1. Visit https://netlify.com and sign up
2. Drag and drop your project folder to Netlify
3. Your site will be live with a random URL
4. Optional: Connect your GitHub repository for automatic updates

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add your custom domain
- Follow DNS configuration instructions

### 3. Vercel

**Setup:**
1. Visit https://vercel.com and sign up
2. Connect your GitHub repository
3. Import your project
4. Deploy with one click

**Command Line:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# Follow prompts to deploy
```

### 4. Firebase Hosting

**Setup:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting

# Deploy
firebase deploy
```

## Paid Hosting Options

### 1. Shared Hosting (GoDaddy, Bluehost, etc.)
- Upload files via FTP/cPanel File Manager
- Place files in `public_html` or `www` directory
- Configure domain if needed

### 2. Cloud Hosting (AWS, DigitalOcean, etc.)
- More complex setup but better performance
- Suitable for high-traffic sites
- Requires server management knowledge

## Domain Configuration

### Custom Domain Setup
1. **Purchase Domain**: From providers like Namecheap, GoDaddy, or Google Domains
2. **DNS Configuration**: Point your domain to hosting provider
3. **SSL Certificate**: Most hosting providers offer free SSL

### DNS Records Example:
```
Type: A
Name: @
Value: [Your hosting IP]

Type: CNAME
Name: www
Value: yourdomain.com
```

## Performance Optimization

### Before Deployment:
1. **Optimize Images**: Compress images for web
2. **Minify CSS/JS**: Remove unnecessary whitespace
3. **Enable Compression**: Gzip compression for faster loading
4. **Test Performance**: Use Google PageSpeed Insights

### Image Optimization:
```bash
# Using online tools:
# - TinyPNG for PNG compression
# - JPEGmini for JPEG compression
# - WebP conversion for modern browsers
```

## Security Considerations

### HTTPS Setup:
- Most hosting providers offer free SSL certificates
- Ensure all external links use HTTPS
- Configure security headers

### Content Security Policy:
Add to your HTML head:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';">
```

## Monitoring and Analytics

### Google Analytics:
Add tracking code to your HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring:
- Google Search Console
- Google PageSpeed Insights
- GTmetrix
- Pingdom

## Backup Strategy

### Regular Backups:
1. **Local Backup**: Keep local copies of all files
2. **Version Control**: Use Git for change tracking
3. **Cloud Backup**: Store backups in cloud storage
4. **Database Backup**: If using CMS or dynamic content

### Backup Script Example:
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "portfolio_backup_$DATE.tar.gz" .
echo "Backup created: portfolio_backup_$DATE.tar.gz"
```

## Troubleshooting

### Common Issues:

**1. Files Not Loading:**
- Check file paths and case sensitivity
- Verify file permissions (755 for directories, 644 for files)
- Ensure proper MIME types

**2. Mobile Display Issues:**
- Test on multiple devices
- Check viewport meta tag
- Validate CSS for mobile compatibility

**3. Performance Issues:**
- Optimize images
- Minify CSS/JS
- Enable compression
- Use Content Delivery Network (CDN)

**4. SEO Issues:**
- Add meta descriptions
- Include structured data
- Optimize page titles
- Create XML sitemap

## Maintenance Schedule

### Weekly:
- Check website functionality
- Review analytics data
- Update content if needed

### Monthly:
- Update professional information
- Check for broken links
- Review performance metrics
- Backup website files

### Quarterly:
- Major content updates
- Design improvements
- Security updates
- Performance optimization

## Support Resources

### Documentation:
- MDN Web Docs: https://developer.mozilla.org
- W3Schools: https://www.w3schools.com
- CSS-Tricks: https://css-tricks.com

### Tools:
- HTML Validator: https://validator.w3.org
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Speed Test: https://pagespeed.web.dev

### Communities:
- Stack Overflow: Programming questions
- GitHub Discussions: Project-specific help
- Reddit r/webdev: Web development community

---

**Need Help?** If you encounter issues during deployment, check the hosting provider's documentation or contact their support team.