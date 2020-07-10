/**Image Slideshow */

var i = 0; 
var images = [];
var time = 3000;

images[0] = 'ingredients.jpg';
images[1] = 'mashIn.jpg';
images[2] = 'refract.jpg';
images[3] = 'fridge.jpg';
images[4] = 'pbBlossoms.jpg';

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1){
        i++;
        
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;



/** ABV Calculator Formula
ABV = 132.715(OG-FG) or (OG-FG)/.00753 **/

var OG;
var FG;
var ABV;

function calculate() {
    var field1=document.getElementById('OG') .value;
    var field2=document.getElementById('FG') .value;
    
    var result=parseFloat(field1)-parseFloat(field2);

}

if(!isNaN(result))
{
    document.getElementById("yourABV").innerHTML="Your ABV is "+reset;
}

/**function calculate() {
    if(OG < 1 || OG > 1.101 || FG < 1 || FG > 1.101) {
        alert('Invalid OG or FG. Please enter values between 1.001 and 1.100 Bx');
        return;
    }
}

/**function calculate() {
    if(isNaN(OG) || isNaN(FG)) {
        alert('Invalid OG or FG. Please enter values between 1.001 and 1.100 Bx');
        return;
    }
}**/