let time = 100;
let flag = true;

$(".com-info").mouseover(function () {
    if(flag == true){
        $("#info").fadeIn(time);
        flag = false;
        setTimeout(function () {
            flag = true
        },time);
    }

})
$(".com-info").mouseleave(function () {
        $("#info").fadeOut(time);
        flag = false;
        setTimeout(function () {
            flag = true
        },time);


})