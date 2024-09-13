document.querySelectorAll('.image-container').forEach(container => {
    const img = container.querySelector('img');
    const downloadBtn = container.querySelector('.download-btn');

    downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'downloaded-image.jpg'; // You can change the default file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});