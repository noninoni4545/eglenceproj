const arrows = document.querySelectorAll(".arrow2");
const movieLists = document.querySelectorAll(".movie-list2");
const maxDistance = 871; // Maksimum hareket mesafesi (pixel cinsinden)

arrows.forEach((arrow2, i) => {
    let clickCounter = 4;
    const imageItem = movielist2[i].querySelectorAll("img").length;

    arrow2.addEventListener("click", function () {
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