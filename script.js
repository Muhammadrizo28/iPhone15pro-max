let name = 'Alex'

let account = 7777

let money = 10000

let ask2 = prompt('Account ?')

if (ask2 == account) {
    let ask3 = prompt('how much ?')

    if (ask3 <= money) {
        money -= ask3
        alert ('you got : ' + ask3 +'\nBalance : ' + money)
    }
    else {
        alert('error')
    }
}
else {
    alert('not found')
}