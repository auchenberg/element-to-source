# element-to-source
-------------------

Providing utility to map a DOM element to source information, using debug metadata provided by (some) frameworks.

API:

````javascript
    import { resolve } from 'element-to-source';
    var domElement = document.getElementById('#main');

    var sourceMetadata = resolve(domElement);
    // {
    //     charNumber: 0,
    //     columnNumber: 0,
    //     fileName: 'component.tsx',
    //     lineNumber: 0
    // }
````

## Supported frameworks

- Svelte.js via https://github.com/sveltejs/svelte/issues/1499 (when in Dev Mode)
- React / Create React App via https://medium.com/@sitambas/get-global-element-state-a408a744e99d 

## Unsupported

I would love to get help finding ways to enable any of these.

- Angular
- Vue.js
- React + Parcel bundler
- Next.js?
- Web Components
- Ionic?
