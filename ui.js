class UI {
  constructor(){
    this.profile = document.querySelector('.profile');
  }

  print(data){
    this.profile.innerHTML = `
    <div class="card">
    <div class="image">
      <img src="${data.image}">
    </div>
    <h2> ${data.name}</h2>
    <ul class="details">
      <li>${data.location.name}</li>
      <li>${data.species}</li>
      <li>${data.gender}</li>
      <li>${data.status}</li>
    </ul>
    </div>`;
  }
}
