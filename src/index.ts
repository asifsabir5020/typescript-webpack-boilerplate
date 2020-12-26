function language(): string {
    return 'Javascript';
}

window.addEventListener("load", () => {
    const label = document.createElement("h3");
    label.innerText = `My Language : ${language()}`;
    const body = document.querySelector("body");
    body && body.appendChild(label);
})
