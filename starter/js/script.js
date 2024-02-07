
const currentDate = dayjs();


const formattedDate= currentDate.format("dddd, DD MMMM")
console.log(formattedDate)

$("#currentDay").text(formattedDate);



function displayTasks(){

    $(".time-block").each(function (){
       var textarea = $(this).find("textarea")
       var time = textarea.attr("data-hour")
       textarea.val(localStorage.getItem("hour-"+time)
       || ""
       )


      
    });


}


function highlightTimeBlock(){
    const currentHour= parseInt(dayjs().format("HH"))
    
    $(".time-block").each(function (){
        var timeBlock= parseInt($(this).find("textarea").attr("data-hour"));
        // console.log(timeBlock)
        console.log(timeBlock >currentHour)
        if(timeBlock===currentHour){
        
            $(this).addClass("present")
        }else if(timeBlock > currentHour ){
            $(this).addClass("future")
        }else{$(this).addClass("past")}
    });
}
$(document).ready(function(){
    highlightTimeBlock();
displayTasks()
})


$(".saveBtn").on("click", function (){

    var hour= $(this).attr("data-hour")
    var textValue= $(this).parent().find("textarea").val()
    localStorage.setItem("hour-"+ hour,textValue)
 
})