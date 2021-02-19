'use strict';


let seeMenu = document.getElementById('seeMenu');
let removeMenu = document.getElementById('removeMenu');
let bodyWrapper = document.getElementById('bodyWrapper');
let mobileMenu = document.getElementById('mobileMenu');

seeMenu.addEventListener('click', function(){
    // ce face acest set de paranteze?
    // daca ai vrut ternary, nu asta este sintaxa
    // just fyi nu ai nevoie de if aici, putem sa dam click ori pe menu item ori pe x, la fel si mai jos
    (mobileMenu.classList.contains('hidden'))
     mobileMenu.classList.remove('hidden');
     bodyWrapper.classList.add('hidden');
});

removeMenu.addEventListener('click', function(){
    // din nou, nu inteleg foarte bine ce se intampla aici
        !mobileMenu.classList.contains('hidden')
         mobileMenu.classList.add('hidden');
         bodyWrapper.classList.remove('hidden');
});
