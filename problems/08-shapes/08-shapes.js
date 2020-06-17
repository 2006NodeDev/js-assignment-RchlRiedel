/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

  switch (shape) {

    case  "Square" :
      for (h = 1; h <= height; h ++) {
          console.log(character.repeat(height));
      }
      break


    case "Triangle":
      let  i = 1
      while (i <= height) { 
          console.log(character.repeat(i));
          i ++
      } 
      
      //for a triangle going the other way: 
      // while (height >= 0){ 
      //   console.log(character.repeat(height));
      //     height --
      // }
      break


    case "Diamond":
   
      let j = 1
      space = Math.floor(height/2)

      while (space >= 0) { //top half
         console.log(" ".repeat(space) + character.repeat(j) + " ".repeat(space))
         space --
         j += 2 
      }
      
      j -= 2; //need this so middle line (length = height) doesn't repeat twice
      space++;

      while(j > 1){ //bottom half
        j -= 2;
        space++;
        console.log(' '.repeat(space) + character.repeat(j) + ' '.repeat(space));
      }
      break


    default :
      console.log("Invalid input. Please specify shape Square, Triangle, or Diamond");
      break

  }
 
}

printShape("idk", 34, "%")

printShape("Square", 6, "#") //technically looks more like a rectangle

printShape("Triangle", 4, "@")

printShape("Diamond", 9, "~")