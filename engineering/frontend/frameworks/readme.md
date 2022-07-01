# Frontend Libraries

Goal:

* Looking to introduce a frontend library \(not framework\) to use when we need in our django app
* Where we would use it?
* jquery: how we would phase it out and replace it with the new library?
  * form validations
  * form submissions \(i.e modal forms\)
* Kelvin's comment: No need to take into account when selecting a framework

| **Evaluation criteria** | **React** | **Vue** |
| :--- | :--- | :--- |
| Compatibility with Django | With React have to configure our own renderer but Vue it works very similar to jQuery | Vue works seamlessly with Django template. Using React will override/replace Django template |
| Learning curve |  |  |
| Maintainable Styling |  |  |
| Offline capability \(not priority right now\) |  |  |
| Virtual DOM speed |  |  |
| State management | Redux, Mobx, ContextAPI | Vuex\# Links to example projects: |

## With Vue

* [https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/](https://www.smashingmagazine.com/2018/02/jquery-vue-javascript/)
* [https://github.com/michaelbukachi/django-vuejs-tutorial/wiki/Django-Vue.js-Integration-Tutorial](https://github.com/michaelbukachi/django-vuejs-tutorial/wiki/Django-Vue.js-Integration-Tutorial)

## With React

* [https://owais.lone.pw/blog/webpack-plus-reactjs-and-django/](https://owais.lone.pw/blog/webpack-plus-reactjs-and-django/)

## Mapbox GL wrappers

* React: [https://uber.github.io/react-map-gl/](https://uber.github.io/react-map-gl/)
* Angular: [https://github.com/Wykks/ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl)
* Vue: [https://soal.github.io/vue-mapbox/](https://soal.github.io/vue-mapbox/)
