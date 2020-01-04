const imageElem = document.querySelectorAll('img');


for (let i = 0; i < imageElem.length; i++) {

// Adding EventListener calling an External function displayImage()
//  imageElem[i].addEventListener('click',displayImage);

// Adding Eventlistener with an anonymous function
    imageElem[i].addEventListener('click',function(){
        console.log(this.src);
        window.open(this.src,"myImage","resizeable=yes,width=480,height=600");
        
    })
}

//External function with the name displayImage()
//function displayImage(){
//    console.log(this.alt);
//    window.open(this.src,"myImage","resizeable=yes,width=480,height=600");
//}



