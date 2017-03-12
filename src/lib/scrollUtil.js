//set html and body's position to fixed
export function preventScroll() {
    document.documentElement.style.position = "fixed";
    document.body.style.position = "fixed";
}

export function recoverScroll() {
    document.documentElement.style.position = "inherit";
    document.body.style.position = "relative";
}
