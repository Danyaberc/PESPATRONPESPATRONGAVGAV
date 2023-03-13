let container = document.querySelector('.container')

let button = document.querySelector('.button')

let pes = []

button.addEventListener('click', () => {
   render()
})

const render = () => {
   const html = `<div class ="contdog">
                  <div class="containerblock12">
                     <div class = "block1">
                        <div class="block1-1"></div>
                        <div class="block1-2"></div>
                     </div>
                     <div class ="block2">
                        <div class="block2-1"></div>
                        <div class="block2-2"></div>
                     </div>
                  </div>
               </div>`

   container.innerHTML = html

   let containerblock12 = document.querySelector('.containerblock12')

   let contblock1 = document.querySelector('.block1-1')

   contblock1.addEventListener('click', (ev) => {
      x = ev.pageX - 900 + "px"
      y = ev.pageY + 100 + "px"
      controloneone()

   })

   const controloneone = () => {
      containerblock12.style.top = x;
      containerblock12.style.left = y;
      return
   }


   let contblock2 = document.querySelector('.block1-2')

   contblock2.addEventListener('click', (ev) => {
      x = ev.pageX - 1500 + "px"
      y = ev.pageY - 100 + "px"
      controlonetwo()

   })

   const controlonetwo = () => {
      containerblock12.style.top = x;
      containerblock12.style.left = y;
      return
   }
}



//

// block.addEventListener('mouseenter', () => {
//    x = Math.floor(Math.random() * 1000) + "px"
//    y = Math.floor(Math.random() * 700) + "px"
//    renderEl();
// })

// const renderEl = () => {
//    block.style.left = x;
//    block.style.top = y;
//    return
// }
