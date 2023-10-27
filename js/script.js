document.addEventListener("click", function (event) {
	if (event.target.closest(".header__burger")) {
	  document.querySelector(".header__menu-mobile").classList.toggle("header__menu-mobile-active");
	  document.querySelector(".header__burger").classList.toggle("active");
	  $("body").toggleClass("lock");
	}
	if (event.target.closest(".header__menu-link")) {
	  document.querySelector(".header__menu-mobile").classList.remove("header__menu-mobile-active");
	  document.querySelector(".header__burger").classList.remove("active");
	  document.querySelector("body").classList.remove("lock");
	}
 })

 //Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
       thisArg = thisArg || window;
       for (var i = 0; i < this.length; i++) {
           callback.call(thisArg, this[i], i, this);
       }
   };
}

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {

   const btn = dropDownWrapper.querySelector('.dropdown__button')
   const list = dropDownWrapper.querySelector('.dropdown__list')
   const item = list.querySelectorAll('.dropdown__list-item')
   const inputHidden = dropDownWrapper.querySelector('.dropdown__input-hidden')


   btn.addEventListener('click', function(e) {
      e.preventDefault()
      list.classList.toggle('dropdown__list--visible')
   })
   
   item.forEach(function(listItem) {
      listItem.addEventListener('click', function(e) {
         e.stopPropagation()
         btn.innerText = this.innerText
         btn.style.color = 'white'
         inputHidden.value = this.dataset.value
         list.classList.remove('dropdown__list--visible')
      })
   })
   
   //клик снаружи = закрыть дропдаун
   document.addEventListener('click', function(e) {
      if (e.target !== btn) {
         list.classList.remove('dropdown__list--visible')
      }
   })
   //клик escape = закрыть дропдаун
   document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
         list.classList.remove('dropdown__list--visible')
      }
   })
   
}) 