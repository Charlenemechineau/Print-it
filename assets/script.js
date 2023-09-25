const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); //* Permet de sélèctionner tous les points*//

let currentIndex = 0;

//* Fonction pour mettre à jours bullet point indicateur *//
function updateDots(index) {
	dots.forEach((dot, i) => {
		if (i ===index) {
			dot.classList.add('dot_selected'); //* Permet d'ajouter la class pour le point actuel *//
		} else {
			dot.classList.remove('dot_selected'); //* permet de supprimer la classe pour les autres points *//
		}
	});
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte *//
function updateCarousel(index, direction) {
	//correction du bug pour la première et la dernière image*//
	if (currentIndex === -1 && direction === 'left') {
	  currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === 'right') {
	  currentIndex = 0;
  }
//* Mettre à jours les images *//
	const imageSlides = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImg.src = imageSlides;
	bannerImg.alt = `slide ${currentIndex + 1}`;

//* Mettre à jours les Texte *//
	const tagLine = slides[currentIndex].tagLine;
	document.querySelector('p').innerHTML = tagLine;

	console.log(`Clic sur la flèche ${direction}`);
} 	
    
//*Gestionnaire d'évènement pour le clic de la flèche de gauche*//
arrowLeft.addEventListener('click', function() {
	currentIndex = (currentIndex - 1);
	updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); //* Met à jour les points indicateurs *//
});


//*Gestionnaire d'évènement pour le clic de la flèche de droite*//
arrowRight.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) ;
	updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); //* Met à jour les points indicateurs*//
});

//* Afficher la première diapositive au chargement de la page*//
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); //* Met à jour les points indicateurs pour la première diapositive *//