const mainImage = document.getElementById('mainImage');
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const faqContainers = document.querySelectorAll('.container-faq');
const faqResponses = document.querySelectorAll('.faq-response');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  line1.classList.toggle('rotate-45');
  line1.classList.toggle('translate-y-[10px]');
  line2.classList.toggle('opacity-0');
  line3.classList.toggle('-rotate-45');
  line3.classList.toggle('-translate-y-[10px]');
});

let startIndex = 0;
const visibleCount = 2;

function updateVisibleCards() {
  const totalCards = cards.length;

  cards.forEach((card, index) => {
    const isVisible = 
      index >= startIndex + 1 && index < startIndex + 1 + visibleCount;

    const isOverflow =
      startIndex + 1 + visibleCount > totalCards &&
      (index < (startIndex + 1 + visibleCount) % totalCards);

    card.style.display = isVisible || isOverflow ? 'block' : 'none';
  });
}

function updateMainImage() {
  const currentImageIndex = startIndex;
  const imageUrl = getComputedStyle(cards[currentImageIndex]).backgroundImage;
  mainImage.style.backgroundImage = imageUrl;
}

function nextCard() {
  startIndex = (startIndex + 1) % cards.length; // Loop circular
  updateMainImage();
  updateVisibleCards();
}

function prevCard() {
  startIndex = (startIndex - 1 + cards.length) % cards.length; // Loop circular
  updateMainImage();
  updateVisibleCards();
}

nextButton.addEventListener('click', nextCard);
prevButton.addEventListener('click', prevCard);

updateMainImage();
updateVisibleCards();

faqContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    const isVisible = !faqResponses[index].classList.contains('hidden');

    faqResponses.forEach((response) => response.classList.add('hidden'));

    if (!isVisible) {
      faqResponses[index].classList.remove('hidden');
    }
  });
});