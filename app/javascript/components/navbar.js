const initNavbar = () => {
  if (document.location.pathname === "/home") {
    document.getElementById("projets").style.color = "#FED766";
  }

  if (document.location.pathname === "/manifeste") {
    document.getElementById("manifeste").style.color = "#FED766";
  }
  
  if (document.location.pathname === "/team") {
    document.getElementById("l'équipe").style.color = "#FED766";
  }

  if (document.location.pathname === "/contact") {
    document.getElementById("contact").style.color = "#FED766";
  }

  if (document.location.pathname === "/soutenir") {
    document.getElementById("soutenir").style.color = "#FED766";
  }

  const navbar = document.querySelector(".navbar")

  if (navbar) {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
    
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 0 && window.scrollY < 40) {
        navbar.classList.remove("opacity");
      } else if (window.scrollY >= 40) {
        navbar.classList.add('opacity');
      }
    });

    window.onscroll = function(e) {
      // print "false" if direction is down and "true" if up
      if ((this.oldScroll > this.scrollY === false) && this.scrollY > 20)  {
        navbar.classList.add('opacity');
      } else {  
        navbar.classList.remove("opacity");
      }
      this.oldScroll = this.scrollY; 
    };
  }
}

export { initNavbar };
