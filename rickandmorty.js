class RickAndMorty {
  constructor(name){
    this.name = name; 
  }

  // Fetch character from API
  async getCharacter(){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.name}`);
    const responseData = await response.json(); 
    return responseData.results[0]; 
  }

  // Change character
  changeCharacter(name){
    this.name = name;
  }
}