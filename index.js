const request = fetch("https://pokeapi.co/api/v2/pokemon");
let dataCollection = "";

request
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((item, key) => {
      const pokeId = item.url.split('/');
      dataCollection += `
        <div class="card">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId[6]}.png" />
          <h2>${item.name}</h2>
          <p class="ellipsis">${item.url}</p>
        </div>
      `;
    });

    document.getElementById("content").innerHTML = dataCollection;
  })
  .catch(() => console.log("Halaman error"));
