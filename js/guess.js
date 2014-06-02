var counter = 5;
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    var allNumber = [];

    //call this function every time 
    function guess(){


      if (counter > 0) 
      {

        //get the value from the input box and change it to int
        var input = document.getElementById("inputGuess");
        var guessingNumber = parseInt(input.value);

        //alert(jQuery.inArray(guessingNumber, allNumber));
        //if the input is invalid just alert the user
        if (isNaN(guessingNumber) || guessingNumber > 100 || guessingNumber < 0 || jQuery.inArray(guessingNumber, allNumber) !== -1) {
          alert("Invalid input");
        }


        //check if there is already the same number
        //alert(allNumber.length);

        //if it is a valid input
        else {
          
          //if it is equal you win and set the counter to 0
          if (guessingNumber === randomNumber) {
            $("#helperText").text("You won the game!.");
            counter = 0;
            $("#numberText").text("You have " + counter + " guesses left");
          }
          else if (guessingNumber > randomNumber) {
            $("#helperText").text("Your guess is too high.");
            counter--;
            $("#numberText").text("You have " + counter + " guesses left");
            allNumber.push(guessingNumber);

            //append the value to h3
            $("#oldNumber").append('<p>'+guessingNumber+'<p>' + " ");
          }
          else if (guessingNumber < randomNumber) {
            $("#helperText").text("Your guess is too low.");
            counter--;
            $("#numberText").text("You have " + counter + " guesses left");
            allNumber.push(guessingNumber);
            
            //append the value to h3
            $("#oldNumber").append('<p>'+guessingNumber+'<p>' + " ");
          }
        }
      }

      else{
        $("#helperText").text("You can't make any more guess, Please click Play again.");
      }
    }

    function reset(){
      counter = 5;
      randomNumber = Math.floor((Math.random() * 100) + 1);
      $("#helperText").text("Please enter in your guess.");

      $("#numberText").text("You have " + counter + " guesses left");
      allNumber = [];
      $("#oldNumber").text("");
    }

    function giveup(){
      $("#helperText").text("The answer is " + randomNumber);
      counter = 0;
    }