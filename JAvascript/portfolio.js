const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");
const navLinks = document.querySelectorAll(".navLinks li")

burger.addEventListener('click', () => {
  //Toggle Nav
  nav.classList.toggle('navActive');
  
  //Animate Links 
  navLinks.forEach((link, index) =>  {
    if(link.style.animation){
      link.style.animation = "";
    }else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    }    
  });
  
  //Burger Animation
  burger.classList.toggle('toggle');
});
 
