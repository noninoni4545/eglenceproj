const arrows = document.querySelectorAll(".arrow, .arrow2");
const movieLists = document.querySelectorAll(".movie-list, .movie-list2");

arrows.forEach((arrow, i) => {
    let clickCounter = 0; // Tıklama sayacı

    arrow.addEventListener("click", function () {
        const imageCount = movieLists[i].querySelectorAll("img").length; // Toplam resim sayısı

        // Her tıklamada kaydırılacak mesafeyi belirle
        const moveDistance = clickCounter % 2 === 0 ? 1000 : 550;

        // Listenin toplam hareket mesafesi
        const totalMoveDistance = (imageCount - 8) * moveDistance;

        // Listenin şu anki kaydırma mesafesi
        let currentDistance = parseInt(movieLists[i].style.transform.replace("translateX(", "").replace("px)", "")) || 0;

        // Yeni kaydırma mesafesi
        currentDistance += moveDistance;

        // Başa veya sona dönme kontrolü
        if (clickCounter % 2 === 0) {
            if (currentDistance >= totalMoveDistance) {
                currentDistance = 0;
            }
        } else {
            if (currentDistance <= 0) {
                currentDistance = totalMoveDistance;
            }
        }

        // Stili güncelle
        movieLists[i].style.transform = `translateX(-${currentDistance}px)`;

        // Tıklama sayacını artır
        clickCounter++;
    });
});
