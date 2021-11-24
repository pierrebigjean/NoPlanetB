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
}

export { initNavbar };
