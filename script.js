window.addEventListener('scroll', reveal)

function reveal(){
    var reveal = document.querySelectorAll('.box')
    console.log(reveal)
    for(var i = 0; i < reveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top
        var revealPoint = 150
        console.log(windowHeight-revealPoint)
        if(revealTop < (windowHeight-revealPoint)){
            reveal[i].classList.add('active');
        } else{
            reveal[i].classList.remove('active')
        }
    }
}

$(document).ready(function(){
    $('.toggle').click(function() {
        $('.navLink').toggle();
    });
    });