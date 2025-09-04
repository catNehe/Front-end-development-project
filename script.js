//select all images in the photo class in the HTML doc
const photos = document.querySelectorAll(".photo");
//select the previous and next buttons by their id's
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0; //this is the currently displayed image
function showImage(index) {
  //it recieves the input 'index' 0, 1, or 2
photosforEach((photo, i) => {
    photo.style.display = i === index ? "block" : "none";
  }); //this function displays only the image that matches the current Index
}
showImage(currentIndex); //this calls that function up there and inputs the currentIndex
        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1: photos.length - 1;
            showImage(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1: 0;
            showImage(currentIndex);
        });
const drawer = document.querySelector('.slide-drawer');
const navList = document.querySelector('nav ul');

drawer.addEventListener('click', () => {
navList.classList.toggle('active');
});
