# prime_solo_jq_assessment
The purpose of this assignment was to have a good estimate of your jQuery skills at the time.
The goal was to have a button that would generate a div, and each div would contain two buttons - one to change the color of the div, and one to remove the div.
Each div was to be numbered based on the amount of times the generate button was clicked. 
In addition, as a "hard mode" challenge, clicking the "change color" button a second time would revert the color of the div back to it's original color.
##Looking back
Looking back on this assignemnt, the things I would change would be the following:
In getNewColor(), I would change the "if" statement to be a "while" statement. At present, it will occasionally pick a color with only 5 hexadecimal characters.
In addDiv, instead of using the variables "color1" and "color2", I would just directly call the getNewColor() function from the htmlString variable.