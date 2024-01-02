
const currentDate = dayjs();
const currentHour= dayjs().format("hA")

const formattedDate= currentDate.format("dddd, DD MMMM")
console.log(formattedDate)

$("#currentDay").text(formattedDate);

$(".time-block").each(function(){
    var timeBlock = $(this).find(".hour").text()

    if(timeBlock===currentHour){
        $(this).addClass("currentTime")
    }
})
