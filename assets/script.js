function button(click) {
    click.classList.toggle('active');

    const menu = document.getElementById("sidebar");
    Style = window.getComputedStyle(menu);
    left = Style.getPropertyValue("left");

    if (left == "0px") {
        menu.style.left = "-500px";
    } else {
        menu.style.left = "0px";
    }
}