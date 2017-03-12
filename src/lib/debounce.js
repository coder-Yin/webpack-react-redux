const debounce = (fn, time) => {
    let timer = null;
    return function() {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(null, arguments)
        }, time);
    }
}
export default debounce;
