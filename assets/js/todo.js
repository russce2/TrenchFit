//Check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    });

//click on x to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut("slow", function(){
        $(this).remove();
        });
    event.stopPropagation();
    });

$("input[type = 'text']").keypress(function(event){
    if (event.which === 13) {
        //grab the value of the text input
        var todoText = $(this).val();
        $(this).val("");
        //create a new lu and add to the ul 
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
    }
    });

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
    });

