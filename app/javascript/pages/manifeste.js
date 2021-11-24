const initManifeste = () => {

  const adn = document.getElementById("adn")
  const histoire = document.getElementById("histoire")
  const expertise = document.getElementById("expertise")

  const adnTarget = document.getElementById("adntarget")
  const histoireTarget = document.getElementById("histoiretarget")
  const expertiseTarget = document.getElementById("expertisetarget")

  if (adn) {
    adn.addEventListener("click", () => {
      adn.style.color = "#FED766";
      histoire.style.color = "white";
      expertise.style.color = "white";
      
      setTimeout(() => { adnTarget.classList.remove("opacity")}, 500 );
      histoireTarget.classList.add("opacity")
      expertiseTarget.classList.add("opacity")
    })
  
    histoire.addEventListener("click", () => {
      histoire.style.color = "#FED766";
      adn.style.color = "white";
      expertise.style.color = "white";
  
      adnTarget.classList.add("opacity")
      setTimeout(() => { histoireTarget.classList.remove("opacity")}, 500 );
      expertiseTarget.classList.add("opacity")
    })
  
    expertise.addEventListener("click", () => {
      expertise.style.color = "#FED766";
      histoire.style.color = "white";
      adn.style.color = "white";
  
      adnTarget.classList.add("opacity")
      histoireTarget.classList.add("opacity")
      setTimeout(() => { expertiseTarget.classList.remove("opacity")}, 500 );
    })
  }

}

export { initManifeste };
