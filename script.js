let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

function sendMail(){
    var params = {
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("number").value,
        message : document.getElementById("message").value,
    };

    const serviceID="service_ig31gys";
    const templateID="template_p4py55e";

    emailjs
    .send(serviceID,templateID,params)
    .then(function(res){
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("number").value= "";
        document.getElementById("message").value= "";
        console.log(res);
        alert("Your message sent successfully "+res.status);
})
.catch((err) => console.log(err));
}
