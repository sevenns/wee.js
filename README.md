<p align="center">
	<a href="https://github.com/sevenns/weery.js" title="Weery"><img src="./logo.png" width="128px"></a>
	<h3 align="center">Weery.js</h3>
</p>

<p align="center">Small library for DOM manipulating. Current support: <b>IE9+</b>.</p>

### - Installing

``` bash
npm install weery --save
```

### - Using

- es6 imports
``` javascript
import $ from 'weery'
```

- commonjs
``` javascript
const $ = require('weery');
```

- as global (download [weery.min.global.js][weery-global] and put before ```</body>```)
``` html
<script src="/path/to/scripts/weery.min.global.js"></script>
```

### - Availables

- [Attributes][attr]
- [Classes][class]
- [Element][element]
- [Events][event]
- [Common methods][common]

### - Build setup

You can setting own collection of necessary methods.

```bash
# Clone repository and install dependencies
npm install

# setting src/index.js and minimize to dist/
npm run build
```

[weery-global]: https://github.com/sevenns/weery.js/blob/master/dist/weery.min.global.js

[attr]: https://github.com/sevenns/weery.js/blob/master/docs/attr.md
[class]: https://github.com/sevenns/weery.js/blob/master/docs/class.md
[common]: https://github.com/sevenns/weery.js/blob/master/docs/common.md
[element]: https://github.com/sevenns/weery.js/blob/master/docs/element.md
[event]: https://github.com/sevenns/weery.js/blob/master/docs/event.md