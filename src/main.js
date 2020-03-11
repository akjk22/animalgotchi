import { Hippo2 } from './hippo2';
import $ from 'jquery';
import './styles.css';




const hippo = new Hippo2("Jerry");



$(document).ready(function() {
  // // $("form").submit(function(event) {
  // //   event.preventDefault();
  // //   /* Gather input from drop down menu */
 
  // //   let hippo = $("select#animal").val();
  // //     /* Return the calculated data back to the user */

  // //     $("#results").text(); {
  // //       animalSelection.show();
  // //     }
  // });
  $("#hunger-level").text(hippo.hungerLevel);
  $("#feed").click(function () {
    hippo.feed();
    $("#hunger-level").text(hippo.hungerLevel);
  });


});