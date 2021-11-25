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
  const logdeux = document.getElementById("logdeux")

  const xrcover = document.querySelector(".xrcover")
  const xrtext2 = document.querySelector("#xrtext2")
  const xrtexts = document.querySelector(".xrtexts")

  const labelcover = document.querySelector(".labelcover")
  const labeltexts = document.querySelector(".labeltexts")
  
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
        dixMatText.style.top = "120px";
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
        xrtexts.classList.add("opacity")       
      } else if (window.scrollY >= 2500 && window.scrollY < 2700) {       
        xrcover.classList.remove("opacity")
        xrtexts.classList.remove("opacity")
      } else if (window.scrollY >= 2700 && window.scrollY < 3000) {       
        xrtext2.classList.remove("opacity")
        logdeux.classList.add("opacity")
      } else if (window.scrollY >= 3000 && window.scrollY < 3730) {       
        xrcover.classList.add("opacity")
        xrtext2.classList.add("opacity")
        logdeux.classList.remove("opacity")
        labelcover.classList.add("opacity")
      } else if (window.scrollY >= 3730 && window.scrollY < 4000) {
        labelcover.classList.remove("opacity")
        labeltexts.classList.remove("opacity")
      } else if (window.scrollY >= 4000) {
        labeltexts.classList.remove("opacity")
      }     


    });
  }
}

export { initHome };
