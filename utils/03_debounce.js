/**
 * 函数节流
 * 
 * 多次连续触发函数调用，只会在固定时间间隔进行调用
 * 很多情况下，最后一次的调用不会被触发
 */

function debounce(fn, time) {
    let timeId = null;

    return function(...args) {
        timeId && clearTimeout(timeId);
        timeId = setTimeout(function () {
            fn.apply(this, args);
        },time);
    }
}

let nums = 0;

const test = debounce(function() {
    nums++;
    console.log(`result: run ${nums} times`);
}, 100);

for (let i = 0; i < 100; i++) {
    test();
}
