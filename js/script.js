const hamburger=document.querySelector(".header .navbar .navlist .hamburger"),mobile_menu=document.querySelector(".header .navbar .navlist ul"),menu_item=document.querySelectorAll(".header .navbar .navlist ul li a"),header=document.querySelector(".header .container");hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("active"),mobile_menu.classList.toggle("active")})),document.body.addEventListener("scroll",(()=>{document.body.scrollTop>750?(document.getElementById("header").style.backgroundColor="#2d0505",document.getElementsByClassName("header")[0].style.minHeight="5vh",document.getElementById("headerLogo").style.height="4vh"):(document.getElementById("header").style.backgroundColor="transparent",document.getElementsByClassName("header")[0].style.minHeight="10vh",document.getElementById("headerLogo").style.height="8vh")})),menu_item.forEach((e=>{e.addEventListener("click",(()=>{hamburger.classList.toggle("active"),mobile_menu.classList.toggle("active")}))}));