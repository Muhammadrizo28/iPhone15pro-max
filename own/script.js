let box = document.querySelector('.box')

let btn = document.querySelector('.btn')

let btn2 = document.querySelector('.btn2')

let sheet = document.querySelector('.sheet')


btn.onclick = () => {

    box.style.display = 'block'
    btn2.style.display = 'block'
    btn.style.display = 'none'
    sheet.style.display = 'block'

}


btn2.onclick = () => {

    box.style.display = 'none'
    btn.style.display = 'block'
    btn2.style.display = 'none'
    sheet.display = 'none'
}


sheet.onclick = () => {

    box.style.display = 'none'
    btn.style.display = 'block'
    btn2.style.display = 'none'
    sheet.style.display = 'none'
}



