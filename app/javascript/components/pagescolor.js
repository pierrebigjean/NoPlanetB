const initpagesColor = () => {

  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;
  }


  // window.addEventListener("load", () => {
  //   if (document.location.pathname === "/manifeste") {
  //     setTimeout(() => { changeBackground("#03CEA4"); }, 500);  
  //   } else if (document.location.pathname === "/team") {
  //     changeBackground("#008DD5");
  //   } else if (document.location.pathname === "/contact") {
  //     changeBackground("#C2A9A9");
  //   } else if (document.location.pathname === "/projects") {
  //     changeBackground("#0A0F0D");
  //   }
  // })

  document.getElementById("projets").addEventListener("click", (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = "#0A0F0D"
    setTimeout(() => { document.location.pathname = "/home"; }, 300);
  })

  document.getElementById("manifeste").addEventListener("click", () => {
    event.preventDefault();
    document.body.style.backgroundColor = "#03CEA4"
    setTimeout(() => { document.location.pathname = "/manifeste"; }, 300);

  })

  document.getElementById("l'équipe").addEventListener("click", () => {
    event.preventDefault();
    document.body.style.backgroundColor = "#008DD5"
    setTimeout(() => { document.location.pathname = "/team"; }, 300);
 
  })

  document.getElementById("contact").addEventListener("click", () => {
    event.preventDefault();
    document.body.style.backgroundColor = "#C2A9A9"
    setTimeout(() => { document.location.pathname = "/contact"; }, 300);

  })

  if (document.location.pathname === "/home") {
    document.body.style.backgroundColor = "#0A0F0D";
  }

  if (document.location.pathname === "/manifeste") {
    document.body.style.backgroundColor = "#03CEA4";
  }
  
  if (document.location.pathname === "/team") {
    document.body.style.backgroundColor = "#008DD5";
  }

  if (document.location.pathname === "/contact") {
    document.body.style.backgroundColor = "#C2A9A9";
  }
}

export { initpagesColor };
