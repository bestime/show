function getEquipmentIcon (id) {
  return 'http://game.gtimg.cn/images/lol/tft/items/'+ id +'.png'
}

function getHeroIcon (id) {
  return 'http://game.gtimg.cn/images/lol/tft/cham-icons/'+ id +'.png'
}

function getHeroByName (name) {
  name = ns.trim(name)
  var res = null;
  for(var key in TFTHeroesData_List) {
    var item = TFTHeroesData_List[key]
    if(name===ns.trim(item.hero_name)) {
      res = item
      break;
    }
  }
  return ns.clone(res)
}


if(typeof TFTequipment_List!=='undefined') {
  TFTequipment_List['随机几率'] = {
    eq_name: '随机几率',
    pic: 'images/images/cstyle/TiersIcon.png',
    description: '',
    des_pic: 'images/self/suiji.png',
    is_equiment: false
  }

  TFTequipment_List['种族'] = {
    eq_name: '种族',
    pic: 'images/images/cstyle/Origins.png',
    description: '',
    des_pic: 'images/self/zhognzhu.png',
    is_equiment: false
  }

  TFTequipment_List['职业'] = {
    eq_name: '职业',
    pic: 'images/images/cstyle/Classes.png',
    description: '',
    des_pic: 'images/self/zhiye.png',
    is_equiment: false
  }
}

// 通过装备ID获取装备基本信息
function findEquipmentById (id) {
  var res = null
  for(var key in TFTequipment_List) { 
    if(ns.trim(TFTequipment_List[key]['equipmentId'])===id) {
      res = TFTequipment_List[key]
      break;
    }
  }
  res = ns._Object(res)
  res.eq_name = ns.trim(res.eq_name)
  res.description = res.eq_effect
  res.name = res.name || res.eq_name
  res.pic = res.pic || getEquipmentIcon(res.equipmentId)
  return ns.clone(res)
}

// 通过装备名获取装备基本信息
function findEquipmentName (name) {
  var res = null
  for(var key in TFTequipment_List) {
    if(ns.trim(TFTequipment_List[key]['eq_name'])===name) {
      res = TFTequipment_List[key]
      break;
    }
  }
  res = ns._Object(res)
  res.eq_name = ns.trim(res.eq_name)
  res.description = res.eq_effect
  res.name = res.name || res.eq_name
  res.pic = res.pic || getEquipmentIcon(res.equipmentId)
  return ns.clone(res)
}

function equipmentId (id) {
  var one = findEquipmentById(id)
  return equipment(one.name)
}

// 获取一个装备
function equipment (name) {
  var one = findEquipmentName(name)
  if(!one) return;
  
  one.mix = []

  var gpAll = []
  
  ns.each(ns.split(one.eq_formula, ','), function (id) {
    one.mix.push(findEquipmentById(id))
  })
  
  for(var key in TFTequipment_List) {
    var item = TFTequipment_List[key]
    var mixIds = ns.split(item.eq_formula, ',')
    var canMix = false
    ns.each(mixIds, function (mid) {
      if(mid===one.equipmentId) {
        return canMix = true
      }
    })
    if(canMix) {
      var findTimes = 0
      ns.each(mixIds, function (mid) {
        var fd = findEquipmentById(mid)
        if(fd) {
          if(mid===one.equipmentId) {
            findTimes++
            if(findTimes>1) {
              gpAll.push({
                add: fd,
                to: item
              })
            }
          }else {
            gpAll.push({
              add: fd,
              to: item
            })
          }
        }
      }) 
    }
  }

  var sortBy = {
    '暴风大剑': 1, 
    '反曲之弓': 2, 
    '无用大棒': 3, 
    '女神之泪': 4, 
    '巨人腰带': 5, 
    '锁子甲': 6, 
    '负极斗篷': 7, 
    '铲子': 8
  };

  gpAll.sort(function (a, b) {
    return sortBy[a.add.name] > sortBy[b.add.name] ? 1:-1
  })
  one.group = gpAll
  return one
}



// 选择装备
function SelectEquipment (id, onSelect) {
  var el = document.getElementById(id)
  var busInt,ddtimeer;
  ns.addClass(el, 'select-equipment')
  var _hms = ''
  var list = ns.mapJson(TFTequipment_List, function (item, key) {
    item.map_key = key
    return item
  })
  list.unshift({ equipmentId: null, eq_name: '全部' })

  console.log('list', list)

  ns.each(list, function (item) {
    if(item.is_equiment!==false) {
      if(item.equipmentId) {
        _hms += '<div class="eqz-part tab02-part">\
          <img src="'+ getEquipmentIcon(item.equipmentId) +'"/>\
          <div class="tab02-info">\
            <div class="font16">'+ item.eq_name +'</div>\
            <div>'+ item.eq_effect +'</div>\
          </div>\
        </div>';
      } else {
        _hms += '<div class="eqz-part tab02-part" style="background:rgba(0,0,0,0.8);"><span>全部</span></div>';
      }
    }
  })
 
  el.innerHTML = '\
    <div class="seq-title">\
      <div class="xz"><span>选择装备</span></div>\
    </div>\
    <div class="seq-more">'+ _hms +'</div>\
  ';
  var show = false
  var oXz = ns.getByClass('xz')[0]
  ns.getByClass('seq-title', el)[0].onclick = function () {
    if(!show) {
      open()
    } else {
      close()
    }
  }

  function open () {
    show = true
    ns.addClass(el, 'active')
    clearTimeout(ddtimeer)
    ddtimeer = setTimeout(function () {
      bus.clear(busInt)
      busInt = bus.on('select-z2wb', close)
    }, 50)
  }

  function close () {
    bus.clear(busInt)
    show = false
    ns.removeClass(el, 'active')
  }

  ns.each(ns.getByClass('eqz-part', el), function (item, index) {
    item.onclick = function () {
      close()
      var selectItem = list[index]
      if(selectItem.equipmentId) {
        var id = selectItem.equipmentId
        oXz.innerHTML = '<img src="'+ getEquipmentIcon(id) +'"/><span>'+ findEquipmentById(id).eq_name +'</span>'
      } else {
        oXz.innerHTML = '<span>'+ selectItem.eq_name +'</span>'
      }
      ns._Function(onSelect)(selectItem)      
    }
  })
}




// 下拉选择框
function SelectCommon (opt) {
  var el = opt.el
  var onRender = opt.onRender
  var onSelect = ns._Function(opt.onSelect)
  var more_html = ''
  ns.addClass(el, 'common-select-wrapper')
  const useList = [{ key: null, label: '全部' }].concat(ns._Array(opt.list))
  
  ns.each(useList, function (item) {
    more_html += '<li class="cms-part">'
    if(ns.isFunction(onRender)) {
      more_html += onRender(item)
    } else {
      more_html += item.label
    }
    more_html += '</li>'
  })
  race_html = '\
    <div class="cms-tit">\
      <div class="cms-1dw5">'+ opt.title +'</div>\
      <i class="cms-jianton"></i>\
    </div>\
    <ul class="cms-more" style="display:none;">'+ more_html +'</ul>\
  '
  el.innerHTML = race_html + '</div>'
  var oMore = ns.getByClass('cms-more', el)[0]
  var oTitle = ns.getByClass('cms-tit', el)[0]
  var oTitleLabel = ns.getByClass('cms-1dw5', el)[0]
  var oOds = ns.getByClass('cms-part', el)
  var isOpen = false
  var bbs;

  function show () {    
    isOpen = true
    oMore.style.display = 'block'
    ns.addClass(el, 'open')
    setTimeout(function () {
      bus.clear(bbs)
      bbs = bus.on('select-common', close)
    }, 50)
  }

  function close () {
    bus.clear(bbs)
    isOpen = false
    oMore.style.display = 'none'
    ns.removeClass(el, 'open')
  }

  oTitle.onclick = function () {
    if(!isOpen) {
      show()  
    } else {
      close()
    }    
  }


  ns.each(oOds, function (item, index) {
    item.onclick = function () {
      ns.onlyOneAddClass(oOds, index, 'active')
      var data = useList[index]
      onSelect(data, index)
      oTitleLabel.innerHTML = data.key===null ? opt.title : data.label
      close()
    }
  })
}

// 搜索框
function SearchBox (opt) {
  var el = opt.el
  var onEnter = ns._Function(opt.onEnter)
  var onInput = ns._Function(opt.onInput)
  ns.addClass(el, 'input-pg-wrapper')
  el.innerHTML = '\
    <i class="jiete5w"></i>\
    <div class="iptbox"><input spellcheck="false" placeholder="'+ opt.placeholder +'"/></div>\
  ';

  var oInput = el.getElementsByTagName('input')[0]
  var bbs;
  oInput.onfocus = function () {
    ns.addClass(el, 'focus')
    bbs = bus.on('key-enter', function () {
      onEnter(oInput.value)
    })
  }

  oInput.onblur = function () {
    ns.removeClass(el, 'focus')
    bus.clear(bbs)
  }

  oInput.oninput = function () {
    onInput(oInput.value)
  }
}

// 攻击范围选择
function SelectATKRange (el, callback) {
  var active = false
  ns.addClass(el, 'select-atk-wrapper')
  el.innerHTML = '\
    <div class="s-rang-tit">\
      <i class="dglw15e"></i>\
      <div class="kow1548w">选择攻击距离</div>\
    </div>\
    <div class="gk-e5we">\
      <div class="dmkow15">最小距离</div>\
      <div class="ko1g5w small"><input/></div>\
      <div class="dmkow15">最大距离</div>\
      <div class="ko1g5w big"><input/></div>\
    </div>\
  ';

  callback = ns._Function(callback)
  var smallVal,bigNum;
  var oSmall = ns.getByClass('small', el)[0].getElementsByTagName('input')[0]
  var oBig = ns.getByClass('big', el)[0].getElementsByTagName('input')[0]
  
  ns.getByClass('gk-e5we', el)[0].onclick = ns.prevent

  ns.getByClass('s-rang-tit', el)[0].onclick = function () {
    if(active) {
      close()
    } else {
      show()
    }
  }

  oBig.oninput = function () {
    bigNum = limitValue(this.value)
    if(bigNum<smallVal) {
      bigNum = smallVal
    }
    oBig.value = bigNum
    callback(smallVal, bigNum)
  }

  oSmall.oninput = function () {
    smallVal = limitValue(this.value)
    oSmall.value = smallVal
    callback(smallVal, bigNum)
  }

  function limitValue (str) {
    if(str==='' || typeof str==='undefined') return ''
    str = ns._Number(str)
    if(str<0) {
      str = 0
    }
    return str 
  }

  var ggs, timer;
  function show () {
    active = true
    ns.addClass(el, 'active')
    
    clearTimeout(timer)
    timer = setTimeout(function () {
      bus.clear(ggs)
      ggs = bus.on('select-atk-range', close)
    }, 50)
  }

  function close () {
    bus.clear(ggs)
    active = false
    ns.removeClass(el, 'active')
  }


}


var JobList = [
  { key: '1', label: '法师', iconname:'sorcerer'},
  { key: '2', label: '刺客', iconname:'assassin'},
  { key: '3', label: '剑士', iconname:'blademaster'},
  { key: '4', label: '斗士', iconname:'brawler'},
  { key: '5', label: '元素使', iconname:'elementalist'},
  { key: '6', label: '护卫', iconname:'guardian'},
  { key: '7', label: '枪手', iconname:'gunslinger'},
  { key: '8', label: '骑士', iconname:'knight'},
  { key: '9', label: '游侠', iconname:'ranger' },
  { key: '10', label: '换形师', iconname:'assassin'},
]


var racePic = {
  '恶魔': 'demon',
  '龙': 'dragon',
  '浪人': 'exile',
  '极地': 'glacial',
  '帝国': 'imperial',
  '忍者': 'ninja',
  '贵族': 'noble',
  '暗影': 'phantom',
  '海盗': 'pirate',
  '机器人': 'robot',
  '虚空': 'void',
  '狂野': 'wild',
  '约德尔人': 'yordle'
}