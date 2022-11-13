let button = document.querySelector(".js-buttonCube")
let cube = document.querySelector(".wrapper")
let themeName = document.querySelector(".js-buttonCube__themename")

button.addEventListener("click", () => {
    cube.classList.toggle("wrapperNo");

    cube.classList.contains("wrapperNo") ? themeName.innerText="Insert" : themeName.innerText="Remove"
});