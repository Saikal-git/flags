const user = document.querySelector(".user");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((el, idx) => {
      return (user.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img class=" img card-img-top" src="${el.flags.png}" alt="Card image cap">
  <h5>${el.name.common}</h5>
  <div class="card-body">
    <p class=" p card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5>${el.capital}</h5>
    <h6></h6>
  </div>
</div>
    `);
    });
  });
