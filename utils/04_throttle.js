/**
 * 函数防抖动
 * 
 * 在规定时间内，如果连续多次触发函数调用，只有最后一次生效
 */

function throttle(fn, time) {
    let lastTime = Date.now();

    return function(...args) {
        console.log('');
        if (Date.now() - lastTime < time) return;
        lastTime = Date.now();
        fn.apply(this, args);
    }
}

let nums = 0;

const test = throttle(function() {
    nums++;
    console.log(`result: run ${nums} times`);
}, 10);

for (let i = 0; i < 10000; i++) {
    test();
}
