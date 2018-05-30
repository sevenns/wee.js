### - Element

- **$:**
```javascript
// Can use string for selector
$('ul');
// Or some node
$(window);
```

- **find:**
```javascript
$('ul').find('li');
```

- **each:**
```javascript
$('ul li').each(function (el, i) {
  // do something
});
```

- **css:**
```javascript
$('ul').css('color', 'red');
// Or
$('ul').css({
  'color': 'red',
  'background-color': 'yellow'
});
```

- **text:**
```javascript
// Return text of each li
$('li').text();
// Set text for each li
$('ul').text('text');
```

- **html:**
```javascript
// Return inner html of each li
$('li').html();
// Set inner html for each li
$('ul').html('text');
```

- **next/prev:**
```javascript
// Return collection of next elements of each li
$('li').next();
// Return collection of prev elements of each li
$('li').prev();
```

- **outerHeight:**
```javascript
// Return height of li (given the margins)
$('li').outerHeight();
// Return height of window
$(window).outerHeight();
```

- **outerWidth:**
```javascript
// Return width of li (given the margins)
$('li').outerWidth();
// Return width of window
$(window).outerWidth();
```

- **remove:**
```javascript
// Remove each li
$('li').remove();
```

- **position:**
```javascript
// Position
$('li').position();
```

- **offset:**
```javascript
// Position relative to viewport
$('li').offset();
```

- **append/prepend:**
```javascript
// Insert html in each li at the beginning
$('li').prepend('<div class="block"></div>');
// Insert html in each li at the end
$('li').append('<div class="block"></div>');
```
