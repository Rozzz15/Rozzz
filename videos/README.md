# Videos Folder

This folder is for storing your video files (MP4 format recommended).

## How to Use:

1. **Add your video files here**
   - Example: `eyir-clinic-tour.mp4`
   - Example: `project-demo.mp4`
   - Example: `testimonial.mp4`

2. **Reference them in your data files**
   - Open `js/data.js` or `js/clients-data.js`
   - Find the project you want to add video to
   - Change: `video: null`
   - To: `video: "videos/your-video-name.mp4"`

## Video Recommendations:

### File Format
- **Format:** MP4 (H.264 codec)
- **Max Size:** 10MB for fast loading
- **Resolution:** 1920x1080 or 1280x720

### Content Ideas for EYIR Medical Clinic:
- Clinic tour walkthrough
- Services overview
- Doctor/staff introductions
- Patient testimonials (with permission)
- Safety and hygiene protocols
- Before/after transformations (if applicable)

### Compression Tools:
- **HandBrake** (free): https://handbrake.fr/
- **CloudConvert** (online): https://cloudconvert.com/mp4-converter
- **FFmpeg** (command line): `ffmpeg -i input.mp4 -vcodec h264 -acodec aac output.mp4`

## Example:

```javascript
{
    id: 7,
    title: "EYIR Medical Clinic",
    image: ["images/eyir1.png", "images/eyir2.png", ...],
    video: "videos/eyir-clinic-tour.mp4",  // ← Your video here!
    link: "https://example.com"
}
```

## Need Help?
The video will automatically appear in your project gallery carousel with play/pause controls!
