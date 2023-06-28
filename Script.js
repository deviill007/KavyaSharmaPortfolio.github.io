
document.addEventListener('DOMContentLoaded', function() {
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

// Read Me button 
    var readMoreBtn = document.getElementById('RMbutton');
    var extraParagraphs = document.getElementsByClassName('extra-paragraph');
    var readMoreSection = document.getElementById('about');
  
    readMoreBtn.addEventListener('click', function() {
      // Toggle visibility of extra paragraphs
      for (var i = 0; i < extraParagraphs.length; i++) {
        extraParagraphs[i].classList.toggle('show');
      }
  
      // Update button text
      if (readMoreBtn.textContent === 'Read More') {
        readMoreBtn.textContent = 'Read Less';
      } else {
        readMoreBtn.textContent = 'Read More';
        scrollToReadMore();
      }
    });
    function scrollToReadMore() {
        var readMoreBtnOffsetTop = readMoreBtn.getBoundingClientRect().top;
        var scrollPosition = window.pageYOffset + readMoreBtnOffsetTop - window.innerHeight + 100;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  });
  
//Get in touch 
function getintouchmedia() {
  var blur = document.getElementById("home-content");
  blur.classList.add("activeblur");
  var blur2 = document.getElementById("about");
  blur2.classList.add("activeblur");
  document.body.classList.add("no-scroll");
  var mediashow = document.querySelector(".getintouch");
  mediashow.classList.add("visiblemedia");
}
function closeMediaShow() {
  var blur = document.getElementById("home-content");
  blur.classList.remove("activeblur");
  var blur2 = document.getElementById("about");
  blur2.classList.remove("activeblur");
  document.body.classList.remove("no-scroll");
  var mediaclose = document.querySelector(".getintouch");
  mediaclose.classList.remove("visiblemedia");
}
  //form filled toggle
  function toggle(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var blur = document.getElementById("contact");
    blur.classList.add("activeblur");
    document.body.classList.add("no-scroll");
    var appear = document.getElementById('popup');
    appear.classList.add("appear");
}

// Get a reference to the Home button element
var homeButton = document.getElementById("home-button");

// Add an event listener to the Home button
homeButton.addEventListener("click", function() {
  // Reload the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  location.reload();
});

//Contact form
function sendmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "8kavyasharma@gmail.com",
        Password : "F950F5331200575F29C9E05E875A6BD8121E",
        To : '8kavyasharma@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Message : "Name: " + document.getElementById("name").value + "<br> Mobile Number: " + document.getElementById("mobile") + "<br> Message: " + document.getElementById("message")
    }).then(
        function (message) {
        toggle(event); // Call the toggle function
      },
      function (error) {
        alert("Failed to send email. Error: " + error);
      }
    );
}