const secOl = document.querySelector('.secOl');
const secOlid = document.querySelector('#secOl');

const menuIcon = document.querySelector('.menu-icon');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

menuIcon.addEventListener('click', () => {
    let get = secOl.getAttribute('class');

    console.log(get);
    if(get === 'secOl') {
        secOl.classList.add('sidebar');
       //secOlid.classList.add('sidebar');
        
        
        one.classList.add('oneiconOpen');
        two.classList.add('twoiconOpen');
        three.classList.add('threeiconOpen');
        one.classList.remove('oneiconClose');
        two.classList.remove('twoiconClose');
        three.classList.remove('threeiconClose');
    }
    else {
        secOl.classList.remove('sidebar');
        setTimeout(() => {
            menuIcon.classList.remove('icon-move'); 
        },200)
        one.classList.remove('oneiconOpen');
        two.classList.remove('twoiconOpen');
        three.classList.remove('threeiconOpen');
        one.classList.add('oneiconClose');
        two.classList.add('twoiconClose');
        three.classList.add('threeiconClose');
    }
  
});