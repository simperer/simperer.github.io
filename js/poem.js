var poems = [
    {title:"生与死",author:"[英]兰德（杨绛译）",
    content:"我和谁都不争，\n和谁争我都不屑；\n我爱大自然，\n其次是艺术；\n我双手烤着，\n生命之火取暖；\n火萎了，\n我也准备走了。\n"},    
    {title:"感谢",author:"汪国真",
    content:"让我怎样感谢你\n当我走向你的时候\n我原想收获一缕春风\n你却给了我整个春天\n\n让我怎样感谢你\n当我走向你的时候\n我原想捧起一簇浪花\n你却给了我整个海洋\n\n让我怎样感谢你\n当我走向你的时候\n我原想撷取一枚红叶\n你却给了我整个枫林\n\n让我怎样感谢你\n当我走向你的时候\n我原想亲吻一朵雪花\n你却给了我银色的世界\n"},
    {title:"神女峰",author:"舒婷",
    content:"在向你挥舞的各色花帕中\n是谁的手突然收回\n紧紧捂住了自己的眼睛\n当人们四散而去，谁\n还站在船尾\n衣群漫飞，如翻涌不息的云\n江涛\n高一声\n低一声\n\n美丽的梦流下美丽的忧伤\n人间天上，代代相传\n但是，心\n真能变成石头吗\n为眺望远天的杳鹤\n错过无数次春江月明\n\n沿着江岸\n金光菊和女贞子的洪流\n正煽动新的背叛\n与其在悬崖上展览千年\n不如在爱人肩头痛哭一晚\n\n1981年6月长江\n"},
    {title:"远和近",author:"顾城",
    content:"你\n一会看我\n一会看云\n我觉得\n你看我时很远\n你看云时很近\n"},
    {title:"我喜欢你是寂静的",author:"聂鲁达（Pablo&nbsp;Neruda)",
    content:"我喜欢你是寂静的，仿佛你消失了一样。\n你从远处聆听我，我的声音却无法触及你。\n好像你的双眼已经飞离远去，\n如同一个吻，封缄了你的嘴。\n如同所有的事物充满了我的灵魂，\n你从所有的事物中浮现，充满了我的灵魂。\n你像我灵魂，一只梦的蝴蝶，\n你如同忧郁这个字。\n\n我喜欢你是寂静的，好像你已远去。\n你听起来像在悲叹，一只如鸽悲鸣的蝴蝶。\n你从远处听见我，我的声音无法企及你。\n让我在你的沉默中安静无声。\n并且让我借你的沉默与你说话，\n你的沉默明亮如灯，简单如指环。\n你就像黑夜，拥有寂静与群星。\n你的沉默就是星星的沉默，遥远而明亮。\n\n我喜欢你是寂静的，仿佛你消失了一样，\n遥远且哀伤，仿佛你已经死了。\n彼时，一个字，一个微笑，已经足够。\n而我会觉得幸福，因那不是真的而觉得幸福。\n"},
    {title:"送别",author:"席慕蓉",
    content:"不是所有的梦都来得及实现\n不是所有的话都来得及告诉你\n内疚和悔恨\n总要深深地种植在离别后的心中\n尽管他们说\n世间种种\n最后终必成空\n\n我并不是立意要错过\n可是我一直都在这样做\n错过那花满枝桠的昨日\n又要错过今朝\n\n今朝&nbsp;仍要重复那相同的别离\n馀生将成陌路\n一去千里\n在暮霭里\n向你深深地俯首\n\n请为我珍重\n尽管他们说\n世间种种\n最后终必终必成空\n"}
];
console.log(poems);
var str = '';
$.each(poems, function(index,item){
    // 将获取到的数据存到 data-detail 中（需要转成字符串格式） 
    var sItem = JSON.stringify(item);
    // data-detail 中字符串不能有空格，否则遇到空格只会输出空格前的内容
    str += '<li class="list-group-item" data-toggle="modal" data-target="#myModal" data-detail='+sItem+'><h4>'+item.title+'</h4><span>'+item.author+'</span></li>';
    console.log(sItem);
})
$('#poems').append(str);


$('#myModal').on('show.bs.modal', function (e) {
  var poemItem = $(e.relatedTarget);
  var detail = poemItem.data('detail');
  // 这里的 detail 为 obj对象
  console.log(detail);

  var content = detail.content;
  console.log(content);
  content = content.replace(/\n/g,'<br/>');

  var title = detail.title;
  var author = detail.author;
  var modal = $(this);
  console.log(modal);
  modal.find('.modal-title').html(title+'&nbsp;———&nbsp;'+author);
  modal.find('.modal-body p').html(content);


})

// $('.carousel').carousel({
//     interval: 3000
// })