# BauerBrewing
Homebrewing in Small Spaces 

***About Website***
This is a website that is dedicated to users new to homebrewing as well as users with limited space to brew in. 

It offers articles on homebrewing, basic steps to homebrewing, an ABV calculator and a SG to Brix Calculator.

No additional software or extensions need to be downloaded to use the site




***Header***
Hovering the mouse over the logo will spin the image clock-wise, 90 degrees
Hovering the mouse over each of the navigation links with change the color of the text from whitesmoke to clue and the mouse will turn into a pointer.
Hovering the mouse over the contact button will also trun the mouse into a pointer

As the screen size gets smaller, the navigation links begin to wrap and then at the 500px max breaking point, the navigation links will collapse into a hamburger menu and the logo will center over the "contact" button at the bottom of the header. The navigation links will reappear once the user selects the hamburger menu icon. At the min width of 768px and 700px (orientation: landscape), the navigation links will be in a single column.  

At the max wisth break point of 500px, the navigation links will be hidden in a hamburger menu. If the user clicks on the three lines, the navigation links 
will re-appear. 

*Note, these same features are repeated across all pages


***Footer***

  The footer contains copywright information as well as the direct link to the website of the artist behind the logo image. On the Homebrewing 101 page,
  the direct link to the website of the artist behand the chalkboard image is also available. If you hover your mouse over the link, it will turn into a pointer. 


***Homepage***

See files: index.html and BauerBrewing.css
Images: logo.jpg and carboy.jpg

There are two, h1 headers that will display on the same line with one header having a box around it. 
As the screen gets smaller, both headers will wrap. 

There are two columns with text, one is about the website and the other is a paragraph about the creater. 
As the screen gets smaller, the porportion between the first column and the second column stays the same. 
Once the screen reaches a max of 500px, the colums collapse and the content is stacked on top of each other. 


***Homebrewing 101 Page***
See files: homeBrewing101.html, BauerBrewing.css and BauerBrewing.js
Images: logo.jpg, chalkboard.jpg, ingredients.jpg, mashIn.jpg, refract.jpg, fridge.jpg and pbBlossoms.jpg

This page features an imported Google font (schoolhouse). 

Below the header is a slideshow of five images that switches automatically and restarts using JavaScript. There is a white border around the slideshow that does not
change. 

Under the slideshow there are two articiles that remain stacked on top of one another irregardless of the screen size.
In the second article there is an ordered list. 



***ABV Calculator Page***
See files: calculator.html, BauerBrewing.css and BauerBrewing.js
Images: logo.jpg

This page has a linear-gradient background from gold to dark brown.

The top element on this page is an ABV Calculator. The user enters an Original Gravity (between 1.001 and 1.100 SG) and a Final Gravity (between 1.001 and 1.100 SG) and
then toggles the "Calculate ABV" button,the JS function will complete the following math funtion ABV = 131.25(OG-FG) and provice the user with an ABV value.  The form will only allow the users to enter numeric values. 

If the user enters an Original Gravity or Final Graviyu value between between 1.001 and 1.100 SG, they will recieve an alert that says, "Invalid OG or FG. Please enter values between 1.001 and 1.100 Bx." 

Below the Homebrewing Calculator, there is a table listing a Specific Gravity value and its corresponding Brix value.
Every nth-child(odd) has a color value of #e7edf0
Every nth-child(even) has a color value of #E0E0E0


