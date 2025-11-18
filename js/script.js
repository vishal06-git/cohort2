// this are the pillars of JS DOM
// selectionnn 
// // var h1  = document.querySelector('h1')
// console.log(h1);

//changing HTMl
// var h1  = document.querySelector('h1')
// h1.innerHTML = 'I am batmen'

//changing CSS
// var h1  = document.querySelector('h1')
// h1.style.color = 'red'

//Event listners
// var h1  = document.querySelector('h1')
// h1.addEventListener('dblclick' ,function(){
//     console.log('Hellooooo!!!');
// })

var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var h2 = document.querySelector('h2')
var a = 0;
inc.addEventListener('click', function(){
    a++
    h2.innerHTML = a
    
})
dec.addEventListener('click', function(){
    a--
    h2.innerHTML = a
    
})