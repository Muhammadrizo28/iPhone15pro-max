/* let cars = [
    {
      name: 'BMW',
      color: 'white',
      model: 'M4',
      price: 80000,
      year: 2020
    },
    {
      name: 'Gentra',
      color: 'black',
      model: '2',
      price: 15000,
      year: 2022
    },
    {
      name: 'Kia',
      color: 'white',
      model: 'K5',
      price: 42000,
      year: 2023
    },
    {
      name: 'Matiz',
      color: 'red',
      model: 'best',
      price: '6000',
      year: 2011
    },
    {
      name: 'Malibu',
      color: 'gray',
      model: "2",
      price: 37000
    },
    {
      name: 'Nexia',
      color: 'blue',
      model: "3",
      price: 12000
    }
  ]



  let cheap = cars.filter(elem => elem.price < 35000);
  let cheapPrices = cheap.map(elem => elem.price);
  
  console.log(cheapPrices);
 */




  let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']

  let ask = prompt('Index')

  if (ask <= arr.length) {
    arr.splice(ask, 1)
    alert(arr)
  }
  else {
    alert('no such element')
  }





  


