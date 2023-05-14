//form submit
// Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "username",
//     Password: "password",
//     To: 'them@website.com',
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
// }).then(
//     message => alert(message)
// );

//menu icon toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.Navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//Scroll Section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });


//Sticky Header
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);
   
    //remove
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Popup Message
let popup = document.getElementById("popup")

function openPopup(){
    console.log(popup)
    popup.classList.add("open-popup");
}