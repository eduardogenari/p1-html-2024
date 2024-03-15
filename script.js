document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector('header');
    let h1Element = header.querySelector('h1');
    let titleText = h1Element.textContent || h1Element.innerText;
    let index = 0;

    function typeTitle() {
        header.innerHTML = titleText.slice(0, index);
        index++;

        if (index <= titleText.length) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(typeTitle, 30); 
        } else {
            setTimeout(function() {
                header.style.height = '0';
            }, 2000); 
        }
    }
    typeTitle();
});


document.addEventListener("DOMContentLoaded", function() {
    let gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item, index) {
        let delay = index * 100; 
        item.style.animationDelay = delay + 'ms';
    });

    let coverGrid = document.querySelector('.cover-grid');
    coverGrid.style.opacity = '1';
});


function restartPage() {
    window.location.reload();
}


function toggleDarkMode() {

    let body = document.body;
    body.classList.toggle('dark-mode');
    
    let footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');

    let moreProdGridItems = document.querySelectorAll('.more-prod-grid-item');
    moreProdGridItems.forEach(function(item) {
        item.classList.toggle('dark');
    });
}


function toggleMonochrome() {
    console.log("here")
    let images = document.querySelectorAll('img');
    images.forEach(function(image) {
        if (image.classList.contains('monochrome')) {
            image.classList.remove('monochrome');
        } else {
            image.classList.add('monochrome');
        }
    });
}
