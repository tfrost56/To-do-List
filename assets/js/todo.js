// check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("complete");
});

// click on x to delete todo

$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
    $(this).remove();    
    });
    event.stopPropagation();
});

// creating a New To do

$("input[type='text'").on("keypress", function(event){
    if(event.which === 13){
    // grabbing new text from imput
        var todoText = $(this).val();
        $(this).val("");
    // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});