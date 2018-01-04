# BH Mint UI 2


> Mobile UI elements for **Vue 2.0**

- [Homepage](https://wisedu.github.io/bh-mint-ui2/)
- [Documentation](https://res.wisedu.com/FS/desgin_style/#/mobile)

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
import { Checkbox } from 'bh-mint-ui2';

Vue.component(Checkbox.name, Checkbox);
```


Equals to

```javascript
import Vue from 'vue';
import Mint from 'bh-mint-ui2';
import 'bh-mint-ui2/lib/style.css';

Vue.use(Mint);

// import specified component

import MtRadio from 'bh-mint-ui2/lib/radiobox';
import 'bh-mint-ui2/lib/radiobox/style.css';

Vue.component(MtRadiobox.name, MtRadiobox);
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

## SKIN

<!-- 引入换肤 -->
<link rel="stylesheet" href="//res.wisedu.com/fe_components/skins/mint2.0/skin.css">

## CDN

<!-- 引入样式 -->
<link rel="stylesheet" href="https://res.wisedu.com/fe_components/mobile/MINT/style.min.css">
<!-- 引入组件库 -->
<script src="https://res.wisedu.com/bower_components/vue2/vue.min.js"></script>
<script src="https://res.wisedu.com/fe_components/mobile/MINT/index.js"></script>

## Development

```shell
npm run dev
```

## Contribution
Please make sure to read the [Contributing Guide](https://github.com/ElemeFE/bh-mint-ui2/blob/master/.github/CONTRIBUTING_en-us.md) before making a pull request.

## License
MIT
