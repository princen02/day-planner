console.log("JS loaded")


$(".savetextarea").on("click",function(){
    var id= $(this).attr("id")
    var plan = $(this).siblings("textarea").val()
    localStorage.setItem(id,plan)
    console.log("on-clicking",id,plan)
})
var currentHours = moment().hour()
$("#currentDay").text(moment())
for(let i=9;i<=17;i++){
    var useentry = localStorage.getItem(i)
    $("#"+i).siblings("textarea").val(useentry)
    if(currentHours > 1){
        $("#"+i).siblings("textarea").addClass("bg-success")

    }else if( i == currentHours){
        $("#"+i).siblings("textarea").addClass("bg-teal")
    }else{
        $("#"+i).siblings("textarea").addClass("bg-info")
    }

}