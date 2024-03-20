document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navigation');
  const burger = document.querySelector('.burger');
  const closeBtn = document.querySelector('.close');
  const body = document.querySelector('.body');
  const back = document.querySelector('.back');
  const header = document.querySelector('.header');

  //todo анимация хедера
  window.onscroll = () => {
    if (window.scrollY > 2) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  };

  //todo открытие меню
  burger.addEventListener('click', (e) => {
    menu.classList.add('open');
    body.classList.add('hidden');
    backgr.classList.add('show');
  });

  //todo закрытие меню
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    body.classList.remove('hidden');
    backgr.classList.remove('show');
  });

  menu.addEventListener('click', (e) => {
    if (menu.classList.contains('open')) {
      if (e.currentTarget.contains(e.target) && !e.target.classList.contains('item')) {
        return false
      }
      if (e.target.matches('a.item')) {
        menu.classList.remove('open');
        body.classList.remove('hidden');
        backgr.classList.remove('show');
      }
    }
  });
});