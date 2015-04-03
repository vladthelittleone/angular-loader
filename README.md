## Angular Loader

This is a directive that provide a collection of loading spinners animated with CSS for angular.js. It is built on top of [css-loaders](https://github.com/lukehaas/css-loaders) project. 

```html
  <loader type="load1"
        is-loading="isLoading"
        class="blackout">
  </loader>
```

## Attributes

* type - type of loading spinners. [load1 to load8](http://projects.lukehaas.me/css-loaders/).
* show - if variable true then show spinner.

## Classes 

* blackout - centring spinner and add blackout background.

## Check out example.html

* Press left button to start loading.
* Every press is changing loader style.
