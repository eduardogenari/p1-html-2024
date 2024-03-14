/*
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var title = '| project title |';
    var index = 0;

    function typeTitle() {
        header.innerHTML = title.slice(0, index);
        index++;

        if (index <= title.length) {
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
*/

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

    let main = document.querySelector('main');
    main.style.opacity = '1';
});


const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function restartPage() {
    window.location.reload();
}


window.onload = function() {
    let image = document.getElementById('img');
    let colorThief = new ColorThief();

    let dominantColor = colorThief.getColor(image);

    // Apply the dominant color as background color to the container
    let container = document.getElementById('imageContainer');
    container.style.backgroundColor = 'rgb(' + dominantColor.join(',') + ')';
};

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