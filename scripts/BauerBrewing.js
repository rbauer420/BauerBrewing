/**Image Slideshow */

var i = 0; 
var images = [];
var time = 3000;

images[0] = './imgs/ingredients.jpg';
images[1] = './imgs/mashIn.jpg';
images[2] = './imgs/refract.jpg';
images[3] = './imgs/fridge.jpg';
images[4] = './imgs/pbBlossoms.jpg';

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
ABV = 132.715(OG-FG) or (OG-FG)/.00753 - 1.040 **/

function calculate(event) {
    event.preventDefault(); 
    var field1=document.getElementById('OG') .value;
    var field2=document.getElementById('FG') .value;
    var OG=parseFloat(field1)
    var FG=parseFloat(field2)
    var result=((OG-FG)*131.25)-1.040;

    if(OG < 1 || OG > 1.101 || FG < 1 || FG > 1.101) {
        alert('Invalid OG or FG. Please enter values between 1.001 and 1.100 Bx');
        return;
    }

     document.getElementById("yourABV").innerHTML="Your ABV is "+result;
}