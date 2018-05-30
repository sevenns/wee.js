### - Wee.js

Small library for DOM manipulating. Current support: **IE9+**.

### - Available methods

- **ready:**
```javascript
$.ready(function () {
	// document ready
});
```

- **on:**
```javascript
$('button').on('click', function (event) {
	// button clicked
});
```

- **each:**
```javascript
$('ul li').each(function (el, i) {
	// do something
});
```

- **length:**
```javascript
$('ul li').length(); // return collection length
```

### - Build setup

You can setting own collection of necessary methods.

```bash
# Clone repositorie and install dependencies
npm install

# setting src/wee.js and minimize to dist/
npm run build
```
