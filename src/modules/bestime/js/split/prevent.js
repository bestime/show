//阻止冒泡及默认行为
export default function prevent (ev) {
    ev = ev ? ev : window.event;
    window.event? window.event.cancelBubble = true : ev.stopPropagation();
    window.event? window.event.returnValue = false : ev.preventDefault();
}