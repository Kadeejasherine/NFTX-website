
export const hideloader = () => {

var loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4200);

}
