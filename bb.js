$(document).ready(function(){
   $("#el2").draggable();
   $("#el3").draggable();
   $("#drop1").droppable({
      over:function(event, ui){
         ui.draggable.css("background-color","#d7fa99")
      },
      drop:function(event, ui){
         ui.draggable.css("display","none")
         $("#drop1").css("background-color","#c4f66f");
         $("#drop1").html("Перемещение завершено успешно.");
      },
   });
    $("#drop2").droppable({
      accept:"#el3",
      over:function(event, ui){
         ui.draggable.css("background-color","#d7fa99")
      },
      drop:function(event, ui){
         ui.draggable.css("display","none")
         $("#drop2").css("background-color","#c4f66f");
         $("#drop2").html("Перемещение завершено успешно.");
      }
   });
});