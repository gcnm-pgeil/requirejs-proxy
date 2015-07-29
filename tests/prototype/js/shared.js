

document.addEventListener('DOMContentLoaded', function () {
    console.log("%s ready", document.title);
    var title = document.createElement('h1');
    title.textContent = document.title;
    document.body.appendChild(title);
});