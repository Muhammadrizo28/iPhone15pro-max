let storages = document.querySelector('.storage_menu')

let models = document.querySelector('.box_menu')

let circle_colors = document.querySelector('.colors_menu')

let box = document.querySelector('.box')

let colors = [

    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993',

    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609',

    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180',

    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018'

]




let storage_elements = storages.children 

let arr = []


for (let i = 0; i < storage_elements.length; i++){
    let elem = storage_elements[i]
    
    elem.onclick = () => {
        
        for (let item of arr) {
            storages.lastElementChild.style.border = 'none'
            item.style.border = '1px solid black'
         
        }
        arr.push(elem)
        elem.style.border = '2px solid blue' 
        storages.lastElementChild.style.border = 'none'
        
        
        
    }
}



let arr2 = []

let model_elements = models.children

for (let i = 0; i < model_elements.length; i++){
    

    let elem = model_elements[i]

    models.lastElementChild.style.border = 'none'


    elem.onclick = () => {

        
        
        for(let item of arr2) {
            item.style.border = '1px solid black'
            
        }
        arr2.push(elem)
        elem.style.border = '2px solid blue'
        models.lastElementChild.style.border = 'none'

        
    }

    

    
}

let childs_colors = circle_colors.children

let arr3 = []

for (let i = 0; i < childs_colors.length; i++){

    childs_colors[i].onclick = () => {

        box.style.backgroundImage = 'url('+ colors[i] +')'

        console.log(i);

    }
    
    
    
}



/* for(let item of childs_colors) {
    item.onclick = () => {
        for(let obj of arr3) {
            
            obj.style.border = 'none'
        }
        arr3.pop()
        arr3.push(item)
        item.style.border = '2px solid blue'
    }
}
 */

