document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
   document.querySelector("header").classList.toggle("open")
  })
})


document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.add("search__form_show")
  })

  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("burger").classList.add("burger__display")
  })

  document.getElementById("search-form-close").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.remove("search__form_show")
  })

  document.getElementById("search-form-close").addEventListener("click", (e) => {
    document.getElementById("burger").classList.remove("burger__display")
  })

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault()
  })
})

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');
  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab1").addEventListener("click", function() {
     document.getElementById("btn2").classList.remove("tabs-color")
     document.getElementById("btn3").classList.remove("tabs-color")
     document.getElementById("btn4").classList.remove("tabs-color")
     document.getElementById("btn1").classList.toggle("tabs-color")
    })
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab2").addEventListener("click", function() {
     document.getElementById("btn1").classList.remove("tabs-color")
     document.getElementById("btn3").classList.remove("tabs-color")
     document.getElementById("btn4").classList.remove("tabs-color")
     document.getElementById("btn2").classList.toggle("tabs-color")
    })
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab3").addEventListener("click", function() {
     document.getElementById("btn1").classList.remove("tabs-color")
     document.getElementById("btn2").classList.remove("tabs-color")
     document.getElementById("btn4").classList.remove("tabs-color")
     document.getElementById("btn3").classList.toggle("tabs-color")
    })
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab4").addEventListener("click", function() {
     document.getElementById("btn1").classList.remove("tabs-color")
     document.getElementById("btn2").classList.remove("tabs-color")
     document.getElementById("btn3").classList.remove("tabs-color")
     document.getElementById("btn4").classList.toggle("tabs-color")
    })
  })


