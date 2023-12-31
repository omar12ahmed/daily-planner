
const currentDate = dayjs();

const formattedDate= currentDate.format("dddd, DD MMMM")
console.log(formattedDate)

$("#currentDay").text(formattedDate)