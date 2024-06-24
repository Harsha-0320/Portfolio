function sendEmail(){
    Email.send({
    Host: "smtp.gmail.com",
    Username: "ahsh@gmail.com",
    Password: "password",
    To: 'reciever@gmail.com',
    From: document.getElementById("email").value,
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
})
    .then(function (message) {
        alert("mail sent successfully")
    });
}

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