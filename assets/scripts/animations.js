function _fade_in (el, cb) {
    el.fadeIn(1500, cb);
}

function _queue(fn_list) {
    console.log('queue')
    const fn = fn_list.shift();
    if(fn) {
        console.log(fn);
        fn(function () { _queue(fn_list) });
    }
}

function _sleep(ms) {
    return function (cb) { setTimeout(cb, ms);}
}

function _wait_for_event(elem, event, cb) {
    elem.one(event, cb);
}

function _fade_in_element(elem, cb) {
    elem.delay(3000).show("fade", 3000, cb);
}

const animation_list = [
    function(cb){
        _wait_for_event($(".logo:first"), "animationend", cb);
    },
    _sleep(500),
    function(cb) {
        _fade_in($("#game"), cb);
    },
    function(cb) {
        _fade_in($("#git-icon"), cb);
    },
    function(cb) {
        _fade_in($("#li-icon"), cb);
    },
    function(cb) {
        _fade_in($("#brush"), cb);
    }
];

$(window).load(function () {
    _queue(animation_list);
});