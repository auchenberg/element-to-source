# element-to-source
-------------------

Providing utility to map a DOM element to source information, using debug metadata provided by (some) frameworks.

API:

````javascript
    let get = import 'element-to-source';
    var domElement = document.getElementById('#main');

    var sourceInfo = get(domElement);
    // {
    //     charNumber: 0,
    //     columnNumber: 0,
    //     fileName: 'component.tsx',
    //     lineNumber: 0
    // }
````

## Supported frameworks

- Svelte.js via https://github.com/sveltejs/svelte/issues/1499 (when in Dev Mode)
- ReactJS via https://medium.com/@sitambas/get-global-element-state-a408a744e99d 

## Todo
- Angular
- Vue.js
- Web Components
- Ionic?