const movies = document.querySelectorAll(".movies");
const actors_a = document.querySelectorAll(".actors_a");

movies.forEach(function(aitem) {
    aitem.addEventListener("click", function(){
        movies.forEach(function(aitem){
        aitem.classList.remove("active");
        })
        actors_a.forEach(function(actors_item){
            actors_item.classList.remove("active");
        })
        aitem.classList.add("active");
    })
})