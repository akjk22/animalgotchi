import { Animal } from './animal';
import $ from 'jquery';
import './styles.css';

// eslint-disable-next-line no-unused-vars
const jerry = new Animal("Jerry", "hippo");

$(document).ready(function() {

  $("#hunger-level").text(jerry.hunger);
  $("button#feedJerry").click(function() {
    jerry.feed();
    $("#hunger-level").text(jerry.hunger);
    console.log('Jerry has been fed');
    console.log(jerry.hunger);
  });  

});