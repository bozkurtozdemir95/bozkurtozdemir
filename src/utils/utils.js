export const classNames = (...args) => {
    const classes = [];
    args.forEach(arg => {
        if (typeof arg === 'string') {
            classes.push(arg);
        } else if (typeof arg === 'object') {
            Object.entries(arg).forEach(([key, value]) => {
                if (value) {
                    classes.push(key);
                }
            });
        }
    });
    return classes.join(' ');
}
