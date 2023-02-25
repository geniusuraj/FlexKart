const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', function() {
    const searchData = searchInput.value;
    localStorage.setItem('searchData', searchData);
});