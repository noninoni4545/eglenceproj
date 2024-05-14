const arrows = document.querySelectorAll(".arrow2");
const movieLists = document.querySelectorAll(".movie-list, .movie-list2");
const maxDistance = 871; // Maksimum hareket mesafesi (pixel cinsinden)

arrows.forEach((arrow, i) => {
    let clickCounter = 4;
    const imageItem = movieLists[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        clickCounter++;
        // Atlanacak mesafe miktarını hesapla
        const distanceToMove = 810 + (clickCounter * 30);

        if (distanceToMove <= maxDistance && imageItem - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get
                ("transform")[0].x.value - distanceToMove}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});