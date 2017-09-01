# Mint UI

[![Build Status](https://travis-ci.org/ElemeFE/bh-mint-ui2.svg?branch=master)](https://travis-ci.org/ElemeFE/bh-mint-ui2)
[![npm](https://img.shields.io/npm/v/bh-mint-ui2.svg?maxAge=3600)](https://www.npmjs.com/package/bh-mint-ui2)
[![NPM downloads](http://img.shields.io/npm/dm/bh-mint-ui2.svg)](https://npmjs.org/package/bh-mint-ui2)
![JS gzip size](http://img.badgesize.io/elemefe/bh-mint-ui2/master/lib/index.js.svg?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/elemefe/bh-mint-ui2/master/lib/style.css.svg?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/bh-mint-ui2](https://badges.gitter.im/ElemeFE/bh-mint-ui2.svg)](https://gitter.im/ElemeFE/bh-mint-ui2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Mobile UI elements for **Vue 2.0**

- [Homepage](https://wisedu.github.io/bh-mint-ui2/)
- [Documentation](http://bh-mint-ui2.github.io/docs)

## Installation
```shell
npm i bh-mint-ui2 -S

# for Vue 1.x
npm i bh-mint-ui2@1 -S
```

## Usage

Import all components.

```javascript
import Vue from 'vue';
import Mint from 'bh-mint-ui2';
import 'bh-mint-ui2/lib/style.css';

Vue.use(Mint);
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import { Cell, Checklist } from 'bh-mint-ui2';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
```


Equals to

```javascript
import Vue from 'vue';
import Mint from 'bh-mint-ui2';
import 'bh-mint-ui2/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'bh-mint-ui2/lib/radio';
import 'bh-mint-ui2/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
npm i babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": ["other-plugin", ["component", [
    { "libraryName": "bh-mint-ui2", "style": true }
  ]]]
}
```

## CDN
RawGit

- https://cdn.rawgit.com/ElemeFE/bh-mint-ui2/master/lib/index.js
- https://cdn.rawgit.com/ElemeFE/bh-mint-ui2/master/lib/style.css

NPMCDN

- https://unpkg.com/bh-mint-ui2/lib/index.js
- https://unpkg.com/bh-mint-ui2/lib/style.css

## Development

```shell
npm run dev
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/bh-mint-ui2/blob/master/.github/CONTRIBUTING_en-us.md) before making a pull request.

## License
MIT
