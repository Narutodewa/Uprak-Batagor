const resizable = document.getElementById('resizable');
const handle = document.getElementById('resize-handle');

// Minimum and maximum width values
const minWidth = 200;  // Minimum width in pixels
const maxWidth = 500;  // Maximum width in pixels

handle.addEventListener('mousedown', function(e) {
    e.preventDefault();

    // Starting position and width
    const startX = e.clientX;
    const startWidth = resizable.offsetWidth;

    function resize(e) {
        let newWidth = startWidth - (e.clientX - startX);

        // Apply minimum and maximum width constraints
        if (newWidth < minWidth) {
            newWidth = minWidth;
        } else if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }

        resizable.style.width = newWidth + 'px';
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    }

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
});