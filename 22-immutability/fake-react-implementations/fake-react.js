export function useState(defaultValue) {
    let state = defaultValue;

    function setState(newValue) {
        if (state === newValue) {
            console.log('State not changed: no need to re-render');
            return;
        }
        state = newValue;
        console.log('State changed: need to re-render');
    }

    return [state, setState];
}
