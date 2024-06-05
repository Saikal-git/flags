const user = document.querySelector(".user");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((el, idx) => {
      return (user.innerHTML += `
    <div class=" block card" style="width: 18rem;">
  <img class=" img card-img-top" src="${el.flags.png}" alt="${el.flags.alt}">
  <h5>${el.name.common}</h5>
  <a target="_blank" href="${el.maps.googleMaps}">map</a>

  <p class=" p card-text">${el.flags.alt}</p>
  <h5>${el.capital}</h5>
  <h5> populetion-${el.population}</h5>
  <h5> region-${el.region}</h5>
  <h5>${el.area}km</h5>
  <div class="card-body">
    <h6></h6>
  </div>
</div>
    `);
    });
  });
