window.addEventListener('scroll', reveal)

function reveal(){
    var reveal = document.querySelectorAll('.box')
    for(var i = 0; i < reveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top
        var revealPoint = 150
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



    const dataSend = () =>{

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
    
        fetch('https://api-22nr.onrender.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Request submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting request.');
        });

    }
    
    const obj = [
        {
            "img": 'assets/IndoSac.JPG',
            "title" : 'IndoSac - Spice up your moments with our Indian Snack Symphony!',
            "link" : 'https://stirring-crepe-69d3d1.netlify.app/'
        },
        {
            "img": 'assets/wallpaper.JPG',
            "title" : 'Wally - webpage built using pixbay api',
            "link" : 'https://bhai-hub.github.io/wally/'
        },
        {
            "img": 'assets/weather.JPG',
            "title" : 'Weathery : API based application using which we can monitor multi location weather',
            "link" : 'https://bhai-hub.github.io/weather103/'
        }
    ]

    console.log(obj)

    const proj = document.getElementById("proj");

    for (var i = 0; i < obj.length; i++) {
        let html = `<div class="cardp">
            <div class="card-content">
                <img src="${obj[i].img}" alt="">
            </div>
            <div class="info">
                <p>${obj[i].title}</p>
                <a href="${obj[i].link}" target="_blank">Visit</a>
            </div>
        </div>`;
        proj.innerHTML += html;
    }
    

//     <div class="cardp">
//     <div class="card-content">
//       <img src="assets/TinDog.JPG" alt="">
//     </div>
//     <div class="info">
//       <p>Tindog - Landing page for dating app for dog</p>
//       <a href="https://bhai-hub.github.io/TinDog/">Vist</a>
//     </div>
//   </div>