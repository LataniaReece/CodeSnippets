const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");
const navLinks = document.querySelectorAll(".navLinks li")
const mainContent = document.getElementById("mainContent")

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

  //Change main content display based on whether the navbar is active or not 
  if(nav.classList.contains("navActive")){
    mainContent.style.gridAutoFlow = "row";
    mainContent.style.justifyContent = "flex-start" 
    mainContent.style.paddingLeft = "2%"
    mainContent.childNodes[1].style.marginLeft = "20%";
    mainContent.childNodes[3].childNodes[1].style.marginLeft = "12%";
    // console.log(mainContent.childNodes[3].childNodes[1])
  }else{
    console.log("not active")
    mainContent.style.gridAutoFlow = "column";
    mainContent.style.justifyContent = "center";
    mainContent.style.paddingLeft = "0";
    mainContent.childNodes[1].style.marginLeft = "0";
    mainContent.childNodes[3].childNodes[1].style.marginLeft = "0";

    }
  
});

