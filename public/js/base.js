var myScroll;
$(function(){
    if($('.section').height()<($(window).height()-$('#footer').height())){
        $('.upload').remove();
        $('.section').css('min-height',$(window).height()-$('#footer').height());
    }

    myScroll = new IScroll('#wrapper', {
        probeType: 3,
        click:true
    });

    myScroll.scrollTo(0, -40, 0);

    myScroll.on('scroll', function () {
        if(this.y<this.maxScrollY-60){
            if($('.upload').hasClass('flip')){
                $('.upload').addClass('canLoad').removeClass('flip').html('释放加载');
            }
        }
        else if(this.y<=this.maxScrollY){
            if($('.upload').hasClass('canLoad')){
                $('.upload').addClass('loading').removeClass('canLoad').html('正在加载');
                upPull();
            }
        }
        else if(this.y<=-40){
            if(!$('.downpull').hasClass('flip')){
                $('.downpull').addClass('flip').html('下拉刷新');
            }
        }else if(this.y<=60){
            if( $('.downpull').hasClass('canLoad')){
                $('.downpull').addClass('loading').removeClass('canLoad').html('正在刷新');
                downPull();
            }
        }else{
            if($('.downpull').hasClass('flip')){
                $('.downpull').addClass('canLoad').removeClass('flip').html('释放刷新');
            }
        }
    });
    myScroll.on('scrollEnd', function () {
        if(this.y<-40){
            return;
        }else if(this.y==-40){
            if(!$('.downpull').hasClass('flip')){
                $('.downpull').addClass('flip').html('下拉刷新');
            }
        }else{
            if($('.downpull').hasClass('flip')){
                myScroll.scrollTo(0, -40, 600);
            }
        }
    });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    //search
    var firstClick=false;
    $('.section header .search-box .input-group-btn .btn').click(function(){
        firstClick=!firstClick;
        if(firstClick){
            if($(this).hasClass('active')){
                $('.section header .search-box .input-group-btn ul').slideUp();
                $(this).removeClass('active');
            }else{
                $('.section header .search-box .input-group-btn ul').slideUp();
                $('.section header .search-box .input-group-btn .btn').removeClass('active');
                $(this).addClass('active').siblings().slideDown();
            }
        }
    });
    $('#class').val($('.section header .search-box .input-group-btn:nth-child(1) ul li.active a').text());
    $('#sort').val($('.section header .search-box .input-group-btn:nth-child(2) ul li.active a').text());
    $('.section header .search-box .input-group-btn:nth-child(1) ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.section header .search-box .input-group-btn ul').slideUp();
        $('.section header .search-box .input-group-btn .btn').removeClass('active');
        $('#class').val($(this).children('a').text());
    });
    $('.section header .search-box .input-group-btn:nth-child(2) ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.section header .search-box .input-group-btn ul').slideUp();
        $('.section header .search-box .input-group-btn .btn').removeClass('active');
        $('#sort').val($(this).children('a').text());
    });
});