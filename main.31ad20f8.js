parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".slider"),t=document.querySelector(".slider__slides"),c=document.querySelectorAll(".slider__indicator"),n=document.querySelectorAll(".materials__button"),s=document.querySelectorAll(".materials__slide"),i=document.querySelector(".message__form"),o=document.querySelector(".header__menu-opener"),a=document.querySelector(".menu"),r=document.querySelector(".menu__cross-wrapper"),l=document.querySelectorAll(".menu__link"),d=0,u=0,m=0,_=0,f=0,h=function(){a.classList.remove("menu--show"),document.body.classList.remove("page__body--with-menu")};e.addEventListener("touchstart",function(e){u=e.changedTouches[0].clientX,m=e.changedTouches[0].clientY}),e.addEventListener("touchend",function(e){if(_=e.changedTouches[0].clientX,f=e.changedTouches[0].clientY,Math.abs(u-_)>Math.abs(m-f)){if(u>_){if(4===d)return;d++}if(u<_){if(0===d)return;d--}t.style.transform="\n      translateX(-".concat(20*d,"%)\n    "),c.forEach(function(e,t){t===d?e.classList.add("slider__indicator--active"):e.classList.remove("slider__indicator--active")})}}),n.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),n.forEach(function(t){t===e?e.classList.toggle("materials__button--active"):t.classList.remove("materials__button--active")}),s.forEach(function(t){e.dataset.slideNumber===t.dataset.slideNumber?t.classList.toggle("materials__slide--show"):t.classList.remove("materials__slide--show")})})}),document.addEventListener("click",function(e){n.forEach(function(e){e.classList.remove("materials__button--active")}),s.forEach(function(e){e.classList.remove("materials__slide--show")})}),i.addEventListener("submit",function(e){e.preventDefault(),i.reset()}),o.addEventListener("click",function(){a.classList.add("menu--show"),document.body.classList.add("page__body--with-menu")}),r.addEventListener("click",h),l.forEach(function(e){e.addEventListener("click",h)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.31ad20f8.js.map