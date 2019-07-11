import convertTime from './convertTime'

//获取当前时间
function getNowTime () {
    return convertTime(new Date());
}

export default getNowTime