(()=>{"use strict";var e={408:(e,t,o)=>{!function(){var e=document.querySelector(".nav");function t(){e.classList.toggle("show")}document.querySelector(".nav__control--open").addEventListener("click",t),document.querySelector(".nav__control--close").addEventListener("click",t)}();const r=JSON.parse('[{"slideTitle":"Discover innovative ways to decorate","slideText":"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},{"slideTitle":"We are available all across the globe","slideText":"With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today."},{"slideTitle":"Manufactured with the best materials","slideText":"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}]');var n=o(650),s=o(875),a=o(253),i=o(173),c=o(946),d=o(399);!function(){var e=document.querySelector(".slide__image"),t=document.querySelector(".slide__title"),o=document.querySelector(".slide__text"),u=r,l=[n,s,a],p=[i,c,d],f=0;function y(){window.matchMedia("(min-width: 576px)").matches?e.style.backgroundImage="url(".concat(p[f],")"):e.style.backgroundImage="url(".concat(l[f],")"),t.innerHTML=u[f].slideTitle,o.innerHTML=u[f].slideText}function m(){(f-=1)<0&&(f=u.length-1),y()}function h(){(f+=1)>u.length-1&&(f=0),y()}document.querySelector(".button--prev").addEventListener("click",m),document.querySelector(".button--next").addEventListener("click",h),document.addEventListener("keydown",(function(e){37===e.keyCode?m():39===e.keyCode&&h()}))}()},173:(e,t,o)=>{e.exports=o.p+"assets/images/91901d0d47ea68db9434.jpg"},946:(e,t,o)=>{e.exports=o.p+"assets/images/9d35405672f4fca67945.jpg"},399:(e,t,o)=>{e.exports=o.p+"assets/images/05fd679aa0d31e01c176.jpg"},650:(e,t,o)=>{e.exports=o.p+"assets/images/5de3d1472db703fb2f8a.jpg"},875:(e,t,o)=>{e.exports=o.p+"assets/images/51db290a00388a5a0bea.jpg"},253:(e,t,o)=>{e.exports=o.p+"assets/images/601d0f37f7ff5e62008c.jpg"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.p="",o(408)})();