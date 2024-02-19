/* let name = prompt('name')

let second = prompt('secondname')


alert(name + second + '@outlook.com') */

start()

function start() {

    let num = Math.random().toFixed(2)

    num = parseFloat(num) * 100


    if (num > 20) {
    
        start()
    }
    else {

        let arr = 'qwertyuiopasdfghjklzxcvbnm'
        let arr2 = 'mnbvcxzlkjhgfdsapoiuytrewq'

        let choose = arr.slice(num, num + 2).toLocaleUpperCase()
        let choose2 = arr2.slice(num, num + 2).toLocaleUpperCase()

        let num2 = num * 10 + 33

        console.log(choose + num + choose2 + num2);

    }
    
}













