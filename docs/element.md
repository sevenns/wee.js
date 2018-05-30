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
