
   function moveButton(elem){

    if( $(elem).parent().attr("id")=="box_1"){

       $(elem).appendTo("#box_2");
    
    }else{

       $(elem).prependTo("#box_1");
    }
 }
