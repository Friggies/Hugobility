let shareBtn = document.querySelector("#shareBtn")
let title = document.title
let url = window.location.href

const data = {
    title: title,
    url: url,
};

shareBtn.addEventListener("click", async () => {
    try {
        await navigator.share(data);
    } catch {
        navigator.clipboard.writeText(url).then(
            () => {alert("Link kopieret til udklipsholder.")}
        )
    }
})