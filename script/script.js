const menuList = document.getElementById("menuList");
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', ()  => {
    
        menuList.classList.toggle('show')
});

closeMenu.addEventListener('click', ()  => {
    
    menuList.classList.toggle('show')
});



