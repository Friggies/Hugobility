const langSelecter = document.querySelector("#langSwitcher")

if (langSelecter) {
    langSelecter.addEventListener("input", () => {
        const newLang = langSelecter.value
        window.location.href = "/"+newLang
    })
    
    window.addEventListener("load", () => {
        langSelecter.value = langSelecter.options[0].value
    })
    
}