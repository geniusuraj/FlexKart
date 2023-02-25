// JavaScript code for dropdown
const dropdownReward = document.getElementById('reward-div');
const rewardList = document.getElementById('reward-dropdown');
const dropdownAccount = document.getElementById('my-account-div');
const accountOption = document.getElementById('my-account-dropdown');
const rewChev = document.getElementById('rew-chevron');
const accChev = document.getElementById('acc-chevron');

dropdownReward.addEventListener('click', () => {
  rewardList.classList.toggle('show-reward');
  rewChev.classList.toggle('rotate180');
  accountOption.classList.remove('show-reward');
});
dropdownAccount.addEventListener('click', () => {
  accountOption.classList.toggle('show-reward');
  rewardList.classList.remove('show-reward');
  accChev.classList.toggle('rotate180');
});

// JavaScript code for delaying hiding megamenu

let timeoutId;

const menuLinks = document.querySelectorAll('.shopping-category > ul > li > a');
const megamenus = document.querySelectorAll('.mega-menu-div');

for (let i = 0; i < menuLinks.length; i++) {
  const menuLink = menuLinks[i];
  const megamenu = megamenus[i];

  menuLink.addEventListener('mouseenter', function () {
    clearTimeout(timeoutId);
    closeAllMegamenus(); // hide any open megamenu before showing the current one
    megamenu.style.display = 'flex';
  });

  menuLink.addEventListener('mouseleave', function () {
    timeoutId = setTimeout(function () {
      megamenu.style.display = 'none';
    }, 500);
  });

  megamenu.addEventListener('mouseenter', function () {
    clearTimeout(timeoutId);
  });

  megamenu.addEventListener('mouseleave', function () {
    timeoutId = setTimeout(function () {
      megamenu.style.display = 'none';
    }, 500);
  });
}

function closeAllMegamenus() {
  for (let i = 0; i < megamenus.length; i++) {
    const megamenu = megamenus[i];
    megamenu.style.display = 'none';
  }
}
