// Object initialization
const rickandmorty = new RickAndMorty();
const ui = new UI; 

// Array of characters names
charactersArr = [
  "Rick Sanchez",
  "Morty Smith",
  "Beth Smith",
  "Jerry Smith",
  "Summer Smith",
  "Jessica",
  "Evil Morty",
  "Mr. Goldenfold",
  "Coach Feratu",
  "Abradolf Lincler",
  "Ethan",
  "Nancy",
  "Toby Matthews",
  "MC Haps",
  "Tricia Lange",
  "Abadango Cluster Princess",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails"
  ]; 
   
  // Event listener for names to show 
  document.addEventListener('DOMContentLoaded', showNames);
  
  // show names on select element
  function showNames(){
    charactersArr.forEach((name) => {
      const option = document.createElement('option');
      option.appendChild(document.createTextNode(name)); 
      option.setAttribute('value', name);
      select.insertBefore(option, select.lastChild);
    }); 
  } 

  // show selected character
  select.addEventListener('change',(e) =>{
   const charName = e.target.value;
   rickandmorty.changeCharacter(charName);
   rickandmorty.getCharacter(charName)
   .then(data => ui.print(data))
  .catch(err => console.log(err));
}); 


