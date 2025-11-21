var btn = document.querySelector('button')
var main = document.querySelector('main')


btn.addEventListener('click', function(){
    var div = document.createElement('div')

    var x = Math.random()*100
    var y = Math.random()*100
    var r = Math.random()*360
    var scl = Math.random()*2
    

    var c1 = Math.floor(Math.random()*226)
    var c2 = Math.floor(Math.random()*226)
    var c3 = Math.floor(Math.random()*226)

    

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.background = `rgb(${c1},${c2},${c3})`


    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.rotate = r + 'deg'
    div.style.scale = scl 

    

    main.appendChild(div)
    
})