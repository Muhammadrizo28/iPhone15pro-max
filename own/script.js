let storages = document.querySelector('.storage_menu')

let models = document.querySelector('.box_menu')

let circle_colors = document.querySelector('.colors_menu')

let box = document.querySelector('.box')

let cost_txt = document.querySelector('.cost')

let inner_box_iphone = document.querySelector('.under_box')




let right_bottom = document.querySelector('.btn_right')
let left_bottom = document.querySelector('.btn_left')


let prices_model_arr = [

    999,
    1199

]

let prices_storage_arr = [

    999,
    1099,
    1299,
    1499

]


let price_model = 0

let price_storage = 0

let colors = {

    titanium : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846362456', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363675', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636437'],

    blue : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360208', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011635011', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636681'],

    white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846365217', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367022', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636748'],

    black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357050', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011634662', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636618']

}




let storage_elements = storages.children 

let arr = []


for (let i = 0; i < storage_elements.length; i++){
    let elem = storage_elements[i]
    
    elem.onclick = () => {

        price_storage = 0
        price_storage = prices_storage_arr[i]   

        
        
        for (let item of arr) {
            storages.lastElementChild.style.border = 'none'
            item.style.border = '1px solid black'
         
        }
        arr.push(elem)
        elem.style.border = '2px solid blue' 
        storages.lastElementChild.style.border = 'none'
        
        
        cost_txt.classList.remove('cost_anime')

        setTimeout (function() {

            cost_txt.classList.add('cost_anime')

        }, 200)





        cost_txt.innerHTML = price_model + price_storage + '$'

        
    }
}



let arr2 = []

let model_elements = models.children

for (let i = 0; i < model_elements.length; i++){
    

    let elem = model_elements[i]

    models.lastElementChild.style.border = 'none'

    elem.onclick = () => {

        price_model = 0
        price_model = prices_model_arr[i]

        if(i == 0){
            inner_box_iphone.innerHTML = 'iPhone 15 pro'
        }
        else {
            inner_box_iphone.innerHTML = 'iPhone 15 pro Max'
            inner_box_iphone.style.left = '565px'
        }

       

        for(let item of arr2) {
            item.style.border = '1px solid black'   
            
        }
        arr2.push(elem)
        elem.style.border = '2px solid blue'
        models.lastElementChild.style.border = 'none' 

        cost_txt.classList.remove('cost_anime')

        setTimeout (function() {

            cost_txt.classList.add('cost_anime')

        }, 200)

        cost_txt.innerHTML = price_model + price_storage + '$'

    }
    
}

let childs_colors = circle_colors.children

let arr3 = []



for(let item of childs_colors) {

    item.onclick = () => {

        for(let obj of arr3) {
            
            obj.style.border = 'none'
        }
        arr3.pop()
        arr3.push(item)
        item.style.border = '2px solid blue'

        right_bottom.style.opacity = '0.7'
        right_bottom.style.cursor = 'pointer'
        left_bottom.style.opacity = '0.7'
        left_bottom.style.cursor = 'pointer'

    }
   
    
}



let n = 0


function buttons(i) {


    right_bottom.onclick = () => {
      
    
        if (n == colors.black.length - 1) {
            n = 0
        }
    
        n = n  + 1
    

        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'
    
    
    }
    
    
    left_bottom.onclick = () => {
       
    
        if(n == 0) {
            n = 3
        }
        else {
    
            n = n - 1
    
        }
    

        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'
    
    
    }


    
}



for(let i = 0; i < childs_colors.length; i++){

    
    childs_colors[i].addEventListener('click', function() {

        
        

        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'

        buttons(i)

        
    })

    childs_colors[i].addEventListener('mouseover', function() {

        
        let txt_change_color = document.querySelector('.change_color')
        
        
        let color = childs_colors[i].id.charAt().toUpperCase()

        let color2 = childs_colors[i].id.slice(1)

        txt_change_color.innerHTML = '-' + ' ' + color + color2 + ' ' +'Titanium'

        if (i == 0) {
            txt_change_color.innerHTML = '- Natural Titanium'
        }
    })
}












