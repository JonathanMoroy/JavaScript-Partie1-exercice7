// Fonction récupérant mes valeurs pour les vérifier avant de les calculer et de les retourner
function bullshit(){
  var shoes_height = document.getElementById('pointure').value;
  var birth_year = document.getElementById('annee').value;
  if (isNaN(shoes_height) || isNaN(birth_year)) {
    var result = 'Les valeurs rentrées ne sont pas des nombres !'
  } else {
    var result = (shoes_height * 2 + 5) * 50 - birth_year + 1766;
  }
  return(result);
}
// Event placé sur le bouton du formulaire qui execute la fonction bullshit
document.getElementById('valider').addEventListener('click', function(){alert(bullshit())});
