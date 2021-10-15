document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[data-src]");
    
    function loadImage(image) {
        const src = image.getAttribute("data-src");
        if(!src) {
            return;
        }
        image.src  = src;
        image.removeAttribute("data-src");
    }

    const imgOptions = {
        threshold: 0,
        rootMargin: '0px 0px 300px 0px'
    };

    const imgObserver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(function(entry) {
            if(!entry.isIntersecting) {
                return;
            } else {
                loadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }, imgOptions);

    images.forEach(function(image) {
        imgObserver.observe(image);
    });
});
