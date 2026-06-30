// Smooth Navbar Shadow
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(8,17,31,.75)";
        header.style.boxShadow = "none";

    }

});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});