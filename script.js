let movie1 ={
name: "harry potter",
img : "https://th.bing.com/th/id/R.0ded20137614f3c3847455e51d9e446e?rik=Hpz%2bgn9dQc2kRA&pid=ImgRaw&r=0"

}
let movie2 = {
name: "home alone",
img: "https://th.bing.com/th/id/R.eb6e9a3a5cd0bf33dc2f63492abdb04c?rik=EVFcIW7f4bUG3g&pid=ImgRaw&r=0"

}
let movie3= {
name: "oppenheimer",
img: "https://th.bing.com/th/id/OIP.Pl3oktdvnp5GmUuXqkHvawHaEK?pid=ImgDet&rs=1"
}
const movies = [];
movies.push(movie1,movie2,movie3);
let movieContainer = document.getElementById("container")
movies.forEach(movie => { movieContainer.innerHTML += `
<div class="movie">
<img src="${movie.img}" alt="movie picture" />
<h2>${movie.name}</h2>
</div>
`;
    
});
