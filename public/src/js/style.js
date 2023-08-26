const img = document.querySelectorAll(".image-container .img");

for (let i = 0; i < 3; i++) {
    img[i].addEventListener("click", (function(index) {
        return function() {
            gsap.to(".img-container img", {duration: 2, background: '../img/cafe1.png'});
            alert("Clicked");
        };
    })(i));
}

const email = ()=>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "9E7799A5FC210A164E939120FA2B3318306F33335BCC833883CC846379631D2B100E867E2742748CC005BC951855DB39",
        Password : "",
        To : 'ranjithv11223344@gmail.com',
        From : "ranjithv11223344@gmail.com",
        Subject : "This is the from elaastic mail",
        Body : "And this is the body from elastic mail "
    }).then(
      message => alert(message)
    );
}

const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.nav-links');



menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
