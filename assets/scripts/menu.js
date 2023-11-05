const menu = document.querySelector("#menu")
const openMenuBtn = document.querySelector("#menuopen")
const closeMenuBtn = document.querySelector("#menuclose")

if (openMenuBtn) {
    openMenuBtn.addEventListener("click", () => {
        menu.showModal()
    })
}

closeMenuBtn.addEventListener("click", () => {
    menu.close()
})

menu.addEventListener('click', (e) => {
    const rect = menu.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        menu.close()
    }
});