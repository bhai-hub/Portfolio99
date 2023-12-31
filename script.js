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
    

    
