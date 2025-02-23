// hamburder menu
const toggleMenu = () => {
    document.body.classList.toggle("open");
};

// button show
const btn = document.querySelector('.btn_to_top');
const showButton = () => {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });
};

// scroll to top
const scrollToTop = () => {
    btn.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0
        }); 
        console.log(event);
    });
};
showButton();
scrollToTop();