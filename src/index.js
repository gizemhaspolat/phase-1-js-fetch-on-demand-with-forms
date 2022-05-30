const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //e.target.children[1].value;
    const input = document.getElementById("searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const movieTitle = document.querySelector("section#movieDetails h4");
        const movieDescription = document.querySelector(
          "section#movieDetails p"
        );
        movieTitle.innerText = data.title;
        movieDescription.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
