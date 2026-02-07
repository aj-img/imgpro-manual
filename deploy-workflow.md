# IMG Pro Manual: Deployment & Update Guide

This guide explains how to deploy your manual to `imgpro.ai/usermanual` and how to handle future updates.

## 1. Initial Deployment

To host the manual at `imgpro.ai/usermanual`, follow one of these two paths:

### Option A: Static Hosting (Recommended)
Use a service like **Vercel**, **Netlify**, or **GitHub Pages**.
1. **Create a GitHub Repository**: Upload the contents of your `imgpro-manual-site` folder to a new private or public repo.
2. **Connect to Vercel/Netlify**: Point the service to your repository.
3. **Domain Setup**: In your domain settings for `imgpro.ai`, you can set up a "Rewrite" or "Proxy" rule so that `imgpro.ai/usermanual` points to your deployment.

### Option B: Traditional Web Server (FTP/SFTP)
If you have access to the file system of `imgpro.ai`:
1. Create a directory named `usermanual` in your web root.
2. Upload all files and the `images` folder from `imgpro-manual-site` into that directory.
3. Ensure the `index.html` is inside `usermanual/`.

---

## 2. Managing Subsequent Updates

When you need to change content (e.g., text corrections, new videos):

### Workflow with Antigravity
1. **Request the change**: "Hey Antigravity, add a new video to the Risk Management section."
2. **Local Update**: I will modify the local `index.html` and `styles.css` in your workspace.
3. **Review**: You can check the changes locally or in the `Checkpoint` folders I create.
4. **Push to Live**:
   - **If using Option A**: Simply push the changes to your GitHub repository. The site will update automatically in seconds.
   - **If using Option B**: Re-upload the modified `index.html` and `styles.css` to your server.

---

## 3. Technical Notes
- **Paths**: All links and image sources are **relative**. This means the site will work perfectly whether it's hosted at the root (`imgpro.ai/`) or in a subdirectory (`imgpro.ai/usermanual/`).
- **Assets**: Always ensure the `images` folder is uploaded alongside the `index.html` file to keep screenshots visible.
- **Embedded Videos**: Local playback might show minor errors in some browsers due to security policies for `file://` URLs, but they will work perfectly once deployed on a real web server (`https://`).
