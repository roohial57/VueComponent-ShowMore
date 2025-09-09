import MyComponent from './MyComponent.vue'

export default {
  install(app) {
    app.component('MyComponent', MyComponent)
  }
}

export { MyComponent }
