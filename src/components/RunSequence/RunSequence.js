export const runSequence = (currentSequence, index = 0) => {
  const images = document.querySelectorAll('.colorButton');
  if (index < 6) {
    const color = currentSequence[index];
    const colorImage = Array.from(images).find(
      (img) => img.dataset.value === color
    );
    colorImage.style.width = '90%';
    setTimeout(() => {
      colorImage.style.width = '100%';
      runSequence(currentSequence, index + 1);
    }, 1000);
  } else {
    const h3 = document.querySelector('.turn');
    h3.textContent = 'Your turn!';
  }
};
