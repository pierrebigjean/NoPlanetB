const initHome = () => {

  const dixMat = document.querySelector(".dixmat")
  const dixMatCover = document.querySelector(".dixmatcover")
  const dixMatText = document.querySelector(".dixmattext")
  const xrtext = document.querySelector(".xrtext")
  const labeltext = document.querySelector(".labeltext")

  const bouchees = document.getElementById("boucheesdoubles")
  const explosion = document.getElementById("explosioncard")
  const alternatives = document.getElementById("alternativescard")
  const urgence = document.getElementById("urgencecard")
  const desequilibre = document.getElementById("desequilibrecard")

  const logoun = document.getElementById("logoun")

  const xrcover = document.querySelector(".xrcover")
  
  if (dixMatCover) {

    window.addEventListener('scroll', () => {
      if (window.scrollY >= 0 && window.scrollY < 160) {
        dixMat.classList.remove("opacity")
        dixMatCover.classList.add("opacity");
        dixMatText.style.top = "30vh";
        xrtext.classList.remove('opacity');
        labeltext.classList.remove('opacity');
      } else if (window.scrollY >= 160 && window.scrollY < 430) {
        dixMatCover.classList.remove('opacity');
        dixMatText.style.top = "15vh";
        bouchees.classList.add('opacity');
        xrtext.classList.add('opacity');
        labeltext.classList.add('opacity');
      } else if (window.scrollY >= 430 && window.scrollY < 600) {
        bouchees.classList.remove('opacity');
        explosion.classList.add('opacity');
        explosion.style.bottom = "-20px";
      } else if (window.scrollY >= 600 && window.scrollY < 770) {
        explosion.classList.remove('opacity');
        alternatives.classList.add('opacity');
        alternatives.style.bottom = "-20px";
        explosion.style.bottom = "0px";
      } else if (window.scrollY >= 770 && window.scrollY < 940) {
        alternatives.classList.remove('opacity');
        urgence.classList.add('opacity');
        urgence.style.bottom = "-20px";
        alternatives.style.bottom = "0px";
      } else if (window.scrollY >= 940 && window.scrollY < 1110) {
        urgence.classList.remove('opacity');
        desequilibre.classList.add('opacity');
        desequilibre.style.bottom = "-20px";
        urgence.style.bottom = "0px";
      } else if (window.scrollY >= 1110 && window.scrollY < 1400) {       
        desequilibre.classList.remove('opacity');
        desequilibre.style.bottom = "0px";
        dixMat.classList.remove("opacity")
        logoun.classList.add("opacity")
      } else if (window.scrollY >= 1400 && window.scrollY < 2500) {       
        dixMat.classList.add("opacity")
        logoun.classList.remove("opacity")
        xrcover.classList.add("opacity")
      } else if (window.scrollY >= 2500) {       
        xrcover.classList.remove("opacity")
      }    


    });
  }
}

export { initHome };
