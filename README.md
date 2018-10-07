# pug-sass-filter
A sass filter for pug.

## How to use
```javascript
const sassFilter = require('pug-sass-filter');

pug.renderFile('file', {
    filters: {
        'sass': sassFilter
    }
});
```

```pug
html
  head
    style
      :sass
        .classname {
          .child {
            border: solid 1px #ccc;
          }
        }
  body
    h1 Hello world.
```
