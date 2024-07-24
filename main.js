// Add event listener to links to load PDF in iframe
document.querySelectorAll('.link a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pdfUrl = link.href;
      const iframe = document.querySelector('iframe[name="pdf_frame"]');
      const loadingDiv = document.querySelector('#loading');
      loadingDiv.style.display = 'block';
      iframe.src = pdfUrl;
      iframe.onload = () => {
        loadingDiv.style.display = 'none';
      };
    });
  });