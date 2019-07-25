$(function(){

    var demoJson = {}
    if(ns.getQuery().debug==1){    
        demoJson = {
            "list": [
                {
                    "bar": 2,
                    "desc": ",职业"
                },
                {
                    "bar": 0,
                    "desc": ""
                },
                {
                    "bar": 2,
                    "desc": ",升级"
                },
                {
                    "bar": 0,
                    "desc": ""
                },
                {
                    "bar": 0,
                    "desc": ""
                }
            ],
            "lineup": [
                {
                    "img": "http://game.gtimg.cn/images/lol/tft/cham-icons/"
                }
            ],
            "equipment": [
                {
                    "main": "http://game.gtimg.cn/images/lol/tft/cham-icons/236.png",
                    "child": [
                        {
                            "img": "http://game.gtimg.cn/images/lol/tft/items/3089.png"
                        },
                        {
                            "img": "http://game.gtimg.cn/images/lol/tft/items/3089.png"
                        },
                        {
                            "img": "http://game.gtimg.cn/images/lol/tft/items/3285.png"
                        }
                    ]
                }
            ]
        }
    }

    
    window.GetData = window.GetData || function(res){
        if(res == 1){
            return demoJson
        }
    }
    var prevJson = '';
    setInterval(function(){
        var json = GetData('1');
        if(prevJson != json) init(json)
        prevJson = json;
    },1*1000);

    function init(json){
        if(isEmpty(json)) return;    
        if(typeof json == 'string') json = JSON.parse(json);   
        var bottom = $('.bottom');
        var lineup = $('.lineup .list');
        var equipment = $('.equipment .list');
        
        var bottomHtml='',lineupHtml='',equipmentHtml='';
        var bottomList = json['list'],lineupList=json['lineup'],equipmentList=json['equipment'];

        if(!isEmpty(bottomList)){
            for(var i=0; i<bottomList.length;i++){
                if(bottomList[i]['bar'] != 0){
                    bottomHtml += '<div class="item">\
                        <div class="progress"><div style="width: '+bottomList[i]['bar']+'%;"></div></div>\
                        <div class="tip">'+division(bottomList[i]['desc'],'匹配度')+'</div>\
                    </div>'
                } else {
                    bottomHtml += '<div class="item"></div>'
                }
            }
            bottom.html(bottomHtml).animate({opacity: 1},50,'linear')
        }

        if(!isEmpty(lineupList)){
            for(var i=0; i<lineupList.length; i++){
                lineupHtml += '<div class="item"><img src="'+lineupList[i].img+'" /></div>'
            }
            lineup.html(lineupHtml);
            $('.lineup').animate({opacity: 1},50,'linear')
        }

        if(!isEmpty(equipmentList)){
            for(var i=0; i<equipmentList.length; i++){
                equipmentHtml += '<div class="item">\
                    <div class="main"><img src="'+equipmentList[i].main+'" /></div>\
                    <div class="equal"><i class="icon icon-equal"></i></div>'
                    for(var j=0; j<equipmentList[i].child.length; j++){
                        equipmentHtml += '<div class="child"><img src="'+equipmentList[i].child[j].img+'" /></div>'
                    }
                equipmentHtml += '</div>'
            }
            equipment.html(equipmentHtml);
        }
        equipmentAni();
    }

    $('.dialog').Tdrag({
        cbMove:function(res){
            $(res).css({
                right: 'auto',
                bottom: 'auto'
            })
        }
    });

    $('.dialog .close').click(function(){
        var dialogObj = $(this).parent();
        if($(this).hasClass('expend')){
            $(this).removeClass('expend');
            if(!dialogObj.hasClass('equipment')){
                dialogObj.find('.list').css({overflow:'auto'});
            }
            dialogObj.find('.list').css({height: 'auto',opacity:1});
        } else {
            $(this).addClass('expend');
            dialogObj.find('.list').css({height: 1,overflow:'hidden',opacity:0});
        }
    })


    var enterTime=null,leaveTime=null;
    function equipmentAni(){
        var obj = $('.equipment');
        var item = obj.find('.item');
        var list = obj.find('.list');
        var itemWidths = [];
        var rowInitHeight = 38;
        var rowHeight = Math.ceil(item.length/2)*38;
        for (var i=0; i<item.length; i++){
            itemWidths.push($(item[i]).width());
        }
        itemWidths.sort(function(a,b){ return b-a});
        item.css({ width: itemWidths[0] })
        if(itemWidths.length > 2){
            list.css({ width: itemWidths[0]*2+10 })
            obj.css({ width: 'auto' })
        }
        obj.css({ opacity: 1 })

        obj.off('mouseenter').on('mouseenter',function(){
            clearInterval(leaveTime);
            enterTime = setTimeout(function(){
                list.animate({
                    height: rowHeight+'px',
                    opacity: 1
                },50,'linear')
            },30)
        })
        obj.off('mouseleave').on('mouseleave',function(){
            clearInterval(enterTime);
            leaveTime = setTimeout(function(){
                list.animate({
                    height: (obj.find('.close').hasClass('expend') ? 1 : rowInitHeight)+'px',
                    opacity: obj.find('.close').hasClass('expend') ? 0 : 1
                },50,'linear')
            },30)
        })

    }


    function division(str,mark){
        str = String(str);
        mark = mark || '';
        var markLen = mark.length;
        if(markLen > 0 && str.indexOf(mark) != -1){
            return str.replace(new RegExp(mark,'g'),'<span>'+mark+'</span>')
        } 
        return str;
    }
    
    function isEmpty(data){
        if(Array.isArray(data)){
            return !data.length
        } else if (typeof data == 'object'){
            return JSON.stringify(data) == '{}'
        } else if(typeof data == 'string'){
        data = data.replace(/(^\s*)|(\s*$)/g, '')
            return data == 'undefined' || !data
        } else {
            return !data 
        }
    }
})