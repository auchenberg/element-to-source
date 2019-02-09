# element-to-source
-------------------

Providing utility to map a DOM element to source information, using debug metadata provided by (some) frameworks.

API:

````javascript

    let get = import 'dom-to-source';

    var domElement = document.getElementById('#main');

    var sourceInfo = get(domElement);
    // {
    //     char: 0,
    //     column: 0,
    //     file: 'component.tsx',
    //     line: 0
    // }
````

## Supported frameworks

- Svelte.js via https://github.com/sveltejs/svelte/issues/1499 (when in Dev Mode)

## Todo
- Angular
- Vue.js
- React.js
- Web Components
- Ionic?