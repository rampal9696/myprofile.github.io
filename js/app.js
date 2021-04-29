
$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots'
    })
})
 let bars=document.querySelector('.fa-bars');
 let times=document.querySelector('.fa-times');
 let mobileNav=document.querySelector('.mobile-nav');
 var a=document.querySelector('.ab');

 bars.addEventListener('click',function(){
     mobileNav.classList.add('open')
 })

 times.addEventListener('click',function(){
  mobileNav.classList.remove('open')
 
})
a.addEventListener('click',function(){
  mobileNav.classList.remove('open')
})