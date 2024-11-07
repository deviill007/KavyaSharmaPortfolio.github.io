document.addEventListener('DOMContentLoaded', function() {

  //menu icon toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.Navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Sticky Cursor
const circle = document.getElementById('circle');
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
const speed = 0.1;

// Update mouse position based on cursor movement
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX - circle.offsetWidth / 2;
    mouseY = event.clientY - circle.offsetHeight / 2;
});

// Adjust circle position based on scroll and cursor position
function animate() {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    
    circleX += (mouseX + scrollX - circleX) * speed;
    circleY += (mouseY + scrollY - circleY) * speed;
    
    circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
    
    requestAnimationFrame(animate);
}

// Add hover effect
const hoverableElements = document.querySelectorAll('.hoverable');

hoverableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        circle.classList.add('enlarged');
    });

    element.addEventListener('mouseleave', () => {
        circle.classList.remove('enlarged');
    });
});
const stickableElements = document.querySelectorAll('.stickable');

stickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        circle.classList.add('stickyCircle');
    });

    element.addEventListener('mouseleave', () => {
        circle.classList.remove('stickyCircle');
    });
});
const textElements = this.querySelectorAll('.hideCircle');

textElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
      circle.classList.add('hideCircle');
  });

  element.addEventListener('mouseleave', () => {
      circle.classList.remove('hideCircle');
  });

});
const playReel = this.querySelectorAll('.play-reel');

playReel.forEach(element => {
  element.addEventListener('mouseenter', () => {
      circle.classList.add('playReel');
  });

  element.addEventListener('mouseleave', () => {
      circle.classList.remove('playReel');
  });

});
animate();

//Stick social media handle
const buttons = document.querySelectorAll('.magnetic-button');
const magneticStrength = 40;
const stickDistance = 30; 

// Function to update button position based on cursor
function updateButtonPosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const deltaX = mouseX - buttonX;
        const deltaY = mouseY - buttonY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < stickDistance) {
            const translateX = (deltaX / distance) * magneticStrength;
            const translateY = (deltaY / distance) * magneticStrength;
            button.style.transform = `translate(${translateX}px, ${translateY}px)`;
        } else {
            button.style.transform = 'translate(0, 0)';
        }
    });
}

document.addEventListener('mousemove', updateButtonPosition);



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

    // Function to handle the scroll-based reveal effect
function handleScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      
      const scrollProgress = Math.min(1, (windowHeight * 0.5 - rect.top) / (windowHeight * 0.5));
      const backgroundPositionX = 150 - (scrollProgress * 100);
      
      element.style.backgroundPosition = `${backgroundPositionX}% 0`;
  });
}

window.addEventListener('scroll', handleScrollReveal);
handleScrollReveal();



//wipe effect in projects
document.querySelectorAll('.wipe-reveal').forEach(element => {
  element.addEventListener('mouseenter', () => {
      element.classList.add('hover');
  });

  element.addEventListener('mouseleave', () => {
      element.classList.remove('hover');
  });
});
const videoSection = document.getElementById('video-section');
const video = document.getElementById('video');
let isPlaying = false;

video.addEventListener('click', () => {
  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }
  isPlaying = !isPlaying;
});

video.addEventListener('dblclick', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});



//rise-up text reveal
const revealTexts = document.querySelectorAll('.rise-up-reveal');
  revealTexts.forEach((element) => {
    element.classList.add('active');
  });

  
  });