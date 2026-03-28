# Profile Picture

## How to Add Your Profile Picture

1. **Prepare your photo:**
   - Use a professional headshot or portrait
   - Recommended size: 800x800 pixels (square)
   - Format: PNG, JPG, or JPEG
   - File size: Under 2MB

2. **Name your file:**
   - The file MUST be named: `profile-picture.png`
   - Or: `profile-picture.jpg` if using JPG format

3. **Place it here:**
   - Save your photo in this folder: `/public/images/`
   - Full path: `/public/images/profile-picture.png`

4. **If using JPG instead of PNG:**
   - You'll need to update the code in `/src/app/components/About.tsx`
   - Change line with: `src="/images/profile-picture.png"`
   - To: `src="/images/profile-picture.jpg"`

## Current Status

Currently using a placeholder. Replace `profile-picture.png` with your actual photo!

## Tips for a Great Profile Picture

✅ **Good lighting** - Natural light works best  
✅ **Professional attire** - Dress appropriately for your field  
✅ **Smile!** - A friendly, approachable expression  
✅ **Plain background** - Avoid distracting backgrounds  
✅ **High resolution** - Clear, sharp image  
✅ **Recent photo** - Within the last year  

❌ Avoid selfies  
❌ Avoid group photos  
❌ Avoid heavy filters  
❌ Avoid busy backgrounds  

## Quick Edit

If you need to resize or crop your photo:
- Use free tools like [Pixlr](https://pixlr.com) or [Photopea](https://www.photopea.com/)
- Or use built-in tools on Mac (Preview) or Windows (Photos)

## File Location

```
your-project/
└── public/
    └── images/
        ├── profile-picture.png  ← PUT YOUR PHOTO HERE
        └── resume/
            └── chloe_resume.pdf
```
