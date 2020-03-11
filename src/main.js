import { Hippo2 } from './hippo2';
import $ from 'jquery';
import './styles.css';




let hippo = new Hippo2();
      hippo.setHealth(100);
      hippo.setHunger(10);
    

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    /* Gather input from drop down menu */
 
    let animalSelection = $("select#animal").val();
    

     
      /* Return the calculated data back to the user */

      $("#results").text(); {
        animalSelection.show();
  
    
      }


  });

});