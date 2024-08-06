// // pdf-loader.js
// document.getElementById('load-pdf-btn').addEventListener('click', () => {
//     const pdfInput = document.getElementById('pdf-input');
//     const pdfFile = pdfInput.files[0];
//     if (pdfFile) {
//       const pdfUrl = URL.createObjectURL(pdfFile);
//       const pdfContainer = document.getElementById('pdf-container');
//       const iframe = document.createElement('iframe');
//       iframe.src = pdfUrl;
//       iframe.frameBorder = 0;
//       iframe.width = '100%';
//       iframe.height = '500';
//       pdfContainer.appendChild(iframe);
//     }
//   });