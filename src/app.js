import css from './app.scss';
import $ from "jquery";

console.log('test');

$(document).ready(function(){
    $("h6").click(function(){
        $(this).hide();
    });
});
