(()=>{"use strict";function e(){let e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("div");t.classList.add("homepage"),e.classList.add("content-box");let n=document.createElement("p");n.textContent="Best pizza in the country";let a=document.createElement("p");a.textContent="Made with passion since 1609";let l=document.createElement("img");l.classList.add("chef-img"),l.src="img/ramsay.jpeg",l.alt="Chef";let d=document.createElement("p");return d.textContent="Order online or visit us!",t.appendChild(n),t.appendChild(a),t.appendChild(l),t.appendChild(d),e.appendChild(t),e}())}function t(e,t){let n=document.createElement("div");n.classList.add("pizza");let a=document.createElement("h1"),l=document.createElement("p"),d=document.createElement("img");return a.innerHTML=e,l.innerHTML=t,d.src=`img/${e.toLowerCase()}.png`,d.alt=`${e}`,n.appendChild(d),n.appendChild(a),n.appendChild(l),n}function n(e){console.log(e);let t=e.parentNode;Array.from(t.children).forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}function a(){let a=document.createElement("div"),l=document.createElement("h1");return l.classList.add("header-banner"),l.innerHTML="Mario's Pizzeria",a.classList.add("header"),a.appendChild(l),a.appendChild(function(){let a=document.createElement("nav");a.classList.add("nav-bar");let l=document.createElement("button");l.classList.add("home-btn","active"),l.innerHTML="Home",l.onclick=function(){n.call(this,l),e()};let d=document.createElement("button");d.classList.add("menu-btn"),d.innerHTML="Menu",d.onclick=function(){n.call(this,d),function(){let e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){let e=document.createElement("div"),n=document.createElement("div");return n.classList.add("content-box","menu-box"),e.classList.add("menu"),n.appendChild(e),e.appendChild(t("Salsiccia","Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil")),e.appendChild(t("Gamberi","Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil")),e.appendChild(t("Pepe","Tomato sauce, Mozarella, Chilli flakes, Olives, Basil")),e.appendChild(t("Disgustoso","Tomato sauce, Bacon, Pineapple, Olives, Basil")),e.appendChild(t("Colorato","Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil")),e.appendChild(t("Pomodoro","Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli")),e.appendChild(t("Crema","White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil")),e.appendChild(t("Carne","Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli")),n}())}()};let i=document.createElement("button");return i.classList.add("contact-btn"),i.innerHTML="Contact",i.onclick=function(){n.call(this,i),function(){let e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){let e=document.createElement("div"),t=document.createElement("div");e.classList.add("contact"),t.classList.add("content-box","contact-box");let n=document.createElement("p"),a=document.createElement("p"),l=document.createElement("img");return n.textContent="📞 123 456 7890",a.textContent="🏠 Hollywood Boulevard 42, Los Angeles, USA",l.src="img/restaurant-location.png",e.appendChild(n),e.appendChild(a),e.appendChild(l),t.appendChild(e),t}())}()},a.appendChild(l),a.appendChild(d),a.appendChild(i),a}()),a}!function(){let t=document.getElementById("content");t.appendChild(a()),t.appendChild(function(){let e=document.createElement("div");return e.classList.add("main"),e.id="main",e}()),t.appendChild(function(){let e=document.createElement("div"),t=document.createElement("p");t.innerHTML="Copyright &copy 2024 kevin5112 ",e.classList.add("footer"),e.appendChild(t);const n=document.createElement("a");n.href="https://github.com/kevin5112";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),n.appendChild(a),e.appendChild(n),e}()),e()}()})();