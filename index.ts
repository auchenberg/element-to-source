
let getReactDebugSource = function (element: any) {
    for (var key in element) {
        if (key.startsWith('__reactInternalInstance$')) {
            return element[key]._debugSource;
        }
    }
    return null;
}

export function resolve(element: any): ElementSource {

    var result = {
        charNumber: 0,
        columnNumber: 0,
        fileName: '',
        lineNumber: ''
    }

    // SvelteJS
    if (element.__svelte_meta) {
        var loc = element.__svelte_meta.loc;
        if (loc) {
            result.fileName = loc.file;
            result.lineNumber = loc.line;
            result.columnNumber = loc.column;
            result.charNumber = loc.char;
        }
    }

    // ReactJS
    var reactDebugSource = getReactDebugSource(element);
    if (reactDebugSource) {
        result.fileName = reactDebugSource.fileName;
        result.lineNumber = reactDebugSource.lineNumber;
    }

    return result;
}

interface ElementSource {
    charNumber: number,
    columnNumber: number,
    fileName: string,
    lineNumber: string
}