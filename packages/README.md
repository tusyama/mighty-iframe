# MightyIframeIntegration

The `MightyIframeIntegration` package allows you to integrate an iframe-based sidebar into your web application. This sidebar can be triggered by any element on your page and supports both desktop and mobile views.

## Installation
To use the `MightyIframeIntegration` package, include the following script in your HTML file:

```html
<script src="https://unpkg.com/mightyiframeintegration@1.1.0/dist/mightyIframeIntegration.js"></script>
<!-- <script src="./packages/mightyIframeIntegration/dist/mightyIframeIntegration.js"></script> -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    mightyIframeIntegration.authorizePackage();
  });
</script>
