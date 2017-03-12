const throttle = (fn, time) => {
    let doing = false;
    return () => {
        if (doing) return;
        doing = true;
        fn.apply(null, arguments);
        setTimeout(() => doing = false, time);
    }
}
export default throttle;
