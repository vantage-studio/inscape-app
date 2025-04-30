// Override the font loading
document.addEventListener("DOMContentLoaded", function () {
  // Create a style element
  const style = document.createElement("style");
  style.textContent = `
        @font-face {
            font-family: 'Graphik';
            src: url('/fonts/Graphik-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Graphik';
            src: url('/fonts/Graphik-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Graphik';
            src: url('/fonts/Graphik-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        * {
            font-family: 'Graphik', sans-serif !important;
        }
    `;
  document.head.appendChild(style);
});
