
# ShowMore-Vue Component

A reusable Vue 3 component that provides text truncation with "Show more"/"Show less" functionality and an optional tooltip. Includes the `ShowMore` and `Tooltip` components for flexible usage in your Vue 3 applications.
www.npmjs.com/package/showmore-vue/access


![Preview](https://github.com/roohial57/VueComponent-ShowMore/blob/main/assets/ShowMoreDemo.png)

## Install
```bash
npm install showmore-vue
```

## Usage
```js
import { createApp } from 'vue';
import App from './App.vue';
import { ShowMore } from 'showmore-vue';

const app = createApp(App);
app.component('ShowMore', ShowMore);
app.mount('#app');
```

## Features
- Truncate long text and expand/collapse with custom button labels
- Optional tooltip for additional information
- Customizable styles for buttons and tooltip

## Props
- `length`: Number of characters to show before truncation
- `showMoreEnabled`: Show the "Show more" button
- `showMoreText`: Custom label for the expand button
- `showLessEnabled`: Show the "Show less" button after expansion
- `showLessText`: Custom label for the collapse button
- `showMoreBtnStyle`: Style object for the buttons
- `showTooltip`: Enable tooltip on hover
- `tooltipHeader`: Header text for the tooltip
- `tooltipColor`: Color for the tooltip

## Example
See the `demo/App.vue` file for a full example of usage and available props.
