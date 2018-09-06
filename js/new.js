$(function () {
    var a = UrlParam.paramValues("id");
    if (a === undefined)
        return;
    var index = Number(a);
    document.title = "卓鑫人力 | " + newsList[Number(a)].name;
    initDate(newsList[Number(a)].item);
})

function initDate(list) {
    if (list === undefined)
        return;
    console.log(list.reverse());
    var html = "";
    for (var i = 0; i < list.length; i++) {
        html = html + '<div class="main"><a href="' + list[i].url + '"><div class="float-left"><img class="new-img" src="' + list[i].img + '"></div><div class="new"><span class="new-title">' + list[i].title + '</span><p class="new-content">' + list[i].desc + '</p><div class="float-right new-time"><img src="../imgs/time.svg"><a>' + list[i].time + '</a></div></div></a></div><hr size="1px" />';
    }
    $('.new-zaixian').append(html);
}