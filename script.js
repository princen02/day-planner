console.log("JS loaded")


$(".savetextarea").on("click",function(){
    var id= $(this).attr("id")
    var plan = $(this).siblings("textarea").val()
    localStorage.setItem(id,plan)
    console.log("on-clicking",id,plan)
})

for(let i=9;i<=17;i++){
    var useentry = localStorage.getItem(i)
    $("#"+i).siblings("textarea").val(useentry)
}