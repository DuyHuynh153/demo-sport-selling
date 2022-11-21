
const PRODUCT_TYPE = {
  SHIRT: "shirt",
  PANTS: "pants",
  SHOES: "shoes",
  GLOVES: "gloves",
};


const product = [
  { id: 1,type:"shirt", image: "assets\\image\\ao1.jpg", title: "1: Áo" },
  { id: 2, type:"pants",image: "assets\\image\\quan1.jpg", title: "2 quần" },
  { id: 3,type:"shoes", image: "assets\\image\\giay1.jpeg", title: "3 giày" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qQB5yclfLwCxqLRpD9tY_jhDg0PVIDQl-IO03nXZUi5hDDTpDQ&s", title: "4: The House on Mango Street" },
  { id: 5,type:"shoes", image: "assets\\image\\giay2.jpg", title: "4 giày" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "giày" },
  { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy6hIPkdydn_GJQ7hFqBnsPSLtNNemFGazeoquHN5czXyyIu2&s", title: "7: The Old Man and the Sea" },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "8: Ernest Hemmingway" },
  { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvXgwoxPYiT81oxvnETd_06GEcqgLBnusANy1IbVOdtUgD3Rd&s", title: "9: The Giver - Lois Lowry" },
  { id: 10,type:"pants", image: "assets\\image\\quan2.jpg", title: "10: Number the Stars - Lois Lowry" },
  { id: 11, type:"shoes",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "11: A Wrinkle In Time - Madeleine L’engle" },
  { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "12: Silence Once Begun" },
  { id: 13,type:"pants", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "13: Sleep Donation" },
  { id: 14,type:"shirt", image: "assets\\image\\ao2.jpg", title: "14: Áo 2" },
  { id: 15,type:"shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "15: The News: A User’s Manual" },
  { id: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "16: Every Day Is for the Thief" },
  { id: 17,type:"pants", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "17: The UnAmericans" },
  { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "18: Kinder Than Solitude" },
  { id: 19,type:"shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "19: What’s Important is Feeling" },
  { id: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "20: Blood Will Out" },
  { id: 21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "21: Cubed: A Secret History of the Workplace" },
  { id: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "22: The Last Illusion" },
  { id: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "23: Lost for Words: A Novel" },
  { id: 24, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "24: Summer House With Swimming Pool" },
  { id: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "25: I’ll Be Right There" },
  { id: 26,type:"shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "26: English Pronuciation in use" },
  { id: 27,type:"shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "27: Cambridge English Skills Real Listening & Speaking" },
  { id: 28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "28: Everyday Conversations English" },
]



let perPage = 4;
let currentPage = 1;
let start = 0;
let end = perPage;
let productArr =product.slice();
let totalPages = Math.ceil(productArr.length / perPage);
const btnnext = document.querySelector(".btn-next");
const btnprev = document.querySelector(".btn-prev");

function getCurrentPage(currentPage){
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}
//làm mới li số trang sau khi đổi thể loại
function refreshPage(productArr){
  const list = document.getElementById('number-page')
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
 totalPages = Math.ceil(productArr.length / perPage);
 listPage(totalPages);
 initChangePage();
}
//chuyển thể loại
function typeChange(type){

  productArr.splice(0,productArr.length);
  if (type =='shirt'){
    productArr = product.filter(item =>{
      return item.type === type;
    })
  }
  if (type =='pants'){
    productArr = product.filter(item =>{
      return item.type === type;
    })
  }
  if (type =='shoes'){
    productArr = product.filter(item =>{
      return item.type === type;
    })
  }
  refreshPage(productArr);
  listProduct(productArr);
}
//load sản phẩm 
function listProduct(productArr) {
  html = '';
 
  const content = productArr.map((item, index) => {
    if (index >= start && index < end) {
      html += '<div class="card">';
      html += '<a>';
      html += '<img class ="card__img" src=' + item.image + '>';
      html += '</a>';
      html += '<h3>' + item.title + '</h3>';
      html += '</div>';
      return html;
    }
  });
  document.getElementById('container__content').innerHTML = html;
}

function listPage(totalPages) {
  let html = '';
  html += `<li class="current-page active"><a>${1}</a></li>`;
  for (let i = 2; i <= totalPages; i++) {
    html += `<li><a>${i}</a></li>`;
  }
  if (totalPages === 0) {
    html = ''
  }
  document.getElementById('number-page').innerHTML = html;
}
//nút tiến trang
btnnext.addEventListener('click', () => {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if(currentPage === totalPages){
    $('.btn-next').addClass('btn-active');
  }
  $('.btn-prev').removeClass('btn-active');
  $( '.pagination .pagination__content .number-page li' ).removeClass('active');
  $( `.pagination .pagination__content .number-page li:eq(${currentPage -1})` ).addClass('active');
  getCurrentPage(currentPage);
  listProduct(productArr);
}
)
//nút lùi trang
btnprev.addEventListener('click', () => {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  if(currentPage === 1){
    $('.btn-prev').addClass('btn-active');
  }
  $('.btn-next').removeClass('btn-active');
  $( '.pagination .pagination__content .number-page li' ).removeClass('active');
  $( `.pagination .pagination__content .number-page li:eq(${currentPage -1})` ).addClass('active');
 
  getCurrentPage(currentPage);
  listProduct(productArr);
}
)
 //Thêm function đổi trang cho các nút số
function initChangePage(){
  const availablePages = document.querySelectorAll('.number-page li');
  for(let i = 0; i < availablePages.length;i++){
    availablePages[i].addEventListener('click', ()=>{
      let value = i + 1;
      currentPage = value;
      $( '.pagination .pagination__content .number-page li' ).removeClass('active');
      availablePages[i].classList.add('active');
      if(currentPage === 1){
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').removeClass('btn-active');
      }
      if(currentPage === availablePages.length ){
        $('.btn-next').addClass('btn-active');
        $('.btn-prev').removeClass('btn-active');
      }
      if(currentPage > 1 && currentPage < availablePages.length){
        $('.btn-prev').removeClass('btn-active');
        $('.btn-next').removeClass('btn-active');
      }
      getCurrentPage(currentPage);
      listProduct(productArr);
    })
  }
}

listProduct(productArr);
listPage(totalPages);
initChangePage();

