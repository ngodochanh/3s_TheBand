const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// hàm xóa class `active`
let removeActive = (element) => element.classList.remove('active');

// Lấy icon list của header
const listHeader = $('.js-header-list');

// Lấy danh sách thẻ li của header
const itemHeaderNodes = $$('.js-header-nav--item');

// Lấy subnav của nav
const subnavListHeader = $('.js-subnav-list');

// Lấy thẻ cha của subnav (chưa cần xử lý)
const parentElement = subnavListHeader.parentNode;

// Xử lý hiển thị nav khi nhấn icon list
listHeader.addEventListener('click', () => itemHeaderNodes.forEach(itemHeader => itemHeader.classList.toggle('active')));

// Xử lý khi thay đổi chiều ngang trình duyệt
window.addEventListener('resize', () => {
    if(window.innerWidth >= 767) {
        itemHeaderNodes.forEach(itemHeader => removeActive(itemHeader));
    }
})

/* Begin: Xử lý Slide show theo time */
let arrImg = [
    "chicago.jpg",
    "la.jpg",
    "ny.jpg"
]

var arrHeading = [
    "Chicago",
    "Los Angeles",
    "New York"
]

var arrDescription = [
    "Thank you, Chicago - A night we won't forget.",
    "We had the best time playing at Venice Beach!",
    "The atmosphere in New York is lorem ipsum."
]

let slideImg = $('.js-slide-img');
let slideHeading = $('.js-slide-heading');
let slideDescription = $('.js-slide-description');

let slideLength = arrImg.length;
let index = 0;

setInterval(() => {
    slideImg.src = "./assets/img/" + arrImg[index];
    slideHeading.innerText = arrHeading[index];
    slideDescription.innerText = arrDescription[index];
    index++;

    if(index === slideLength) {
        index = 0;
    }
}, 1500)
/* End: Xử lý Slide show theo time */

// Lấy danh sách nút mua 
let buyTickets = $$('.js-buy-tickets-btn');
// Lấy nút đóng modal
let closeModal = $('.js-close-modal');
// Lấy modal
let modal = $('.js-modal');
// Lấy content của modal
let modalMain = $('.js-modal-main');

// Xử lý hiển thị khi nhấn vào btn buy ticket
buyTickets.forEach(buyTicket => buyTicket.addEventListener('click', () => modal.classList.add('active')));
// Xử lý đóng khi nhấn vào btn close
closeModal.addEventListener('click', () => removeActive(modal)); 
// Xử lý đóng khi nhấn vào vùng ngoài content
modal.addEventListener('click', () => removeActive(modal));
// ngăn chặn sự kiện nổi bọt khi nhấn trong vùng content
modalMain.addEventListener('click', e => e.stopPropagation());