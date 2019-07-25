
ns.ready(function () {    
  var oShengChengWrapper = document.getElementById('tab-shengcheng-wrapper') // 物品生成器
  
  var oTabNewsUl = document.getElementById('tab-news-ul')
  var updateNesList = ns.FunctionConfirm({
    handle: function (next, opt) {
      if(window['ARTICLT_LIST']) return;
      opt = ns._Object(opt)
      ns.ajax({
        url: host + '/article/ydzy',
        data: {
          page: ns._Number(opt.page) || 1
        },
        success: function (res) {
          next()
          res = ns._Object(res)
          if(res.code==0) {
            res.data = ns._Array(res.data)
            res.ext = ns._Object(res.ext)
            window['ARTICLT_LIST'] = res.data
            var _html = ''
            if(!res.data.length) {
              _html = '<div class="sggg1-12">暂无数据</div>'
            } else {
              ns.each(res.data, function (item) {
                var t = ns.convertTime(new Date(item.mtime*1000))
                var fmt_time = [t.year, t.month, t.day].join('-') + ' ' + [t.hour, t.minute, t.second].join(':')
                _html += '<li class="ll-dw15">\
                  <div class="dw-11778w">' + item.title +'</div>\
                  <div class="dw-dw578te">'+ fmt_time +'</div>\
                </li>';
              })
            }
            
            oTabNewsUl.innerHTML = _html
            var oLis = ns.getByClass('ll-dw15', oTabNewsUl)
            ns.each(oLis, function (item, index) {
              item.onclick = function () {
                ns.onlyOneAddClass(oLis, index, 'active')
                getNewsDetail(index, res.data[index].id)
              }
            })
            // res.ext.pageCount = 20
            ns.Pager({
              el: document.getElementById('tab-news-pager'),
              pageActive: res.ext.currentPage,
              pageTotal: res.ext.pageCount,
              showNum: 5,
              onChange: function (page) {
                updateNesList({
                  page: page
                })
              }
            })
          }
        },
        error: function () {
          setTimeout(next, 2000)
        }
      })
    }
  })

  function getNewsDetail (newsIndex, id) {
    var oLis = ns.getByClass('ll-dw15', oTabNewsUl)
    ns.ajax({
      url: host + '/article/ydzy-item',
      data: {
        id: id
      },
      success: function (res) {
        if(res.code==0) {
          var item = ns._Object(res.data)
          var oDetail = document.getElementById('tab-news-detail')
          oDetail.style.display = 'block'
          oDetail.innerHTML = '\
            <div class="djie18w"><i class="detail-close" id="dhe154">×</i></div>\
            <div class="t48dw-4e">['+ item.tag_name + ']' + item.title +'</div>\
            <div class="ak15w8">'+ item.content.replace(/https/g,'http') +'</div>\
          ';
          setTimeout(function () {
            document.getElementById('dhe154').onclick = function () {
              ns.removeClass(oLis[newsIndex], 'active')
              oDetail.style.display = 'none';
            }
          }, 30)
        }
      }
    })
  }



  ;!function () {
    var oTabs = {
      '阵容排行': {
        el: document.getElementById('tab-zhengrong'),
        container: document.getElementById('tab-zengrong-box')
      },
      '主界面': {
        el: document.getElementById('tab-zjm'),
        container: document.getElementById('tab-main-wrapper') // 主界面
      },
      '物品生成器': {
        el: document.getElementById('tab-shengcheng'),
        container: oShengChengWrapper
      },
      '技巧': {
        el: document.getElementById('tab-news'),
        container: document.getElementById('tab-news-wrapper') 
      },
      '英雄资料': {
        el: document.getElementById('tab-yingxiongziliao'),
        container: document.getElementById('tab-yxzl-wrapper')
      }
    }

    for (var a in oTabs) {
      (function (key) {
        var item = oTabs[key]
        item.el.onclick = function () {
          console.log('aaaaa', key)
          goTo(key)
        }        
      })(a)
    }

    function goTo (key) {
      ns.addClass(document.body, 'open')
      for(var b in oTabs) {
        if(b===key) {
          if(!oTabs[b].show) {
            oTabs[b].show = true
            ns.addClass(oTabs[b].container, 'tab-active')
            ns.addClass(oTabs[b].el, 'active')
            switch(key) {
              case '技巧':
                updateNesList();
                break;
              case '阵容排行':
                zrQuery = {}
                getZhengRongList()
                break;
              case '英雄资料':
                //资料
                zlQuery = {
                  equipmentId: null,
                  race_key: null,
                  job_key: null,
                  hero_q: '',
                  atk_start: null,
                  atk_end: null
                };
                // 初始化装备选择
                SelectEquipment('select-equipment', function (item) {
                  console.log('item', item)
                  zlQuery.equipmentId = item.equipmentId
                  renderHeroZiLiao()
                })

                SelectCommon({
                  title: '选择种族',
                  el: document.getElementById('select-ra8e-05dw'),
                  list: ns.mapJson(TFTrace_List, function (item, key) {
                    return {
                      key: key,
                      label: item.race_name,
                      traitID: item.traitID
                    }
                  }),
                  onRender: function (item) {
                    if(item.label!=='全部') {
                      return '<img src="images/origins/'+ racePic[item.label] +'.jpg"/><span>'+ item.label +'</span>'
                    } else {
                      return item.label
                    }
                  },
                  onSelect: function (item) {
                    console.log(item)
                    zlQuery.race_key = item.key
                    renderHeroZiLiao()
                  }
                })
                SelectCommon({
                  el: document.getElementById('select-r546ce-job489'),
                  title: '选择职业',
                  list: JobList,
                  onRender: function (item) {
                    if(item.iconname) {
                      return '<img src="images/classes/'+ item.iconname +'.jpg"/><span>'+ item.label +'</span>'
                    } else {
                      return item.label
                    }
                  },
                  onSelect: function (item) {
                    console.log(item)
                    zlQuery.job_key = item.key
                    renderHeroZiLiao()
                  }
                })

                SelectATKRange(document.getElementById('select-gj-range'), function (a, b) {
                  zlQuery.atk_start = a
                  zlQuery.atk_end = b
                  renderHeroZiLiao()
                  //console.log('攻击距离：', a, b)
                })

                SearchBox({
                  el: document.getElementById('select-search-45'),
                  placeholder: '搜索英雄',
                  onInput: ns.debounce(function (value) {
                    zlQuery.hero_q = value
                    renderHeroZiLiao()
                  }, 500, true)
                })
                renderHeroZiLiao()
                break;
            }
          }else {
            oTabs[b].show = false
            ns.removeClass(oTabs[b].container, 'tab-active')
            ns.removeClass(oTabs[b].el, 'active')
          }
        } else {
          oTabs[b].show = false
          ns.removeClass(oTabs[b].container, 'tab-active')
          ns.removeClass(oTabs[b].el, 'active')
        }
      }
    }
    //goTo('英雄资料')
  } ();

  function renderHeroZiLiao () {
    var _wrapperHtml = ''
    var heroArr = ns.mapJson(TFTHeroesData_List, function (item, key) {
      item.map_key = key
      return item
    })
    ns.each(heroArr, function (item, index) {
      var _can_item_Show = true

      // 按装备筛选
      if(_can_item_Show && zlQuery.equipmentId) {
        _can_item_Show = false
        ns.each(ns.split(item.equipment, ','), function (qid) {
          var zb = equipmentId(qid)
          if(ns.trim(qid)==ns.trim(zlQuery.equipmentId)) _can_item_Show = true;
          if (zb.mix.length) {
            ns.each(zb.mix, function (a) {
              if(ns.trim(a.equipmentId)==ns.trim(zlQuery.equipmentId)) {
                _can_item_Show = true
                return 'break'
              }
            })
          }
          if(_can_item_Show) return 'break'
        })
      }

      // 按种族筛选
      if(_can_item_Show && zlQuery.race_key) {
        console.log('zlQuery.race_key', zlQuery.race_key)
        _can_item_Show = ns.trim(zlQuery.race_key)===ns.trim(item.race)
      }

      // 按职业筛选
      if(_can_item_Show && zlQuery.job_key) {
        _can_item_Show = ns.trim(item.job)===ns.trim(zlQuery.job_key)
      }

      // 按最小攻击距离
      if(_can_item_Show && zlQuery.atk_start) {        
        _can_item_Show = false
        var level = ns._Array(item.level)
        var minLevel = level[0]
        if(minLevel) {
          var minRange = minLevel.range
          if(minRange>zlQuery.atk_start) {
            _can_item_Show = true
          }
        }
      }

      // 按最大攻击距离
      if(_can_item_Show && zlQuery.atk_end) {        
        _can_item_Show = false
        var level = ns._Array(item.level)
        var maxLevel = level[level.length-1]
        if(maxLevel) {
          var mavval = maxLevel.range
          if(mavval < zlQuery.atk_end) {
            _can_item_Show = true
          }
        }
      }

      // 搜索框筛选 (前面几个筛选无效)
      //console.log('zlQuery.hero_q', zlQuery.hero_q)
      if(zlQuery.hero_q) {  
        var reg = new RegExp(zlQuery.hero_q.toLowerCase(), 'g')
        // 按名字和别名   
        _can_item_Show = reg.test(item.hero_name) || new RegExp(zlQuery.hero_q, 'g').test(item.hero_tittle)

        // 按简拼
        if(!_can_item_Show) {
          var jp1 = pinyin.getCamelChars(item.hero_name).toLowerCase()
          var jp2 = pinyin.getCamelChars(item.hero_tittle).toLowerCase()
          _can_item_Show = reg.test(jp1) || reg.test(jp2)
        }

        // 按全拼
        if(!_can_item_Show) {
          var jp1 = pinyin.getFullChars(item.hero_name).toLowerCase()
          var jp2 = pinyin.getFullChars(item.hero_tittle).toLowerCase()
          _can_item_Show = reg.test(jp1) || reg.test(jp2)
        }
      }
      
      // console.log('_can_item_Show', _can_item_Show)
      
      if(_can_item_Show) {
        var tra = TFTrace_List[item.race];
        _wrapperHtml += '\
          <div data-index="'+ index +'" class="one-hero-part">\
            <img class="yx-bae548" src="'+ getHeroIcon(item.heroId) +'"/>\
            <div class="ohp-pce">'+ item.price +'币</div>\
            <div class="hl-botoma215">\
              <div class="jiw158styh1">'+ item.hero_name +'</div>\
              <div style="overflow:hidden;background:rgba(0,0,0,0.8);padding:5px 0;text-align:center;">\
                <div class="mkdw" style="float:left;width:50%;border-right:#c0a671 solid 1px;box-sizing:border-box;">'+ tra.race_name +'</div>\
                <div class="nnn5w" style="float:right;width:50%;">'+ (ns._Object(JobList[item.job]).label || '无职业') +'</div>\
              </div>\
            </div>\
          </div>\
        ';      
      }
    })
    var el = document.getElementById('yingionglist')
    var oDetail = document.getElementById('yxzl254y48e')
    el.innerHTML = _wrapperHtml
    var oPart = ns.getByClass('one-hero-part', el)
    ns.each(oPart, function (dom) {
      dom.onclick = function () {
        var item = heroArr[dom.getAttribute('data-index')]
        console.log('item', item)
        var _html = '\
          <div style="overflow:hidden;margin:15px 15px 0 15px;">\
            <div style="float:left;">\
              <div class="dgnuiwteq">'+ item.hero_name + ' - ' + item.hero_tittle +'</div>\
              <div style="margin-top:3px;">价格：'+ item.price +'币</div>\
            </div>\
            <img style="width:35px;height:35px;float:right;" src="'+ getHeroIcon(item.heroId) +'"/>\
          </div>\
          <div class="mmke2ty15e5s5">'+ item.skill_introduce +'</div>\
          <div class="jogow1e8798ew654e">英雄属性</div>\
          '+ ns.map(item.level, function (m) {
            return '\
              <div class="xingxing15">LV '+ m.name +'星</div>\
              <div class="joiywe15">\
                <div class="nkdw478"><span>生命值：</span><b>'+ m.health +'</b></div>\
                <div class="nkdw478"><span>护甲：</span><b>'+ m.armor +'</b></div>\
                <div class="nkdw478"><span>魔抗：</span><b>'+ m.magic_res +'</b></div>\
                <div class="nkdw478"><span>攻击力：</span><b>'+ m.damage +'</b></div>\
                <div class="nkdw478"><span>攻击距离：</span><b>'+ m.range +'</b></div>\
                <div class="nkdw478"><span>攻击速度：</span><b>'+ m.speed +'</b></div>\
                <div class="nkdw478"><span>秒伤：</span><b>'+ m.dps +'</b></div>\
                <div class="nkdw478"><span>初始蓝：</span><b>'+ m.StartingMana +'</b></div>\
                <div class="nkdw478"><span>最大蓝：</span><b>'+ m.Mana +'</b></div>\
              </div>\
            ';
          }).join('') +'\
          <div class="jogow1e8798ew654e">推荐装备</div>\
          <div style="height:15px;"></div>\
          '+ ns.map(ns.split(item.equipment, ','), function (eqid) {
            var eq = equipmentId(eqid)
            console.log('eq', eq)
            return '\
              <div class="kowe45">\
                <div class="tab02-part jgew15">\
                  <img src="'+ eq.pic +'"/>\
                  <div class="tab02-info">\
                    <div class="font16">'+ eq.name +'</div>\
                    <div>'+ eq.description +'</div>\
                  </div>\
                </div>\
                <span class="d-ouwe">=</span>\
                <div class="tab02-part mmkowe">\
                  <img src="'+ eq.mix[0].pic +'"/>\
                  <div class="tab02-info">\
                    <div class="font16">'+ eq.mix[0].name +'</div>\
                    <div>'+ eq.mix[0].description +'</div>\
                  </div>\
                </div>\
                <span class="d-ouwe">+</span>\
                <div class="tab02-part mmkowe">\
                  <img src="'+ eq.mix[1].pic +'"/>\
                  <div class="tab02-info">\
                    <div class="font16">'+ eq.mix[1].name +'</div>\
                    <div>'+ eq.mix[1].description +'</div>\
                  </div>\
                </div>\
              </div>\
            ';
          }).join('') +'\
        ';
        oDetail.innerHTML = _html
      }
    })
  }


  

  // tab主界面
  !function () {
    var oTabs = [
      equipment('暴风大剑'), 
      equipment('反曲之弓'), 
      equipment('无用大棒'),
      equipment('女神之泪'), 
      equipment('巨人腰带'), 
      equipment('锁子甲'), 
      equipment('负极斗篷'), 
      equipment('铲子'),
      equipment('随机几率'),
      equipment('种族'),
      equipment('职业')
    ];
    
    var oMoreTab01 = document.getElementById('tab01-more')
    var oHoverMore = document.getElementById('hover-more')
    var oUl = document.getElementById('tab-mian-ul')
    var _html = ''
    for(var a=0; a<oTabs.length; a++) {
      var item = oTabs[a]
      _html += '<li class="se-d15w">\
        <div class="pic"><img src="'+ item.pic +'"/>\</div>\
        <div class="tb-more inner-more"></div>\
      </li>';
    }

    oUl.innerHTML = _html
    var oLis = ns.getByClass('se-d15w', oUl)

    ns.each(oLis, function (item, index) {
      var oInnerMore = ns.getByClass('inner-more', item)[0]
      setTimeout(function () {
        renderTabMore(oInnerMore, oTabs[index])
      }, 30)

      item.onmouseout = function () {
        renderTabMore(oHoverMore, null)
      }

      item.onmouseover = function () {
        var showHoverFixed = false
        for(var a=0; a<oLis.length; a++) {
          if(ns.hasClass(oLis[a], 'active')) {
            showHoverFixed = true
            break;
          }
        }
        if(showHoverFixed) {
          renderTabMore(oHoverMore, oTabs[index])
          ns.addClass(oUl, 'fixed')
        } else {
          renderTabMore(oHoverMore, null)
          ns.removeClass(oUl, 'fixed')
        }
      }
      
      item.onclick = function () {
        ns.addClass(oUl, 'fixed')
        ns.each(oLis, function (a, idx) {
          if(index!==idx) {
            ns.removeClass(a, 'active')
          }        
        })
        
        if(ns.hasClass(item, 'active')) {
          ns.removeClass(item, 'active')
          renderTabMore(oMoreTab01, null)
        } else {
          ns.addClass(item, 'active')
          renderTabMore(oMoreTab01, oTabs[index])
        }
      }
    })


    // renderTabMore(oMoreTab01, oTabs[0])

    function renderTabMore (el, item) {
      if(!item || !item.group && !item.des_pic) {
        el.innerHTML = '';
        el.style.display = 'none'
        return;
      }
      el.style.display = 'block'
      if(item.des_pic) {
        ns.addClass(el, 'no-bg')
        el.innerHTML = '<img class="des_pic" style="width:auto !important;height:auto !important;" src="'+ item.des_pic +'"/>'
      } else if(item.group.length) {
        var _more = ''
        ns.removeClass(el, 'no-bg')
        ns.each(item.group, function (g) {
          _more += '\
            <li>\
              <div class="d15w-158w">\
                <span class="fh">+</span>\
                <img src="'+ g.add.pic +'"/>\
                <span class="fh">=</span>\
                <img src="'+ g.to.pic +'"/>\
              </div>\
              <div class="djiw-15w">\
                <div>'+ g.to.eq_name +'</div>\
                <div>'+ g.to.eq_effect +'</div>\
              </div>\
            </li>\
          '
        })
        el.innerHTML = _more
      }
    }
  } ();



  // 物品生成器
  ;!function () {
    var res = {
      '暴风大剑': equipment('暴风大剑'),
      '反曲之弓': equipment('反曲之弓'),
      '无用大棒': equipment('无用大棒'),
      '女神之泪': equipment('女神之泪'), 
      '巨人腰带': equipment('巨人腰带'), 
      '锁子甲': equipment('锁子甲'), 
      '负极斗篷': equipment('负极斗篷'), 
      '铲子': equipment('铲子'),
      '无尽之刃': equipment('无尽之刃'),
      '海克斯科技枪刃': equipment('海克斯科技枪刃'),
      '神圣之剑': equipment('神圣之剑'),
      '朔极之矛': equipment('朔极之矛'),
      '守护天使': equipment('守护天使'),
      '饮血剑': equipment('饮血剑'),
      '基克的先驱': equipment('基克的先驱'),
      '幽梦之灵': equipment('幽梦之灵'),
      '悠米': equipment('悠米'),
      '莫雷洛秘典': equipment('莫雷洛秘典'),
      '离子火花': equipment('离子火花'),
      '钢铁烈焰之匣': equipment('钢铁烈焰之匣'),
      '卢登的回声': equipment('卢登的回声'),
      '鬼索的狂暴之刃': equipment('鬼索的狂暴之刃'),
      '灭世者的死亡之帽': equipment('灭世者的死亡之帽'),
      '疾射火炮': equipment('疾射火炮'),
      '斯塔缇克电刃': equipment('斯塔缇克电刃'),
      '幻影之舞': equipment('幻影之舞'),
      '诅咒之刃': equipment('诅咒之刃'),
      '巨型九头蛇': equipment('巨型九头蛇'),
      '破败王者之刃': equipment('破败王者之刃'),
      '暗裔': equipment('暗裔'),
      '救赎': equipment('救赎'),
      '肃静': equipment('肃静'),
      '冰霜之心': equipment('冰霜之心'),
      '炽天使之拥': equipment('炽天使之拥'),
      '荆棘之甲': equipment('荆棘之甲'),
      '折剑者': equipment('折剑者'),
      '蜥蜴长老之赐': equipment('蜥蜴长老之赐'),
      '骑士之誓': equipment('骑士之誓'),
      '卢安娜的飓风': equipment('卢安娜的飓风'),
      '灵风': equipment('灵风'),
      '巨龙之爪': equipment('巨龙之爪'),
      '狂徒铠甲': equipment('狂徒铠甲'),
      '冰霜之锤': equipment('冰霜之锤'),
      '自然之力': equipment('自然之力')
    }

   

    var _html = '\
      <table>\
        <tr>\
          <td></td>\
          <td class="tab02-part">\
            <img src="'+ res['暴风大剑'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['暴风大剑'].name +'</div>\
              <div>'+ res['暴风大剑'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['无用大棒'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['无用大棒'].name +'</div>\
              <div>'+ res['无用大棒'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['反曲之弓'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['反曲之弓'].name +'</div>\
              <div>'+ res['反曲之弓'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['女神之泪'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['女神之泪'].name +'</div>\
              <div>'+ res['女神之泪'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['锁子甲'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['锁子甲'].name +'</div>\
              <div>'+ res['锁子甲'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['负极斗篷'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['负极斗篷'].name +'</div>\
              <div>'+ res['负极斗篷'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['巨人腰带'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['巨人腰带'].name +'</div>\
              <div>'+ res['巨人腰带'].description +'</div>\
            </div>\
          </td>\
          <td class="tab02-part">\
            <img src="'+ res['铲子'].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res['铲子'].name +'</div>\
              <div>'+ res['铲子'].description +'</div>\
            </div>\
          </td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['暴风大剑'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['暴风大剑'].name +'</div>\
                <div>'+ res['暴风大剑'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="暴风大剑">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td data-name="无尽之刃"></td>\
          <td data-name="海克斯科技枪刃"></td>\
          <td data-name="神圣之剑"></td>\
          <td data-name="朔极之矛"></td>\
          <td data-name="守护天使"></td>\
          <td data-name="饮血剑"></td>\
          <td data-name="基克的先驱"></td>\
          <td data-name="幽梦之灵"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['无用大棒'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['无用大棒'].name +'</div>\
                <div>'+ res['无用大棒'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="无用大棒">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td data-name="灭世者的死亡之帽"></td>\
          <td data-name="鬼索的狂暴之刃"></td>\
          <td data-name="卢登的回声"></td>\
          <td data-name="钢铁烈焰之匣"></td>\
          <td data-name="离子火花"></td>\
          <td data-name="莫雷洛秘典"></td>\
          <td data-name="悠米"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['反曲之弓'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['反曲之弓'].name +'</div>\
                <div>'+ res['反曲之弓'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="反曲之弓">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td data-name="疾射火炮"></td>\
          <td data-name="斯塔缇克电刃"></td>\
          <td data-name="幻影之舞"></td>\
          <td data-name="诅咒之刃"></td>\
          <td data-name="巨型九头蛇"></td>\
          <td data-name="破败王者之刃"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['女神之泪'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['女神之泪'].name +'</div>\
                <div>'+ res['女神之泪'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="女神之泪">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td data-name="炽天使之拥"></td>\
          <td data-name="冰霜之心"></td>\
          <td data-name="肃静"></td>\
          <td data-name="救赎"></td>\
          <td data-name="暗裔"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['锁子甲'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['锁子甲'].name +'</div>\
                <div>'+ res['锁子甲'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="锁子甲">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td data-name="荆棘之甲"></td>\
          <td data-name="折剑者"></td>\
          <td data-name="蜥蜴长老之赐"></td>\
          <td data-name="骑士之誓"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['负极斗篷'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['负极斗篷'].name +'</div>\
                <div>'+ res['负极斗篷'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="负极斗篷">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td data-name="巨龙之爪"></td>\
          <td data-name="灵风"></td>\
          <td data-name="卢安娜的飓风"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['巨人腰带'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['巨人腰带'].name +'</div>\
                <div>'+ res['巨人腰带'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="巨人腰带">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td data-name="狂徒铠甲"></td>\
          <td data-name="冰霜之锤"></td>\
        </tr>\
        <tr>\
          <td>\
            <div class="jdiw-45dw tab02-part">\
              <img src="'+ res['铲子'].pic +'"/>\
              <div class="tab02-info">\
                <div class="font16">'+ res['铲子'].name +'</div>\
                <div>'+ res['铲子'].description +'</div>\
              </div>\
            </div>\
            <div class="number-input" data-name="铲子">\
              <span class="nb-pre">-</span>\
              <input/>\
              <span class="nb-next">+</span>\
            </div>\
          </td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td></td>\
          <td data-name="自然之力"></td>\
        </tr>\
      </table>\
    ';

    oShengChengWrapper.innerHTML = _html
    var oTds = oShengChengWrapper.getElementsByTagName('td')

    ns.each(oTds, function (oTd) {
      var name = oTd.getAttribute('data-name')
      if(name) {
        oTd.className += ' mask'
        oTd.innerHTML = '\
          <div class="tab02-part">\
            <img src="'+ res[name].pic +'"/>\
            <div class="tab02-info">\
              <div class="font16">'+ res[name].name +'</div>\
              <div>'+ res[name].description +'</div>\
            </div>\
          </div>\
        '
      }
    })

    ns.each(ns.getByClass('number-input'), function (oInputWrapper) {
      var oInput = oInputWrapper.getElementsByTagName('input')[0]
      var oPre = ns.getByClass('nb-pre', oInputWrapper)[0]
      var oNext = ns.getByClass('nb-next', oInputWrapper)[0]
      var name = oInputWrapper.getAttribute('data-name')
      var num = 0

      oInput.value = num
      oNext.onclick = function () {
        changeValue('next')
      }

      oPre.onclick = function () {
        changeValue('pre')
      }

      oInput.oninput = function () {
        num = this.value
        changeValue(num)
        
      }

      function limitValue (num) {
        if(num<0) {
          num = 0
        }else if(num>10) {
          num = 10
        }      
        return num
      }

      function changeValue (data) {
        switch (data) {
          case 'pre':
            num = limitValue(ns._Number(num) - 1)
            break;
          case 'next':
            num = limitValue(ns._Number(num) + 1)
            break
          default:
            num = limitValue(ns._Number(num))
        }
        oInput.value = num
        res[name].num = num
        //console.log(res[name].name, res[name].num)
        
        ns.each(oTds, function (oTd) {
          var tdName = oTd.getAttribute('data-name')
          if(tdName) {
            var sMap = {}
            var mix = ns._Array(res[tdName].mix)
            var active = true
            for(var a=0; a<mix.length; a++){
              var b = mix[a]
              sMap[b.eq_name] = ns._Number(sMap[b.eq_name]) + 1
            }            
            for(var key in sMap) {      
              if(ns._Number(res[key].num)<sMap[key]) {
                active = false
                break;
              }            
            }
            if(active) {
              ns.addClass(oTd, 'active')
            } else {
              ns.removeClass(oTd, 'active')
            }
          }
        })
      }
    })
  } ();
})






function getZhengRongList () {
  if(window['LOL_HERO_ALL_LIST']) return;
  ns.ajax({
    url: host + '/site/lol-hero-all',
    data:{
      size: 60
    },
    success: function (res) {
      if(res.code==0) {
        var list = ns._Array(res.data)
        window['LOL_HERO_ALL_LIST'] = list
        renderZhengRongList(list)
        SelectCommon({
          title: '选择种族',
          el: document.getElementById('select-race-zr'),
          list: ns.mapJson(TFTrace_List, function (item, key) {
            return {
              key: key,
              label: item.race_name,
              traitID: item.traitID
            }
          }),
          onRender: function (item) {
            console.log('item', item)
            if(item.label!=='全部') {
              return '<img src="images/origins/'+ racePic[item.label] +'.jpg"/><span>'+ item.label +'</span>'
            } else {
              return item.label
            }
          },
          onSelect: function (item) {
            console.log(item)
            zrQuery.traitKEY = item.key
            renderZhengRongList(list)
          }
        })
        SelectCommon({
          el: document.getElementById('select-race-job'),
          title: '选择职业',
          list: JobList,
          onRender: function (item) {
            if(item.iconname) {
              return '<img src="images/classes/'+ item.iconname +'.jpg"/><span>'+ item.label +'</span>'
            } else {
              return item.label
            }
          },
          onSelect: function (item) {
            zrQuery.jobKEY = item.key
            renderZhengRongList(list)
            console.log(item)
          }
        })
      }
    }
  })
}





// 渲染阵容列表
function renderZhengRongList (list) {
  var html_wrapper = ''
  ns.each(list, function (item, index) {
    var canShow = true; // 是否可显示
    var m48 = JSON.parse(item.json)
    if(zrQuery.traitKEY) {
      canShow = false
      for(var a=0; a<m48.length; a++) {
        var hero = getHeroByName(m48[a].name)
        if(hero && hero.race==zrQuery.traitKEY) {
          canShow = true;
        }
      }
    }
    if(!canShow) return false;

    if(zrQuery.jobKEY) {
      canShow = false
      for(var a=0; a<m48.length; a++) {
        var hero = getHeroByName(m48[a].name)
        if(hero && hero.job==zrQuery.jobKEY) {
          canShow = true
        }
      }
    }
    if(!canShow) return false;

    
    
    var html_race = ''
    var html_hero = ''    
    var partRace = {}

    html_wrapper += '<div data-index="'+ index +'" class="kskks456">\
        <div class="sd5w-54s5d">\
          <div class="piuie688w">'+ (index + 1) +'</div>\
          <div class="cjs1123546">吃鸡>'+ item.num +'w</div>\
        </div>\
        <div class="sd3945w">\
    ';
    ns.each(m48, function (d) {
      var hero = getHeroByName(d.name)
      if(!hero) return false;
      for(var key in TFTrace_List) {
        var tra = TFTrace_List[key]     
        //console.log('tra', tra)  
        if(key==hero.race) {
          partRace[tra.race_name] = ns._Object(partRace[tra.race_name])
          var tMax = -1
          ns.each(tra.level, function (d) {
            var o = ns._Number(d.name)
            if(o>tMax) tMax = o;
          })
          partRace[tra.race_name].num = ns._Number(partRace[tra.race_name].num) + 1
          partRace[tra.race_name].max = tMax
          break;
        }
      }
      html_hero += '<div class="hero-dwem12 tab02-part">\
        <img src="'+ getHeroIcon(hero.heroId) +'"/>\
      </div>';
    })
    for(var key in partRace) {
      var rcItem = partRace[key]
      html_race += '<div class="mz-idw45w">\
        <img src="images/origins/'+ racePic[key] +'.jpg"/>\
        <span>'+ key +'('+ rcItem.num +'/'+ rcItem.max +')</span>\
      </div>';
    }

    html_wrapper += '\
            <div class="d71d5w">'+ html_race +'</div>\
            <div class="mmkjow52">'+ html_hero +'</div>\
          </div>\
        </div>\
      </div>\
    ';
    
  })

  document.getElementById('zr-list-465').innerHTML = html_wrapper  
 
  var oLists = ns.getByClass('kskks456')
  var preIndex = -1
  ns.each(oLists, function (item) {
    item.onclick = function () {
      var index = item.getAttribute('data-index')
      if(preIndex!==index) {
        preIndex = index
        ns.onlyOneAddClass(oLists, index, 'active')
        getTuiJian(list[index], oLists)  
      }
    }
  })
}


function getTuiJian (data, oLists) {
  var list = JSON.parse(data.json)
  var eqlist = {}
  var heroRank = {}
  var shanghai_num = 0;
  var fangyu_num = 0;
  ns.each(list, function (item) {
    var hero = getHeroByName(item.name)
    if(hero) {      
      hero.level = ns._Array(hero.level)
      var maxLevel = ns._Object(hero.level[hero.level.length-1])    
      shanghai_num += ns._Number(maxLevel.damage)
      fangyu_num += ns._Number(maxLevel.armor)
      heroRank[hero.price] = ns._Array(heroRank[hero.price])
      heroRank[hero.price].push(hero)
      ns.each(ns.split(hero.equipment, ','), function (eq) {
        var fd = equipmentId(eq)
        if(fd.name) {
          eqlist[fd.eq_name] = fd
          eqlist[fd.eq_name].forHero = ns._Array(eqlist[fd.eq_name].forHero)
          eqlist[fd.eq_name].forHero.push(hero)
        }
      })
    }
  })
  
  var eqArr = []
  for(var key in eqlist) {
    eqArr.push(eqlist[key])
  }
  eqArr.sort(function (a, b) {    
    if(a.forHero.length===b.forHero.length){
      var expensive_a = 0
      var expensive_b = 0
      ns.each(a.forHero,function (t) {
        if(expensive_a<=t) {
          expensive_a = t 
        }
      })
      ns.each(b.forHero,function (t) {
        if(expensive_b<=t) {
          expensive_b = t 
        }
      })
      return expensive_a > expensive_b ? 1 : -1
    } else {
      return a.forHero.length>b.forHero.length ? 1 : -1
    }
  })
  var HeroRankArr = []
  for(var key in heroRank) {
    HeroRankArr.push({
      price: key,
      list: heroRank[key]
    })
  }

  HeroRankArr.sort(function (a, b) { return ns._Number(a.price) > ns._Number(b.price) ? 1 : -1 })

  var oQianqi = document.getElementById('qianqituijidw1212') 
  var oZhongqi = document.getElementById('jdpiky155w4') 
  var oHouqi = document.getElementById('mopdkt4w') 

  switch(HeroRankArr.length) {
    case 0:
      oQianqi.style.display = 'none'
      oZhongqi.style.display = 'none'
      oHouqi.style.display = 'none'
      break;
    case 1:
      oZhongqi.style.display = 'none'
      oHouqi.style.display = 'block'
      renderQZH(oQianqi, [HeroRankArr[0]])
      break;
    default:
      renderQZH(oQianqi, [HeroRankArr[0]])
      renderQZH(oZhongqi, [HeroRankArr[1]])
      oQianqi.style.display = 'block'
      oZhongqi.style.display = 'block'
      oHouqi.style.display = 'block'
  }
  if(HeroRankArr.length) {
    renderQZH(oHouqi, HeroRankArr)
  }

  function renderQZH (oFather, list) {
    var _qqhtml = ''
    ns.each(list, function (c) {
      ns.each(c.list, function (b) {
        _qqhtml += '<div class="tab02-part zd15w6dw6">\
          <img src="'+ getHeroIcon(b.heroId) +'"/>\
          <div class="tab02-info">\
            <div class="font16">'+ b.hero_name +'</div>\
            <div>'+ b.skill_introduce +'</div>\
          </div>\
        </div>'
      })
    })
    ns.getByClass('myk1gge5w', oFather)[0].innerHTML = _qqhtml
  }

  var _html = ''
  ns.each(eqArr, function (item, index) {
    if(index>5) return true;
    var he_html = ''
    ns.each(item.forHero, function (h) {
      he_html += '<img class="sjiew152456w" src="'+ getHeroIcon(h.heroId) +'"/>'
    })
    _html += '\
      <div class="mikew1211">\
        <div class="tab02-part bigzb">\
          <img src="'+ item.pic +'"/>\
          <div class="tab02-info">\
            <div class="font16">'+ item.name +'</div>\
            <div style="padding:3px 0;">'+ he_html +'</div>\
            <div>'+ item.description +'</div>\
          </div>\
        </div>\
        <span class="fh156">=</span>\
        <div class="tab02-part xmzb">\
          <img src="'+ item.mix[0].pic +'"/>\
          <div class="tab02-info">\
            <div class="font16">'+ item.mix[0].name +'</div>\
            <div>'+ item.mix[0].description +'</div>\
          </div>\
        </div>\
        <span class="fh156">+</span>\
        <div class="tab02-part xmzb">\
          <img src="'+ item.mix[1].pic +'"/>\
          <div class="tab02-info">\
            <div class="font16">'+ item.mix[1].name +'</div>\
            <div>'+ item.mix[1].description +'</div>\
          </div>\
        </div>\
      </div>'
    ;
  });
  ns.getById('fangyu305w').innerHTML = shanghai_num
  ns.getById('niwe154').innerHTML = fangyu_num
  document.getElementById('hxzblist').innerHTML = _html
  document.getElementById('amow1212').style.display = 'block'
  document.getElementById('koo12').onclick = function () {
    document.getElementById('amow1212').style.display = 'none'
    ns.each(oLists, function (oList) {
      ns.removeClass(oList, 'active')
    })
  }
}




function toggleMainWrapper () {
  if(ns.hasClass(document.body, 'open')) {
    ns.removeClass(document.body, 'open')
  } else {
    ns.addClass(document.body, 'open')
  }
}



/**
 * 拖拽
 * @param {Object} opt
 *    @param {Element} opt.oHandle 拖拽触发对象
 *    @param {Element} opt.oWrapper 拖拽相应容器
 *    @param {Element} opt.oFather 拖拽父级容器，默认body 
 * @return {Object}
 *    @param {Function} updateFahter 更新父容器
 */

// 拖拽
bestime.ready(function () {
  bestime.drag({
    oHandle: document.getElementById('drag-bar'),
    oWrapper: document.getElementById('drag-content')
  })

  var oZn = document.getElementById('tab-kjdiwoiet')
  var oYY = document.getElementById('tab-yxzl-yy')
  oZn.onclick = function () {
    if(ns.hasClass(oZn, 'active')) {
      ns.removeClass(oZn, 'active')
    } else {
      ns.addClass(oZn, 'active')
    }
    oYY.style.display = oYY.style.display ==='block' ? 'none' : 'block'
  }
})
