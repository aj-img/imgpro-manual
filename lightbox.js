
document.addEventListener('DOMContentLoaded', function () {
    // 1. Create Lightbox Elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';

    const img = document.createElement('img');
    img.className = 'lightbox-img';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.ariaLabel = 'Close lightbox';

    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // 2. Select Images
    // Target content images but exclude logos/icons based on class or context
    const contentImages = document.querySelectorAll('.content-section img:not(.hero-logo-img)');

    contentImages.forEach(image => {
        // Add cursor style to indicate zoomable
        image.classList.add('zoomable-image');

        image.addEventListener('click', function (e) {
            e.stopPropagation();
            openLightbox(this.src);
        });
    });

    // 3. Functions
    function openLightbox(src) {
        img.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        img.classList.remove('zoomed'); // Reset zoom
        document.body.style.overflow = '';
    }

    function toggleZoom(e) {
        e.stopPropagation();
        img.classList.toggle('zoomed');
    }

    // 4. Event Listeners for Lightbox

    // Close on background click
    lightbox.addEventListener('click', closeLightbox);

    // Close on button click
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    // Toggle zoom on image click
    img.addEventListener('click', toggleZoom);

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
