let container = document.querySelector('.container')

let dogX = 0;

let dogY = 0;

const renderEl = () => {
   const patron = `<img src="/img/03.jpg" alt="patron" class="pespatron" 
   style="position:absolute;top:${dogX}px,left:${dogY}px">`

   container.innerHTML = patron
}



container.addEventListener('click', (ev) => {
   console.log(ev);
   if (ev.target.alt != 'patron') { return }

   let mouseX = dogX;
   let mouseY = dogY;

   let centerUp = mouseX + 200 / 2;
   let centerLeft = mouseY + 200 / 2;

   let rightUp = mouseX + 200;
   let leftDown = mouseY + 200;

   dogX = +50 + 'px';
   dogY = +40 + 'px';


   let Xtarget = ev.clientX;
   let Ytarget = ev.clientY;

   console.log('X', Xtarget, 'Y', Ytarget);

   if ((mouseX <= Xtarget) && (Xtarget <= centerUp) && (mouseY <= Ytarget) && (Ytarget <= centerLeft)) {
      console.log('Клік верхній лівий кут')
   }
   if ((centerUp <= Xtarget) && (Xtarget <= rightUp) && (mouseY <= Ytarget) && (Ytarget <= centerLeft)) {
      console.log('Клік на верхній правий кут')
   }
   if ((mouseX <= Xtarget) && (Xtarget <= centerUp) && (centerLeft <= Ytarget) && (Ytarget <= leftDown)) {
      console.log('Клік на нижній лівий кут')
   }
   if ((centerUp <= Xtarget) && (Xtarget <= rightUp) && (centerLeft <= Ytarget) && (Ytarget <= leftDown)) {
      console.log('Клік на нижній правий кут')
   }
})

renderEl()