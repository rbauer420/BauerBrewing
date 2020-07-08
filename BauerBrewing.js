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

ABV = 132.715(OG-FG)

alert("Your ABV is...")
