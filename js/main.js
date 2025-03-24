'use.strict';

const arrowLeft = document.querySelector('.arrow-left');
arrowLeft.hidden =true;
const arrowRRight = document.querySelector('.arrow-right');
const pics = document.querySelectorAll('.slider-pic');
console.dir(pics);
const circleOutput = document.querySelector('.circles-switch');
let currentPicIndex = 0; // current index showed pic
const arrayCircles = [];  // array for all created circles

function createCircle() {
    const div = document.createElement('div');
    div.className = 'circle';
    circleOutput.appendChild(div);
    arrayCircles.push(div);  //create circle , add 1 in array
};


function addCircles() {
    // iterate pics, but no need pic just index for creating for every pic cicrcle.
    pics.forEach((pic, index) => { 
        // create new circle for exactly pic createCircle
        createCircle();

         // fix 1th circle active  (bind 1 pic)
    arrayCircles[0].classList.add('active');

        // add event for circle 
        arrayCircles[index].addEventListener('click', () => {
            console.log(index)
            console.log(arrayCircles[index])
            console.log(arrayCircles.length)
                     
            if (arrowLeft.hidden === true) {
                arrowLeft.hidden = false;
            } 
            if (arrowRRight.hidden === true) {
                arrowRRight.hidden = false;
            } 
          
            // change pic corresponds circle index
            changePic(index);
          
        });
    });   
}

// function addCircles() {  // advanced version
//     pics.forEach(createCircle);
//     arrayCircles[0].classList.add('active');
//     arrayCircles.forEach((circle, index) => {
//         circle.addEventListener('click', () => changePic(index));
//     });    
// };

function removeActiveClassForCircle() {
    console.log(currentPicIndex);
    if (currentPicIndex < pics.length )
    arrayCircles[currentPicIndex].classList.remove('active');

   
};

function addActiveClassForCircle() {
    if (currentPicIndex < pics.length)
    arrayCircles[currentPicIndex].classList.add('active');
  
};

function showPic() {
    if (currentPicIndex < pics.length) 
    pics[currentPicIndex].classList.add('block');
};

function hidePic() {
    if (currentPicIndex < pics.length)
    pics[currentPicIndex].classList.remove('block');
};

function changePic(picIndex) {
    hidePic();
    removeActiveClassForCircle();
    currentPicIndex = picIndex;
    addActiveClassForCircle();
    showPic();
};


// function nextPic() {
//     let newPicInex = currentPicIndex + 1;

//     if (newPicInex > pics.length - 1) {
//         newPicInex = 0;
//     };
//     changePic(newPicInex);
// };

function nextPic() {
    let newPicInex = currentPicIndex + 1;
    console.log(newPicInex);
    if (arrowLeft.hidden === true) {
        arrowLeft.hidden = false;
    }
    if (newPicInex === pics.length - 1) {
       arrowRRight.hidden = true;
    } 
    changePic(newPicInex);
};
`   89`
function prevPic() {
    let newPicInex = currentPicIndex - 1;

    if (arrowRRight.hidden === true) {
        arrowRRight.hidden = false;
    }

    if (newPicInex === 0) {
        arrowLeft.hidden = true;
     } 
    changePic(newPicInex);
};

// function prevPic() {
//     let newPicInex = currentPicIndex - 1;

//     if (arrowRRight.hidden === true) {
//         arrowRRight.hidden = false;
//     }

//     if (newPicInex < 0) {
//         newPicInex = pics.length - 1;
//     };
//     changePic(newPicInex);
// };

 addCircles();
arrowLeft.addEventListener('click', prevPic);
arrowRRight.addEventListener('click', nextPic);