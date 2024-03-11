document.addEventListener("DOMContentLoaded", function() {
    console.log("working");
});


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

/*
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('header').style.height = '0';
        //document.querySelector('header').style.opacity = '0';
        //document.querySelector('.grid-container').style.marginTop = '0';
    }, 2000);
});*/

document.addEventListener("DOMContentLoaded", function() {
    var gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(function(item, index) {
        var delay = index * 100; // Adjust the delay as needed
        item.style.animationDelay = delay + 'ms';
    });

    var gridContainer = document.querySelector('.grid-container');
    gridContainer.style.opacity = '1';
});


