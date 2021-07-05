(()=>{"use strict";function e(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),o=document.querySelector(".popup-content");t.forEach((function(t){t.addEventListener("click",(function(){e.style.display="block",document.body.clientWidth>786&&(r.counter=r.start,a())}))})),n.addEventListener("click",(function(){e.style.display="none"})),e.addEventListener("click",(function(t){var n=t.target;(n=n.closest(".popup-content"))||(e.style.display="none")}));var r={counter:-100,start:-100,speed:70,end:0};function a(){r.counter++,o.style.transform="translateX(".concat(3*r.counter-12.5,"%)"),r.counter<r.end&&requestAnimationFrame(a)}}var t,n,o,r,a,c,u,l,i,d,m,s,f,v,g;e(),t=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots"),t.forEach((function(){var e=document.createElement("li");e.classList.add("dot"),n.appendChild(e)})),n.children[0].classList.add("dot-active"),setInterval((function(){!function(e){var t,n,o,r,a=document.querySelector("#timer-hours"),c=document.querySelector("#timer-minutes"),u=document.querySelector("#timer-seconds");function l(e){return 1===String(e).length?"0"+e:String(e)}t=(+new Date(e).getTime()-+(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),r={timeRemaining:t,hours:Math.floor(t/60/60),minutes:o,seconds:n},a.textContent=l(r.hours),c.textContent=l(r.minutes),u.textContent=l(r.seconds),r.timeRemaining<0&&(a.textContent="00",c.textContent="00",u.textContent="00")}("7 Jul 2021")}),1e3),function(){document.querySelector(".menu");var e=document.querySelector("menu");document.body.addEventListener("click",(function(t){var n=t.target;n.closest(".menu")||n.closest("menu")&&n.closest('[href^="#"]')?e.classList.toggle("active-menu"):n.closest("menu")||e.classList.remove("active-menu")}))}(),e(),o=document.querySelector(".service-header"),r=o.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab"),o.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&r.forEach((function(e,n){e===t&&function(e){for(var t=0;t<a.length;t++)e===t?(r[t].classList.add("active"),a[t].classList.remove("d-none")):(r[t].classList.remove("active"),a[t].classList.add("d-none"))}(n)}))})),function(){var e,t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot")),o=document.querySelector(".portfolio-content"),r=0;function a(e,t,n){e[t].classList.remove(n)}function c(e,t,n){e[t].classList.add(n)}function u(){a(t,r,"portfolio-item-active"),a(n,r,"dot-active"),++r>=t.length&&(r=0),c(t,r,"portfolio-item-active"),c(n,r,"dot-active")}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)}o.addEventListener("click",(function(e){e.preventDefault();var o=e.target;o.matches(".portfolio-btn, .dot")&&(a(t,r,"portfolio-item-active"),a(n,r,"dot-active"),o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&n.forEach((function(e,t){e===o&&(r=t)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),c(t,r,"portfolio-item-active"),c(n,r,"dot-active"))})),o.addEventListener("mouseover",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&clearInterval(e)})),o.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()})),l(1500)}(),function(){var e=document.querySelector("#command .row");function t(e){if(e.target.classList.contains("command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}}e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)}(),s=document.querySelector(".calc-block"),f=document.querySelector(".footer-form-input"),v=document.querySelector(".main-form"),g=document.querySelector("#form3"),document.querySelectorAll("input").forEach((function(e){e.setAttribute("required","required")})),g.addEventListener("input",(function(e){"text"===e.target.type&&(e.target.value=e.target.value.replace(/[^а-я ]/g,""))})),g.addEventListener("input",(function(e){"email"===e.target.type&&(e.target.value=e.target.value.replace(/[^a-zA-Z@_'~*.!-1234567890]/gi,""))})),g.addEventListener("input",(function(e){"tel"===e.target.type&&(e.target.value=e.target.value.replace(/[^[0-9+]/gi,""),e.target.value=e.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im,""))})),v.addEventListener("input",(function(e){"text"===e.target.type&&(e.target.value=e.target.value.replace(/[^а-я ]/g,""))})),v.addEventListener("input",(function(e){"email"===e.target.type&&(e.target.value=e.target.value.replace(/[^a-zA-Z@_'~*.!-1234567890]/gi,""))})),v.addEventListener("input",(function(e){"tel"===e.target.type&&(e.target.value=e.target.value.replace(/[^[0-9+]/gi,""),e.target.value=e.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im,""))})),s.addEventListener("input",(function(e){"text"===e.target.type&&(e.target.value=e.target.value.replace(/\s+/g,""),e.target.value=e.target.value.replace(/\D/g,""))})),f.addEventListener("input",(function(e){"user_name"===e.target.name&&(e.target.value=e.target.value.replace(/[^а-я ]/g,"")),"user_message"===e.target.name&&(e.target.value=e.target.value.replace(/[^а-яё ,.!:;\-0-9]/gi,""))})),f.addEventListener("input",(function(e){"email"===e.target.type&&(e.target.value=e.target.value.replace(/[^a-zA-Z@_'*.!-~1234567890]/gi,""))})),document.querySelectorAll("input[type=email]").forEach((function(e){e.addEventListener("keydown",(function(e){console.log(e)," "===e.key&&e.preventDefault()}))})),f.addEventListener("input",(function(e){"tel"===e.target.type&&(e.target.value=e.target.value.replace(/[^[0-9+]/gi,""),e.target.value=e.target.value.replace(/^[\+]?[(]?[0-9]{4}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/im,""))})),c=document.getElementById("form1-name"),u=document.getElementById("form1-phone"),l=document.getElementById("form2-name"),i=document.getElementById("form2-phone"),d=document.getElementById("form2-message"),m=document.getElementById("form3-name"),[l,i,d,c,u,document.getElementById("form3-phone"),m].forEach((function(e){e.addEventListener("blur",(function(e){var t;e.target.value=e.target.value.trim(),"text"===e.target.type&&(t=e.target.value.split(/\s+/).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),e.target.value=t),e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/\s+/g," "),e.target.value=e.target.value.replace(/-+/g,"-")}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total");function u(){var t=0,u=1,l=1,i=n.options[n.selectedIndex].value,d=+o.value;a.value>1&&(u=(a.value-1)/10),r.value&&r.value<5?l*=2:r.value&&r.value<10&&(l*=1.5),i&&d&&(t=e*i*d*u*l),c.textContent=t}t.addEventListener("change",(function(e){var t=e.target;t.matches(".calc-type")&&(o.value="",r.value="",a.value=""),(t.matches(".calc-type")||t.matches(".calc-square")||t.matches(".calc-day")||t.matches(".calc-count"))&&u()}))}(100),function(){function e(){var e=document.getElementById("form1-name"),t=document.getElementById("form1-email"),n=document.getElementById("form1-phone"),o=document.getElementById("form2-name"),r=document.getElementById("form2-email"),a=document.getElementById("form2-phone"),c=document.getElementById("form2-message"),u=document.getElementById("form3-name");[o,a,c,e,n,document.getElementById("form3-phone"),u,t,document.getElementById("form3-email"),r].forEach((function(e){e.value=""}))}var t,n;t=document.getElementById("form1"),(n=document.createElement("div")).setAttribute("style","font-size: 2rem; color: #ffffff;"),t.addEventListener("submit",(function(o){o.preventDefault(),t.appendChild(n),n.textContent="Загрузка...";var r=new FormData(t),a={};r.forEach((function(e,t){a[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(t){if(200!==t.status)throw new Error("status network not 200");n.textContent="Спасибо! Мы скоро с вами свяжемся!",e()})).catch((function(e){n.textContent="Что-то пошло не так...",console.error(e)}))})),function(){var t=document.getElementById("form2"),n=document.createElement("div");n.setAttribute("style","font-size: 2rem; color: #ffffff;"),t.addEventListener("submit",(function(o){o.preventDefault(),t.appendChild(n),n.textContent="Загрузка...";var r=new FormData(t),a={};r.forEach((function(e,t){a[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(t){if(200!==t.status)throw new Error("status network not 200");e(),n.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){n.textContent="Что-то пошло не так...",console.error(e)}))}))}(),function(){var t=document.getElementById("form3"),n=document.createElement("div");n.setAttribute("style","font-size: 2rem; color: #ffffff;"),t.addEventListener("submit",(function(o){o.preventDefault(),t.appendChild(n),n.textContent="Загрузка...";var r=new FormData(t),a={};r.forEach((function(e,t){a[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(t){if(200!==t.status)throw setTimeout((function(){document.querySelector(".popup").style.display="none"}),3e3),new Error("status network not 200");setTimeout((function(){document.querySelector(".popup").style.display="none"}),3e3),e(),n.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(e){n.textContent="Что-то пошло не так...",console.error(e)}))}))}()}()})();