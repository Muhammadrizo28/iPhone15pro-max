// js




arr = []

sign = []

arr2 = []

arr3 = []


let input = document.getElementById('input_num')


















function click0() {


  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(0, '.')
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr.length > 0 && arr2.length > 0 && sign[0] !== null && sign[1] !== null && arr3.length > 0) {
      arr3.push(0)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else if (arr.length > 0 && arr2.length > 0 && arr3.length == 0 && sign[0] !== null && sign[1] !== null) {

      arr3.push(0, '.')

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')

    }
    else {

      arr2.push(0)

      input.innerText = arr.join('') + sign[0] + arr2.join('')



    }




  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(input.innerText)

      input.innerText = input.innerText + 0
    }
    else if (input.innerText.length == 0) {
      arr.push(0, '.')

      input.innerText = arr.join('')
    }
    else {
      arr.push(0)

      input.innerText = arr.join('')
    }




  }



  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }




}

function click1() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(1)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(1)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')




    }
    else {
      arr2.push(1)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(1)

      input.innerText = 1

    }
    else {
      arr.push(1)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }

}



function click2() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {

    console.log(arr2);

    if (arr2.length == 0) {
      arr2.push(2)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(2)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(2)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(2)

      input.innerText = 2

    }
    else {
      arr.push(2)

      input.innerText = arr.join('')



    }

  }



  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }






}



function click3() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(3)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(3)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(3)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(3)

      input.innerText = 3

    }
    else {
      arr.push(3)

      input.innerText = arr.join('')



    }

  }



  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }






}



function click4() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(4)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(4)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(4)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(4)

      input.innerText = 4

    }
    else {
      arr.push(4)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }






}



function click5() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(5)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(5)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(5)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(5)

      input.innerText = 5

    }
    else {
      arr.push(5)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }




}



function click6() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(6)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(6)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(6)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(6)

      input.innerText = 6

    }
    else {
      arr.push(6)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }


}



function click7() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(7)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(7)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(7)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(7)

      input.innerText = 7

    }
    else {
      arr.push(7)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }


}



function click8() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(8)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(8)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(8)

      input.innerText = arr.join('') + sign[0] + arr2.join('')

    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(8)

      input.innerText = 8

    }
    else {
      arr.push(8)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }


}



function click9() {

  if (sign.includes('+') || sign.includes('-') || sign.includes('*') || sign.includes('/') || sign.includes('%')) {


    if (arr2.length == 0) {
      arr2.push(9)
      input.innerText = arr.join('') + sign + arr2.join('')
    }
    else if (arr2.length > 0 && sign.length == 2) {
      arr3.push(9)

      input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')


    }
    else {
      arr2.push(9)

      input.innerText = arr.join('') + sign[0] + arr2.join('')
    }



  }
  else {

    if (arr.length == 0 && !input.innerText.includes('.')) {
      arr.push(9)

      input.innerText = 9

    }
    else {
      arr.push(9)

      input.innerText = arr.join('')



    }

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }

}



function point() {



  if (arr.length == 0 && input.innerText.length > 0 && input.innerText.length < 2 && input.innerText.includes(0)) {
    arr.push(0, '.')

    input.innerText = arr.join('')


  }
  else if (arr.length == 1 && input.innerText.length > 1 && input.innerText.length < 3 && input.innerText.includes(0, 0)) {
    arr.push(0, '.')

    input.innerText = arr.join('')

  }
  else if (arr.length == 2 && input.innerText.length > 2 && input.innerText.length < 4 && input.innerText.includes(0, 0, 0)) {
    arr.push(0, '.')


    input.innerText = arr.join('')


  }
  else if (arr.length == 3 && input.innerText.length > 3 && input.innerText.length < 5 && input.innerText.includes(0, 0, 0, 0)) {
    arr.push(0, '.')

    input.innerText = arr.join('')
  }
  else if (arr.length == 4 && input.innerText.length > 4 && input.innerText.length < 6 && input.innerText.includes(0, 0, 0, 0, 0)) {
    arr.push(0, '.')

    input.innerText = arr.join('')
  }
  else if (arr.length == 1 && input.innerText.length == 1) {
    arr.push('.')

    input.innerText = arr.join('')
  }
  else if (arr.length == 2 && input.innerText.length == 2) {
    arr.push('.')

    input.innerText = arr.join('')
  }
  else if (arr.length == 3 && input.innerText.length == 3) {
    arr.push('.')

    input.innerText = arr.join('')
  }
  else if (arr2.length == 1 && sign[1] == null) {
    arr2.push('.')


    input.innerText = arr.join('') + sign.join('') + arr2.join('')
  }
  else if (arr2.length == 2 && sign[1] == null) {
    arr2.push('.')


    input.innerText = arr.join('') + sign.join('') + arr2.join('')
  }
  else if (arr2.length == 3 && sign[1] == null) {
    arr2.push('.')


    input.innerText = arr.join('') + sign.join('') + arr2.join('')
  }
  else if (input.innerText == 0) {
    arr.push(0, '.')

    input.innerText = arr.join('')
  }
  else if (input.innerText.length == 0) {

    arr.push(0, '.')

    input.innerText = arr.join('')


  }
  else if (arr.length > 0 && arr2.length > 0 && sign[0] !== null && sign[1] !== null && arr3.length == 0) {

    arr3.push(0, '.')

    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')

  }
  else if (arr.length > 0 && arr2.length > 0 && sign[0] !== null && sign[1] !== null && arr3.length > 0) {

    arr3.push('.')

    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')

  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }








}



function click_plus() {

  if (sign.length > 0 && arr2 !== null) {

    sign.push('+')
    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1]



  }
  else {
    console.log(arr);

    sign.push('+')

    input.innerText = arr.join('') + sign[0]
  }

  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }
}


function click_minus() {

  if (sign.length > 0 && arr2 !== null) {

    sign.push('-')
    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1]



  }
  else {
    sign.push('-')

    input.innerText = arr.join('') + sign[0]


  }

  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }





}


function multiplate() {

  if (sign.length > 0 && arr2 !== null) {

    sign.push('*')
    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1]

  }
  else {
    sign.push('*')

    input.innerText = arr.join('') + sign[0]
  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }



}


function devide() {

  if (sign.length > 0 && arr2 !== null) {

    sign.push('/')
    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1]



  }
  else {
    sign.push('/')

    input.innerText = arr.join('') + sign[0]


  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }



}




function procen() {


  if (sign.length > 0 && arr2 !== null) {

    sign.push('%')
    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1]



  }
  else {
    sign.push('%')

    input.innerText = arr.join('') + sign[0]


  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }



}


function equal() {

  if (arr !== null && sign !== null && arr2 !== null) {
    if (sign[0] == '+' && sign[1] == null) {

      console.log(arr);
      console.log(arr2);
      let result = +arr.join('') + +arr2.join('')

      console.log(result);
      input.innerText = result



      console.log(arr.join(''), arr2.join(''));
    }
    else if (sign[0] == '-' && sign[1] == null) {
      let result = parseFloat(arr.join('')) - parseFloat(arr2.join(''))
      input.innerText = result



      console.log(arr.join(''), arr2.join(''));
    }
    else if (sign[0] == '*' && sign[1] == null) {
      let result = parseFloat(arr.join('')) * parseFloat(arr2.join(''))
      input.innerText = result



      console.log(arr.join(''), arr2.join(''));
    }
    else if (sign[0] == '/' && sign[1] == null) {
      let result = parseFloat(arr.join('')) / parseFloat(arr2.join(''))
      input.innerText = result


      console.log(arr.join(''), arr2.join(''));
    }
    else if (arr3.length > 0 && sign[0] == '+' && sign[1] == '+') {

      let result = parseFloat(arr.join('')) + parseFloat(arr2.join('')) + parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '-' && sign[1] == '-') {

      let result = parseFloat(arr.join('')) - parseFloat(arr2.join('')) - parseFloat(arr3.join(''))

      input.innerText = result


      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '*' && sign[1] == '*') {

      let result = parseFloat(arr.join('')) * parseFloat(arr2.join('')) * parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '/' && sign[1] == '/') {

      let result = parseFloat(arr.join('')) / parseFloat(arr2.join('')) / parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '+' && sign[1] == '-') {

      let result = parseFloat(arr.join('')) + parseFloat(arr2.join('')) - parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '-' && sign[1] == '+') {

      let result = parseFloat(arr.join('')) - parseFloat(arr2.join('')) + parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '*' && sign[1] == '/') {

      let result = parseFloat(arr.join('')) * parseFloat(arr2.join('')) / parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '/' && sign[1] == '*') {

      let result = parseFloat(arr.join('')) / parseFloat(arr2.join('')) * parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '/' && sign[1] == '+') {

      let result = parseFloat(arr.join('')) / parseFloat(arr2.join('')) + parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '/' && sign[1] == '-') {

      let result = parseFloat(arr.join('')) / parseFloat(arr2.join('')) - parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '*' && sign[1] == '+') {

      let result = parseFloat(arr.join('')) * parseFloat(arr2.join('')) + parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr3.length > 0 && sign[0] == '+' && sign[1] == '*') {

      let result = parseFloat(arr.join('')) + parseFloat(arr2.join('')) * parseFloat(arr3.join(''))

      input.innerText = result

      console.log(arr.join(''), arr2.join(''), arr3.join(''));

    }
    else if (arr.length !== 0 && sign[0] == '%' && arr2.length !== 0 && sign[1] == null && arr3.length == 0) {

      let result = parseFloat(arr.join('')) % parseFloat(arr2.join(''))


      input.innerText = result

    }



  }

  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }

}



function deletef() {



  if (arr.length !== 0 && sign[0] == null && arr2.length == 0) {
    arr.pop()
    input.innerText = arr.join('')
  }
  else if (arr.length !== 0 && sign[0] !== null && arr2.length == 0) {
    sign.pop()

    input.innerText = arr.join('')
  }
  else if (arr.length !== 0 && sign[0] !== null && arr2.length !== 0 && sign[1] == null) {

    arr2.pop()

    input.innerText = arr.join('') + sign[0] + arr2.join('')

  }
  else if (arr.length !== 0 && sign[0] !== null && arr2.length !== 0 && sign[1] !== null && arr3.length == 0) {

    sign.pop()

    input.innerText = arr.join('') + sign[0] + arr2.join('')

  }
  else if (arr.length !== 0 && sign[0] !== null && arr2.length !== 0 && sign[1] !== null && arr3 !== null) {

    arr3.pop()

    input.innerText = arr.join('') + sign[0] + arr2.join('') + sign[1] + arr3.join('')

  }
  else {

    input.innerText = 0
  }


  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }
}


function cleara() {

  arr = []

  sign = []

  arr2 = []

  arr3 = []

  input.innerText = 0



  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }




}

if (input.innerText == null) {

  input.innerText = 0




  if (input.innerText.length >= 7 && input.innerText.length <= 12) {    //size of numbers

    input.style.fontSize = '50px';



  }
  else if (input.innerText.length >= 12) {

    input.style.fontSize = '30px';

  }
  else if (input.innerText.length < 7) {
    input.style.fontSize = '80px'
  }

}




























