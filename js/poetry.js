
var url =  "http://api.avatardata.cn/TangShiSongCi/Search?key=0cfa57b9295a40708f342aa4b504d302";
var keyword = "秋兴";
// 诗词精选数据
var poetry = [
    {title:"长相思·山一程",author:"纳兰性德",
    content:"山一程，水一程，\n身向榆关那畔行。\n夜深千帐灯。\n风一更，雪一更，\n聒碎乡心梦不成。\n故园无此声。\n"},
    {title:"御街行·秋日怀旧",author:"范仲淹",
    content:"纷纷坠叶飘香砌。夜寂静，寒声碎。真珠帘卷玉楼空，天淡银河垂地。年年今夜，月华如练，长是人千里。愁肠已断无由醉，酒未到，先成泪。残灯明灭枕头欹，谙尽孤眠滋味。都来此事，眉间心上，无计相回避。"},
    {title:"木兰花",author:"钱惟演",
    content:"城上风光莺语乱。城下烟波春拍岸。绿杨芳草几时休，泪眼愁肠先已断。\n\n情怀渐变成衰晚。鸾鉴朱颜惊暗换。昔年多病厌芳尊，今日芳尊惟恐浅。"},
    {title:"无题·重帏深下莫愁堂",author:"李商隐",
    content:"重帏深下莫愁堂，卧后清宵细细长。神女生涯原是梦，小姑居处本无郎。风波不信菱枝弱，月露谁教桂叶香。直道相思了无益，未妨惆怅是清狂。"},
    {title:"青玉案·元夕",author:"辛弃疾",
    content:"东风夜放花千树，更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。\n\n蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度，蓦然回首，那人却在，灯火阑珊处"}
    
];

// 关键字搜索，请求唐诗宋词数据
$('.search-btn').click(function () {
  keyword = $('.search-ipt').val();
  $.ajax({
    url: url,
    data: {keyWord: keyword},
    async: true,
    type: "GET",
    success: function(data) {
        console.log(data);
        var aData = data.result;
        var str = '';
        // 无搜索数据不返回，有数据则动态添加
        if (aData.length==0) {
            alert('无相关数据，请搜索其他关键字');
        }else {
            str += '<h4>搜索结果如下：</h4>';
            $.each(aData, function(index, item) {
                str += '<a class="list-group-item" href="javascript:;" data-id=' + item.id + '><h4>'+item.name+'</h4></a>'
            })
            console.log(str);
            $('#result').append(str);
        }
    }
  })
})
// 因为是动态添加的数据 属于未来 点击事件需要用 on() 方法
$('.list-group').on('click', 'a[class="list-group-item"]', (function(){
    // 向细节页面传递参数
    sessionStorage.poetryId = $(this).data('id');
    // 跳转到详情页面
    location.assign('poetryDetail.html');

})
)

// 轮播图切换时长
$('.carousel').carousel({
    interval: 3000
})
// 初始化 popover 弹出框
$(function () {
  $('[data-toggle="popover"]').popover();
})

// 读书颂词 弹出框 (data-content弹出框内容无法换行？)
var poetryStr = '';
$.each(poetry, function(index,item){
    console.log(item);
    poetryStr += '<li class="list-group-item" data-toggle="popover" data-placement="top" data-content="'+item.content+'"><h4>'+item.title+'</h4><span>'+item.author+'</span></li>';
})
$('#myPoetry').append(poetryStr);





