
function get(element) {

    var result = {
        char: undefined,
        column: undefined,
        file: undefined,
        line: undefined      
    }

    // SvelteJS
    if(element.__svelte_meta) {
        var loc = element.__svelte_meta.loc;
        if(loc) {
            result.file = loc.file;
            result.column = loc.column;
            result.char = loc.char;
            result.line = loc.line;
        }
    }

    return result;

}

module.export = get;