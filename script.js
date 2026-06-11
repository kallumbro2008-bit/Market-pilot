// Fade In Animation on Scroll

const sections = document.querySelectorAll(
'.market-card, .analysis-card, .news-card, .why-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

});

sections.forEach((item)=>{
    observer.observe(item);
});