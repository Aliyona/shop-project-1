let productsCountEl = document.getElementById("products-counter");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        //    let prevProductsCount = +productsCountEl.textContent;
        //     productsCountEl.textContent = prevProductsCount + 1
        productsCountEl.textContent = +productsCountEl.textContent + 1
    })
};
// =====================
// Приклади циклу for і методу forEach - для досягнення одного і того ж результату:
// let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
// for(let i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click",function() {
//      console.log("clicked")
//     })
// };
// addToCartBtns.forEach(item => {
//     item.addEventListener("click", function () {
//         console.log("clicked")
//     })
// });
// =====================
// modal:
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
let moreDetailsBtns = document.querySelectorAll(".btn-more-details");

moreDetailsBtns.forEach(btn => {
    btn.addEventListener("click", openModal)
});
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide")
};

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show")
};
modal.addEventListener("click", function (e) {
    console.log(e);
    if (e.target === modal) {
        closeModal()
    }
});
// ================================
// change like button state:
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);
// варіант 1:
// likeBtns.forEach((item) =>
//     item.addEventListener("click", function () {       
//         if (item.classList.contains("liked")) {
//             item.classList.remove("liked")                 
//             } else { item.classList.add("liked")}
//                         }          
//   )
// );
// варіант 2 (оптимізований):
likeBtns.forEach((item) =>
    item.addEventListener("click", function () {
        item.classList.toggle("liked")
    })
);

// ============================

// мої спроби вирішити завдання з like:

// likeBtns.forEach(btn => {
//     btn.addEventListener("click", function() {
//         document.getElementById("like").classList.add("like-show");
//         document.getElementById("like").classList.remove("like")
//     })
// });


// // for(let i = 0; i < likeBtns.length; i++) {
//     likeBtns[i].addEventListener("click",function() {
//         document.getElementById("like").classList.add("like-show");
//         document.getElementsById("like").classList.remove("like");              
//     })
// likeBtns[i].addEventListener("click",function() {
//     document.getElementById("like").classList.remove("like-show");
//     document.getElementById("like").classList.add("like");              
// });
// ======================
// 3 приклади вирішення однієї і тієї ж задачі від вчителя:
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "red";
//   })
// );
// або:
// likeBtns.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.style.backgroundColor = "red";
//   })
// );
// або:
// likeBtns.forEach((item) =>
//     item.addEventListener("click", function () {
//         console.log(this);
//     this.style.backgroundColor = "red";
//   })
// );
// ============
// scroll:

// мої спроби вирішити завдання з scroll:
// window.onscroll = function () { myFunction() };
// function myFunction() {
//     if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//         modal.classList.add("show");
//         modal.classList.remove("hide")
//         }
// }

function showModalByScroll() {
    // console.log(window.pageYOffset);
    // console.log(document.body.scrollHeight);
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll);
    }
};
window.addEventListener("scroll", showModalByScroll);

// change product quantity:
// ===================================
// мій варіант виконання ДЗ (працює):
// let incrementBtns = document.querySelectorAll(".increment-button");
// let decrementBtns = document.querySelectorAll(".decrement-button");
// let quantityInputs = document.querySelectorAll(".products-quantity input");

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(quantityInputs);

// for (let i = 0; i < decrementBtns.length; i++) {
//     if (+quantityInputs[i].value > 1) {
//         decrementBtns[i].disabled = false
//     } else {
//         decrementBtns[i].disabled = true;        
//     };
// };
// for (let i = 0; i < incrementBtns.length; i++) {
//     incrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInputs[i].value;
//         if (currentValue < 5) {
//             quantityInputs[i].value = currentValue + 1;
//         decrementBtns[i].disabled = false;
//         } else {
//             incrementBtns[i].disabled = true;
//         }        
//     })
// };
// for (let i = 0; i < decrementBtns.length; i++) {
//     decrementBtns[i].addEventListener("click", function () {
//         let currentValue = +quantityInputs[i].value;
//         if (currentValue > 2 && currentValue <= 5) {
//             quantityInputs[i].value = currentValue - 1;
//             incrementBtns[i].disabled = false;
//         } else {
//             quantityInputs[i].value = currentValue - 1;
//             decrementBtns[i].disabled = true;            
//         }        
//     }) 
// };
// ============================================
// варіант вчителя:
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInputs = document.querySelectorAll(".products-quantity input")[0];
// let currentCount = +quantityInputs.value;

// function toggleButtonsState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// }
// toggleButtonsState(currentCount);

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +quantityInputs.value;
//   let nextCount = currentCount + 1;
//   quantityInputs.value = nextCount;
//   toggleButtonsState(nextCount);
// });
// decrementBtns.addEventListener("click", function () {
//   let currentCount = +quantityInputs.value;
//   let nextCount = currentCount - 1;
//   quantityInputs.value = nextCount;
//   toggleButtonsState(nextCount);
// });
// ====================================================
// можна дану функцію:
// function toggleButtonsState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// прописати через if...else:

// function toggleButtonsState(count) {
//     if (count <= 1) {
//     decrementBtns.disabled = true;
//     incrementBtns.disabled = false;
//     } else if (count >= 5) {
//     decrementBtns.disabled = false;
//     incrementBtns.disabled = true;
//     } else {
//     decrementBtns.disabled = false;
//     incrementBtns.disabled = false;
//     }
// };

// ====================================================

// варіант вчителя за допомогою функції-конструктора (працює лише для першої кнопки):
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let quantityInputs = document.querySelectorAll(".products-quantity input")[0];

// function Counter(incrementBtn, decrementBtn, inputField) {
//     this.domRefs = {
//         incrementBtn,
//         decrementBtn,
//         inputField,
//     };
//         this.toggleButtonsState = function () {
//         let count = this.domRefs.inputField.value;
//         this.domRefs.decrementBtn.disabled = count <= 1;
//         this.domRefs.incrementBtn.disabled = count >= 5;
//       };
//     this.toggleButtonsState();

//         this.increment = function () {        
//         let currentCount = +this.domRefs.inputField.value;
//         let nextCount = currentCount + 1;
//         this.domRefs.inputField.value = nextCount;
//         this.toggleButtonsState(nextCount);
//         };

//         this.decrement = function () {
//         let currentCount = +this.domRefs.inputField.value;
//         let nextCount = currentCount - 1;
//         this.domRefs.inputField.value = nextCount;
//         this.toggleButtonsState(nextCount);
//     };
//     this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
//     this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
// };
// let counter = new Counter(incrementBtns, decrementBtns, quantityInputs);
//     console.log(counter);      
// ==============================================
// варіант мій за допомогою функції-конструктора (працює для всіх кнопок):
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInputs = document.querySelectorAll(".products-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    this.toggleButtonsState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 5;
    };
    this.toggleButtonsState();

    this.increment = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonsState(nextCount);
    };

    this.decrement = function () {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonsState(nextCount);
    };
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
};
for (let i = 0; i < quantityInputs.length; i++) {
    let counter = new Counter(incrementBtns[i], decrementBtns[i], quantityInputs[i]);
    console.log(counter);
};
// =============================
// slick slider

$(".slider-block").slick({
    dots: true
});