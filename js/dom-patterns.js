function showPattern() {
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while (width > 50) { // make sure to decrease the value of to be less than 50 at some point within the loop in order to prevent an infinte loop!
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length); //Establishing random usable index for colors array.  
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px'; // px as we are defining pixels and this has to be interpratable as css. Here we establish the relative start location ofr our new div on the page in terms of top to bottom position. 
        newDiv.style.left = leftPosition + 'px'; //Here we establish the relative start location of our new div on the page in terms of left to right position. 
        newDiv.style.width = width + 'px'; //will establish width of new div
        newDiv.style.height = height + 'px'; // will establish height of new div. 
        newDiv.style.background = colorsArr[randomColorIdx];

        // actually assigning our new div element to the DOM so that it shows on the page:
        document.body.appendChild(newDiv);

        // provide new  positon/charcateristics for next div rendered upon next pass through while loop:

        topPosition += 10;
        leftPosition += 10;
        width -= 20; // decrmenting the 'width' variable here is doing double duty..not only setting the size of our next div render but eventually ending the while loop (preventing an infinite loop)   
        height -= 20;
    }
}

// Note. With these specific parameters .. as function will usually be called from the browser via the html about once a second.. we should end up with a multicolor square made up of about 23 different sized (and colored) divs. s
