const initpagesColor = () => {

  const navbar = document.querySelector(".navbar")

  if (navbar) {

    document.getElementById("projets").addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "#0A0F0D"
      navbar.style.backgroundColor = "#0A0F0D";
      setTimeout(() => { document.location.pathname = "/home"; }, 300);
    })
  
    document.getElementById("manifeste").addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "#03CEA4"
      navbar.style.backgroundColor = "transparent";
      setTimeout(() => { document.location.pathname = "/manifeste"; }, 300);
  
    })
  
    document.getElementById("l'équipe").addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "#0A0F0D"
      navbar.style.backgroundColor = "#0A0F0D";
      setTimeout(() => { document.location.pathname = "/team"; }, 300);
   
    })
  
    document.getElementById("contact").addEventListener("click", (event) => {
      event.preventDefault();
      document.body.style.backgroundColor = "#C2A9A9"
      navbar.style.backgroundColor = "transparent";
      setTimeout(() => { document.location.pathname = "/contact"; }, 300);
  
    })
  
    if (document.location.pathname === "/home") {
      document.body.style.backgroundColor = "#0A0F0D";
    }
  
    if (document.location.pathname === "/manifeste") {
      document.body.style.backgroundColor = "#03CEA4";
    }
    
    if (document.location.pathname === "/team") {
      document.body.style.backgroundColor = "#0A0F0D";
    }
  
    if (document.location.pathname === "/contact") {
      document.body.style.backgroundColor = "#C2A9A9";
    }
  }

}

export { initpagesColor };
