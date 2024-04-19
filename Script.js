window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('mainContent');

  // Add the 'loaded' class to the body when the content is loaded
  document.body.classList.add('loaded');

  // Remove the preloader after a short delay (optional)
  setTimeout(function () {
    preloader.style.display = 'none';
  }, 500);
});

// Add event listener for scroll
window.addEventListener('scroll', scrollHandler);

// Handler function to check scroll position and apply animation
function scrollHandler() {
  const aboutSection = document.querySelectorAll('.Heading');

  function animateheading() {
    aboutSection.forEach(section => {
      const aboutPosition = section.getBoundingClientRect().top;
      if (aboutPosition < window.innerHeight * 0.75) {
        section.classList.add('show'); 
      }
    });
  }
  
  const aboutimgSection = document.querySelector('.about-image');
  const aboutimgPosition = aboutimgSection.getBoundingClientRect().top;

  if (aboutimgPosition < window.innerHeight * 0.70) {
    aboutimgSection.classList.add('show'); 
  }
  const aboutparaSectionsl = document.querySelectorAll('.leftpara');
  const aboutparaSectionsr = document.querySelectorAll('.rightpara');

  function animateAboutparaSectionsl() {
    aboutparaSectionsl.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      if (sectionPosition < window.innerHeight * 0.65) {
        section.classList.add('show'); 
      }
    });
  }
  function animateAboutparaSectionsr() {
    aboutparaSectionsr.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      if (sectionPosition < window.innerHeight * 0.65) {
        section.classList.add('show');
      }
    });
  }
  const skillcolumn = document.querySelectorAll('.skills-column');

  function animateskillcolumn() {
    skillcolumn.forEach((column, index) => {
      const columnPosition = column.getBoundingClientRect().top;
      const delay = index * 500; // Adjust the delay time here (0.5s = 500ms)
  
      if (columnPosition < window.innerHeight * 0.65) {
        setTimeout(() => {
          column.classList.add('show'); // Apply animation class after the delay
        }, delay);
      }
    });
  }
  const pro1 = document.querySelector('.project1');
  const pro1position = pro1.getBoundingClientRect().top;
  if (pro1position < window.innerHeight * 0.70) {
    pro1.classList.add('show'); 
  }
  const pro2 = document.querySelector('.project2');
  const pro2position = pro2.getBoundingClientRect().top;
  if (pro2position < window.innerHeight * 0.70) {
    pro2.classList.add('show'); 
  }
  const pro3 = document.querySelector('.project3');
  const pro3position = pro3.getBoundingClientRect().top;
  if (pro3position < window.innerHeight * 0.70) {
    pro3.classList.add('show'); 
  }
  const pro4 = document.querySelector('.project4');
  const pro4position = pro4.getBoundingClientRect().top;
  if (pro4position < window.innerHeight * 0.70) {
    pro4.classList.add('show'); 
  }
  const cform = document.querySelector('.myform');
  const theformposition = cform.getBoundingClientRect().top;
  if (theformposition < window.innerHeight * 0.70) {
    cform.classList.add('show'); 
  }


  animateAboutparaSectionsl();
  animateAboutparaSectionsr();
  animateheading();
  animateskillcolumn();
  



  window.addEventListener('scroll', animateAboutparaSections);
  
}

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