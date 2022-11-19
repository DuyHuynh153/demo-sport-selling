
const PRODUCT_TYPE = {
  SHIRT: "shirt",
  PANTS: "pants",
  SHOES: "shoes",
  GLOVES: "gloves",
};


const product = [
  { id: 1, image: "http://static.ybox.vn/2017/5/12/1041f8a2-368f-11e7-8a7e-cac091044fd5.jpg", title: "1: Charlotte’s Web - E.B White" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "2: Meiko and the Fifth Treasure" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "3: The Outsiders" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qQB5yclfLwCxqLRpD9tY_jhDg0PVIDQl-IO03nXZUi5hDDTpDQ&s", title: "4: The House on Mango Street" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cgZnVmMMj0Eb1An2Mujhbhs0ZVc5EhhY5NPhxuFyBz--M1jkWg&s", title: "5: Thirteen Reasons Why" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "6: Peter Pan" },
  { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy6hIPkdydn_GJQ7hFqBnsPSLtNNemFGazeoquHN5czXyyIu2&s", title: "7: The Old Man and the Sea" },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "8: Ernest Hemmingway" },
  { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvXgwoxPYiT81oxvnETd_06GEcqgLBnusANy1IbVOdtUgD3Rd&s", title: "9: The Giver - Lois Lowry" },
  { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "10: Number the Stars - Lois Lowry" },
  { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "11: A Wrinkle In Time - Madeleine L’engle" },
  { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "12: Silence Once Begun" },
  { id: 13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "13: Sleep Donation" },
  { id: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "14: Can’t and Won’t" },
  { id: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "15: The News: A User’s Manual" },
  { id: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "16: Every Day Is for the Thief" },
  { id: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "17: The UnAmericans" },
  { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "18: Kinder Than Solitude" },
  { id: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "19: What’s Important is Feeling" },
  { id: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "20: Blood Will Out" },
  { id: 21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "21: Cubed: A Secret History of the Workplace" },
  { id: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "22: The Last Illusion" },
  { id: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "23: Lost for Words: A Novel" },
  { id: 24, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "24: Summer House With Swimming Pool" },
  { id: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "25: I’ll Be Right There" },
  { id: 26, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "26: English Pronuciation in use" },
  { id: 27, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "27: Cambridge English Skills Real Listening & Speaking" },
  { id: 28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "28: Everyday Conversations English" },
]
const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");


let perPage = 4;
let currentPage = 1;
let start = 0;
let end = perPage;
const totalPages = Math.ceil(product.length / perPage);
const btnnext = document.querySelector(".btn-next");
const btnprev = document.querySelector(".btn-prev");

function getCurrentPage(currentPage){
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}

//load sản phẩm 
function listProduct() {
  html = '';
  const content = product.map((item, index) => {
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
//khởi tạo các nút trang bằng số
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
  listProduct();
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
  listProduct();
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
      listProduct();
    })
  }
}


listProduct();
listPage(totalPages);
initChangePage();

