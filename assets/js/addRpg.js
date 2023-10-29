const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const opacity = document.querySelector('.opacityPopup')
const rpgs = document.querySelector('.rpgs')
const descricao = document.querySelector('.descricao')

function openPopup() {

    popup.style.opacity = '0%'
    popup.style.display = 'flex'
    popup.classList.add('opacityPopup')
    rpgs.classList.add('blur')
    descricao.classList.add('blur')

    setTimeout(() => {

        popup.style.opacity = '100%'
        rpgs.style.filter = 'blur(3px)'
        descricao.style.filter = 'blur(3px)'
        popup.classList.remove('opacityPopup')

    }, 500)

}

closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none'
    rpgs.style.filter = 'blur(0px)'
    descricao.style.filter = 'blur(0px)'
});