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

You can pass a style parameter to the filter, to specify how sass should compile your styles.
- nested (default)
- expanded
- compact
- compressed

```pug
html
  head
    style
      :sass(style="compressed")
        .classname {
          .child {
            border: solid 1px #ccc;
          }
        }
  body
    h1 Hello world.
```