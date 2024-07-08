# MightyIframeIntegration

The `MightyIframeIntegration` package allows you to integrate an iframe-based sidebar into your web application. This sidebar can be triggered by any element on your page and supports both desktop and mobile views.

## Installation
To use the `MightyIframeIntegration` package, include the following script in your HTML file:


## Usage

### Step 1
added this script in head 
<script src="https://unpkg.com/mightyiframeintegration@1.1.0/dist/mightyIframeIntegration.js"></script>

### Step 2
```html
<script src="https://unpkg.com/mightyiframeintegration@1.1.0/dist/mightyIframeIntegration.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    mightyIframeIntegration.authorizePackage();
  });
</script>

### Step 3

register triggers
```html
<script>
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
</script>

react example

# MightyIframeIntegration

The `MightyIframeIntegration` package allows you to integrate an iframe-based sidebar into your web application. This sidebar can be triggered by any element on your page and supports both desktop and mobile views.

## Installation
To use the `MightyIframeIntegration` package, include the following script in your HTML file:


## Usage

### Step 1
added this script in head 
<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>

### Step 2
register method
```html
<script src="https://unpkg.com/mightyiframeintegration@latest/dist/mightyIframeIntegration.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    mightyIframeIntegration.authorizePackage();
  });
</script>

### Step 3

register triggers
```html
<script>
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
</script>

react example useEffect

useEffect(() => {
    if (window.initSidebar) {
      window.initSidebar('#learnButton', 'Magic_Ball');
    }
  }, []);

