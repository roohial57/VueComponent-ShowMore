# My Vue Component

A reusable Vue 3 component.

## Install
```bash
npm install my-vue-component
```

## Usage
```js
import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from 'my-vue-component'

const app = createApp(App)
app.use(MyComponent)
app.mount('#app')
```
