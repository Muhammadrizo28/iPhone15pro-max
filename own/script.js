let txt = document.querySelector('.txt')
let txt2 = document.querySelector('.txt2')
let txt3 = document.querySelector('.txt3')

let letter = 'qwertyuiopasdfghjklzxcvbnm'
letter = letter.toLocaleUpperCase()

let arr = []

number()

function number() {

    
    let num = Math.random().toFixed(2)
    num = parseFloat(num) * 100

    if (num < 21 && arr.length < 4) {

        let word = letter.slice(num , num + 3) + num + letter.charAt(num) + (num + 9)
        arr.push(word)
        number()
    }
    else if (num > 20 && arr.length < 4){
        number()

    }
    
}

txt.innerHTML = arr[0]
txt2.innerHTML = arr[1]
txt3.innerHTML = arr[2]












