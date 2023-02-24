megaMenu = document.getElementsByClassName('mega-menu-div')[0];
megaMenuBtn = document.querySelector('.shopping-category > ul > li > a');
// console.log(megaMenuBtn);
// console.log(megaMenu);

// megaMenuBtn.addEventListener('mouseover', () => {
//   megaMenu.style.display = 'flex';
//   setTimeout(function () {
//     megaMenu.style.display = 'none';
//   }, 1000);
// });

// document.addEventListener('mouseover', (e) => {
//   if (e.target.classList[0] === 'mega-menu-div') {
//     setTimeout(function () {
//       megaMenu.style.display = 'flex';
//     }, 1000);
//   } else {
//     console.log(e.target.classList);
//   }
// });

const showMegaMenu = (e) => {
  if (
    e.target.classList[0] == 'mega-menu-div' ||
    e.target.classList[0] == 'mega-menu-link'
  ) {
    megaMenu.style.display = 'flex';
  } else {
    setTimeout(function () {
      megaMenu.style.display = 'none';
    }, 2000);
  }
};

document.addEventListener('mouseover', showMegaMenu);
