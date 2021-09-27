console.log("JS loaded")


$(".savetextarea").on("click",function(){
    var id= $(this).attr("id")
    var plan = $(this).siblings("textarea").val()
    console.log("on-clicking",id,plan)
})