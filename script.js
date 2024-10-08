/**
 * Piano script
 */

//recuperation des touches du piano
let eleme = Array.from(document.getElementsByClassName("key"));
//on detecte chaque listener d'element HTML representant les touches
eleme.forEach(function (element) {
  //pour chaque touche Html detecté, on verifie s'il  a été cliqué ou pas
  element.addEventListener("click", function () {
    //si un element a été cliqué, on option la valeur de son attribut data-key
    const touche = element.dataset.key;
    //ajouter active
    element.classList.toggle("active");
    //enlever appret un certain temps
    setTimeout(() => element.classList.remove("active"), 100);
    //on lance la fonction playAudio avec l'argument data-key pour jouer le bon son
    playAudio(touche + ".wav");
  });
});
//detection d'une touche du clavier
document.addEventListener("keydown", (event) => {
  //enregistrement de la touche
  const touche = event.key;
  //verifier si la touche du clavier selectionner est dans la liste de son
  const found = document.querySelector(`[data-key="${touche}"]`);
  if (found) {
    //si la touche est dans la liste, on lance la fontion playAudio avec le son corespondant en parametre
    playAudio(touche + ".wav");
  }
});

//
function playAudio(name) {
  const son = new Audio(name);
  son.play();
  son.playbackRate = 2;
}
console.log(eleme);
