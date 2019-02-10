
let getReactDebugSource = function(dom) {
    for (var key in dom) {
        if (key.startsWith('__reactInternalInstance$')) {
            return dom[key]._debugSource;
        }
    }
    return null;
}

function get(element) {

    var result = {
        charNumber: undefined,
        columnNumber: undefined,
        fileName: undefined,
        lineNumber: undefined      
    }

    // SvelteJS
    if(element.__svelte_meta) {
        var loc = element.__svelte_meta.loc;
        if(loc) {
            result.fileName = loc.file;
            result.lineNumber = loc.line;
            result.columnNumber = loc.column;
            result.charNumber = loc.char;
        }
    }

    // ReactJS
    var debugSource = getReactDebugSource(element);
    if(debugSource) {
        result.fileName = debugSource.fileName;
        result.lineNumber = debugSource.lineNumber;
    }

    return result;

}

module.export = get;