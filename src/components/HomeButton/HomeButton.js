export const backHome = () => {
  const article = document.querySelector('.articleContainer');
  const home = createHome();
  article.innerHTML = '';
  article.appendChild(home);
  createEvents();
};
