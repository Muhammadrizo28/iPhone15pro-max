/* let start = prompt('age')



let check = start.charAt(1)
let check2 = start.charAt(2)
let check3 = start.charAt(3)



if (!isNaN(start)) {
    if (check == '.') {

        alert('error')
        location.reload()

    }
    else if (check2 == '.') {

        alert('error')
        location.reload()

    }
    else if (start > 999) {
        alert('error')
        location.reload()
    }
    else {
        alert ('corect')
        location.reload()
    }
    


}
else {
    alert('error')
    location.reload()
}

 */


let start = prompt('Name')

let first = start.slice(0, 1)

first = first.toUpperCase()

let second = start.slice(1)

let both = first.concat(second)


console.log(both);

if (start == both & start.length <= 12) {
    alert('Correct')
    location.reload()
}
else {
    alert('error')
    location.reload()
}
