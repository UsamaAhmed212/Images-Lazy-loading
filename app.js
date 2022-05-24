"use strict";
window.onload = function() {
    function loadImage(e) {
        var elements = document.querySelectorAll("img[data-src]");
        elements.forEach(function (element) {
            if(element.hasAttribute("data-src") && element.getAttribute("data-src")) {
                var rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
                    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                    const {top,bottom,left,right} = element.getBoundingClientRect();
                    const isInViewport = top + element.clientHeight >= 0 &&
                                        left + element.clientWidth >= 0 && 
                                        bottom <= viewportHeight + element.clientHeight && 
                                        right <= viewportWidth + element.clientWidth;

                    if(isInViewport) {
                        element.setAttribute("src", element.getAttribute("data-src"));
                        element.removeAttribute("data-src");
                    }
                }
            }
            
        });
    }

    loadImage();
    window.addEventListener('load', loadImage);
    window.addEventListener('scroll', loadImage);
    window.addEventListener('resize', loadImage);
    window.addEventListener("wheel", loadImage);

}

