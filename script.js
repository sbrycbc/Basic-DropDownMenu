const movies = document.querySelectorAll(".movies");
const actors_a = document.querySelectorAll(".actors_a");

movies.forEach(function(aitem) {
    aitem.addEventListener("click", function(){
        aitem.classList.remove("active");
    })
})