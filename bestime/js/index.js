// 版本测试

import $getType from './split/getType' 
import $isPhone from './split/isPhone'
import $trim from './split/trim'
import $getRandom from './split/getRandom' 
import $createUUID from './split/createUUID'
import $average from './split/average'
import $fixed from './split/fixed'

import $_Number from './split/_Number' 
import $_Function from './split/_Function'
import $_Object from './split/_Object' 
import $_Array from './split/_Array'
import $_Boolean from './split/_Boolean'
import $_String from './split/_String'

import $isObject from './split/isObject'
import $isArray from './split/isArray'
import $isFunction from './split/isFunction'
import $isString from './split/isString'
import $getNowTime from './split/getNowTime'
import $zero from './split/zero'

import $oFetch from './split/oFetch'
import $isEmpty from './split/isEmpty'
import $clear from './split/clear'
import $clone from './split/clone'
import $each from './split/each'
import $toClass from './split/toClass'
import $getCookie from './split/getCookie'
import $setCookie from './split/setCookie'
import $removeCookie from './split/removeCookie'
import $split from './split/split'
import $toNumber from './split/toNumber'
import $isNumber from './split/isNumber'
import $barCode from './split/barCode'
import $bus from './split/bus'
import $dialog from './split/dialog'
import $loading from './split/loading'
import $fillHtml from './split/fillHtml'
import $addClass from './split/addClass'
import $hasClass from './split/hasClass'
import $removeClass from './split/removeClass'
import $removeElement from './split/removeElement'
import $unique from './split/unique'
import $getByClass from './split/getByClass'
import $getById from './split/getById'
import $numberMin from './split/numberMin'
import $numberMax from './split/numberMax'
import $sleep from './split/sleep'
import $onDomRoll from './split/onDomRoll'
import $prevent from './split/prevent'
import $domShowDir from './split/domShowDir'
import $getScrollPosition from './split/getScrollPosition'
import $getRelativePos from './split/getRelativePos'
import $getWindowSize from './split/getWindowSize'
import $bind from './split/bind'
import $unbind from './split/unbind'
import $getQuery from './split/getQuery'
import $createExcel from './split/createExcel'
import $convertTime from './split/convertTime'
import $drag from './split/drag'
import $createStyleElement from './split/createStyleElement'
import $getStyle from './split/getStyle'
import $Parabola from './split/Parabola'
import $defaultType from './split/defaultType'
import $throttle from './split/throttle'
import $debounce from './split/debounce'
import $FunctionOnce from './split/FunctionOnce'
import $FunctionConfirm from './split/FunctionConfirm'
import $FunctionLoop from './split/FunctionLoop'
import $Progress from './split/Progress'
import $ready from './split/ready'
import $getJsPath from './split/getJsPath'
import $getMonthInfo from './split/getMonthInfo'
import $backTop from './split/backTop'
import $getEventTarget from './split/getEventTarget'
import $mouseWheel from './split/mouseWheel'
import $bindEasy from './split/bindEasy'
import $thousands from './split/thousands'
import $html from './split/html'
import $getImgSize from './split/getImgSize'
import $getUserFromIdCard from './split/getUserFromIdCard'
import $onlyOneAddClass from './split/onlyOneAddClass'
import $replaceCustom from './split/replaceCustom'
import $https from './split/https'
import $reduce from './split/reduce'
import $numberLimit from './split/numberLimit'
import $Pager from './split/Pager'


export const getType = $getType
export const isPhone = $isPhone
export const trim = $trim
export const getRandom = $getRandom
export const createUUID = $createUUID
export const average = $average
export const fixed = $fixed


export const defaultType = $defaultType
export const _Number = $_Number
export const _Function = $_Function
export const _Object = $_Object
export const _Array = $_Array
export const _Boolean = $_Boolean
export const _String = $_String

export const isObject = $isObject
export const isArray = $isArray
export const isString = $isString
export const isNumber = $isNumber
export const isFunction = $isFunction
export const isEmpty = $isEmpty
export const clear = $clear
export const clone = $clone
export const each = $each
export const toClass = $toClass
export const getCookie = $getCookie
export const setCookie = $setCookie
export const removeCookie = $removeCookie
export const split = $split
export const toNumber = $toNumber
export const fillHtml = $fillHtml
export const addClass = $addClass
export const hasClass = $hasClass
export const removeClass = $removeClass
export const removeElement = $removeElement
export const unique = $unique
export const getByClass = $getByClass
export const getById = $getById
export const numberMin = $numberMin
export const numberMax = $numberMax
export const sleep = $sleep
export const onDomRoll = $onDomRoll
export const domShowDir = $domShowDir
export const prevent = $prevent
export const getScrollPosition = $getScrollPosition
export const getRelativePos = $getRelativePos
export const getWindowSize = $getWindowSize
export const bind = $bind
export const unbind = $unbind
export const getQuery = $getQuery
export const convertTime = $convertTime
export const getStyle = $getStyle
export const barCode = $barCode
export const createExcel = $createExcel
export const createStyleElement = $createStyleElement
export const drag = $drag
export const Parabola = $Parabola
export const bus = $bus
export const oFetch = $oFetch
export const dialog = $dialog
export const loading = $loading

export const throttle = $throttle
export const debounce = $debounce
export const FunctionOnce = $FunctionOnce
export const FunctionConfirm = $FunctionConfirm
export const FunctionLoop = $FunctionLoop
export const getNowTime = $getNowTime
export const zero = $zero
export const Progress = $Progress
export const ready = $ready
export const getJsPath = $getJsPath
export const getMonthInfo = $getMonthInfo
export const backTop = $backTop
export const getEventTarget = $getEventTarget
export const mouseWheel = $mouseWheel
export const bindEasy = $bindEasy
export const thousands = $thousands
export const html = $html
export const getImgSize = $getImgSize
export const getUserFromIdCard = $getUserFromIdCard
export const onlyOneAddClass = $onlyOneAddClass
export const replaceCustom = $replaceCustom
export const https = $https
export const reduce = $reduce
export const numberLimit = $numberLimit
export const Pager = $Pager
// 设置本地存储
export function setStorage (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 获取本地存储
export function getStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  }catch(e) {
    return ''
  }
}

// 删除本地存储
export function removeStorage(key) {
  localStorage.removeItem(key);
}