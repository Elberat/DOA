let header = document.querySelector("header"),
    lastScrollTop = 0;
function burgerBtn() {
    let e = document.getElementById("burger");
    var t = document.getElementById("list");
    e.classList.toggle("menu__btn--active"),
        t.classList.toggle("nav_ul--active"),
        t.classList.contains("nav_ul--active")
            ? (document.body.style.overflowY = "hidden")
            : (document.body.style.overflowY = "auto");
}
window.addEventListener(
    "scroll",
    function () {
        var e = window.pageYOffset || document.documentElement.scrollTop;
        e > lastScrollTop
            ? header.classList.remove("header-fix")
            : header.classList.add("header-fix"),
            (lastScrollTop = e);
    },
    !1
),
    document.getElementById("captcha").addEventListener("submit", function (e) {
        if (0 == grecaptcha.getResponse().length)
            return (
                alert("please verify you are humann!"), e.preventDefault(), !1
            );
    });

    
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        scale: 1.5
    });


    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
        this.classList.toggle("close");
    });

    