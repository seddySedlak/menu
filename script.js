// hamburder menu
const toggleMenu = () => {
    document.body.classList.toggle("open");
};


// button show
const button = document.querySelector('.btn_to_top');
const displayButton = () => {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY > 100) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
};

// scroll to top
const scrollToTop = () => {
    button.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }); 
        console.log(event);
    });
};
displayButton();
scrollToTop();