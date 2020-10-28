'use strict' ;

var setImage = ["./img/1.jpeg"
               , "./img/2.jpeg"
               , "./img/3.jpeg"
               , "./img/4.jpeg"
               , "./img/5.jpeg"
               , "./img/6.jpeg"
               , "./img/7.jpeg"
               , "./img/8.jpeg"
               , "./img/9.jpeg"
               , "./img/10.jpeg"
               , "./img/11.jpeg"
               , "./img/12.jpeg"
               , "./img/13.jpeg"];
  
  var counter = 0;
  
  function slideimage(){
      if( counter >= (setImage.length) ){
          counter = 0;
      }
      document.getElementById( "mypic" ).style.backgroundImage = "url(" + setImage[counter] + ")";
      counter++;
  }
  
  setInterval("slideimage()",2000);
  