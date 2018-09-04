$(function () {
    console.log($(window).width());
    var header = '<div class="menu"></div><img class="footerImg" /><div class="dhbg"><div class="top-content"><ul class="navUl"><li class="navli-10"><a class="home">首页</a></li><li class="navli-10"><a class="zhuanzhi">专职</a></li><li class="navli-10"><a class="jianhzi">兼职</a></li><li class="navli-14"><a class="univerity">合作院校</a></li><li class="navli-14"><a class="company">合作企业</a></li><li class="navli-14"><a class="example">成功案例</a></li><li class="navli-14"><a class="problem">常见问题</a></li><li class="navli-14 lino6"><a href="javascript:;">关于我们</a><div class="slideDown"><ul><li><a class="contact">公司介绍</a></li><li><a class="culture">公司文化</a></li><li><a class="prospect">发展前景</a></li></ul></div></li></ul></div></div>	<div class="div-menu"><li class="navli-10"><a class="home">首页</a></li> <li class="navli-10"><a class="zhuanzhi">专职</a></li><li class="navli-10"><a class="jianhzi">兼职</a></li><li class="navli-14"><a class="univerity">合作院校</a></li><li class="navli-14"><a class="company">合作企业</a></li><li class="navli-14"><a class="example">成功案例</a></li><li class="navli-14"><a class="contact">公司介绍</a></li><li class="navli-14"><a class="culture">公司文化</a></li><li class="navli-14"><a class="prospect">发展前景</a></li></div>';

    var footer = '<div class="footbg"><div class="footnr"><img class="footerImg"/><p>河南卓鑫人力资源有限公司经工商局注册，诚信经营，以人为本，为广大企业输出高质量员工。解决企业用人之急并保障员工的合法权益。 为响应国家一带一路大发展的政策，带动广大人群走出去、挣到钱做出了我们应有的贡献！公司组建的是一支有组织、有纪律、有保障、有诚信、有资质的正规对外劳务派遣机构，为社会稳定和促进和谐社会的发展贡献自己的力量！</p></div></div>'

    $(".header").css("opacity", "0");

    $(".header").append(header);
    $(".footer").append(footer);

    $(".menu").click(function () {
        var show = $('.div-menu').css('display');
        if (show == 'block') {
            $('.div-menu').css('display', 'none');
        } else {
            $('.div-menu').css('display', 'block');
        }
    });

    $(".header").animate({
        opacity: 1
    }, 1000); //这句的作用是使DIV缓慢显示 

    $(".footerImg").attr("src", "../imgs/foot.png");
    $(".home").attr("href", "index.html");
    $(".zhuanzhi").attr("href", "new.html");
    $(".jianhzi").attr("href", "new.html");
    $(".univerity").attr("href", "new.html");
    $(".company").attr("href", "new.html");
    $(".example").attr("href", "new.html");
    $(".problem").attr("href", "new.html");
    $(".contact").attr("href", "contact.html");
    $(".culture").attr("href", "culture.html");
    $(".prospect").attr("href", "prospect.html");

})