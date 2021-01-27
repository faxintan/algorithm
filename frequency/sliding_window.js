/**
 * 滑动窗口算法框架
 * 
 * 双指针技巧（滑动窗口技）：维护一个窗口，不断滑动，然后更新答案
 * 
 * @example
 * ```
 * void slidingWindow(string s, string t) {
 *   unordered_map<char, int> need, window;
 *   for (char c : t) need[c]++;

 *   int left = 0, right = 0;
 *   int valid = 0; 
 *   while (right < s.size()) {
 *       // c 是将移入窗口的字符
 *       char c = s[right];
 *       // 右移窗口
 *       right++;
 *       // 进行窗口内数据的一系列更新
 *       ...
 *       // debug 输出的位置
 *       printf("window: [%d, %d)\n", left, right);
 *       
 *       // 判断左侧窗口是否要收缩
 *       while (window needs shrink) {
 *           // d 是将移出窗口的字符
 *           char d = s[left];
 *           // 左移窗口
 *           left++;
 *           // 进行窗口内数据的一系列更新
 *           ...
 *       }
 *   }
 * }
 * ```
 */

 /**
  * 最小覆盖子串
  * 
  * @link https://mmbiz.qpic.cn/sz_mmbiz_png/gibkIz0MVqdGQlBxOlAet1AXGPoibCzEowk6hiaxmGN6ibHiaTqxHMqYvCRA4lWuRCQicPSfZY78De1GmwkXviar4psjw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
  * 
  * 1.在字符串S中使用双指针中的左右指针技巧，初始化left = right = 0，把索引左闭右开区间[left, right)称为一个「窗口」
  * 2.不断地增加right指针扩大窗口[left, right)，直到窗口中的字符串符合要求（包含了T中的所有字符）
  * 3.停止增加right，转而不断增加left指针缩小窗口[left, right)，直到窗口中的字符串不再符合要求（不包含T中的所有字符了）。同时，每次增加left，我们都要更新一轮结果
  * 4.重复第 2 和第 3 步，直到right到达字符串S的尽头
  */
function slidingWindow(s, t) {
    let need = {};
    let window = {};

    // 初始化need窗口
    t.split('').forEach((char) => {
        need[char] = (need[char] || 0) + 1;
    });

    let valid = 0;
    let left = 0, right = 0;
    let start, len = Infinity; // 记录最小覆盖子串的起始索引及长度

    while(right < s.length) {
        // char 是将移入窗口的字符
        const char = s[right];

        // 右移窗口
        right++;

        // 进行窗口内数据的一系列更新
        if (need[char]) {
            window[char] = (window[char] || 0) + 1;
            if (window[char] === need[char]) {
                valid++; // 满足条件标识
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid === Object.keys(need).length) {
            // 更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            // d 是将移除窗口的字符
            const d = s[left];
            
            // 左移窗口
            left++;

            // 进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    // 返回最小覆盖子串
    return len === Infinity ? '' : s.substr(start, len);
}

console.log('最小覆盖子串: ', slidingWindow('hahatest', 'he'));


/**
 * 字符串排列
 * 
 * @link https://mmbiz.qpic.cn/sz_mmbiz_png/gibkIz0MVqdGQlBxOlAet1AXGPoibCzEowmo3G9oN6XDmHeHjGic6tUauwoZia40pxjbicJXtN1RcjMMRDkfcGaVNVg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
 * 
 * 相当给你一个S和一个T，请问你S中是否存在一个子串，包含T中所有字符且不包含其他字符？
 * 
 * 基本上和最小覆盖子串一模一样，只需要改变两个地方：
 * 1、本题移动left缩小窗口的时机是窗口大小大于t.size()时，因为排列嘛，显然长度应该是一样的。
 * 2、当发现valid == need.size()时，就说明窗口中就是一个合法的排列，所以立即返回true。
 */
function checkInClusion(t, s) {
    const need = {};
    const window = {};

    t.split('').forEach((char) => {
        need[char] = (need[char] || 0) + 1;
    });

    let valid = 0;
    let left = 0, right = 0;

    while (right < s.length) {
        const char = s[right];
        right++;

        // 更新窗框状态
        if (need[char]) {
            window[char] = (window[char] || 0) + 1;
            if (window[char] === need[char]) {
                valid++;
            }
        }

        // 判断窗口是否需要优化 (需要符合长度相同规则)
        while(right - left >= t.length) {
            if (valid === Object.keys(need).length) {
                return true;
            }

            const d = s[left];
            left++; // 向左移动窗口

            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d] && window[d]--;
            }
        }
    }

    return false;
}

console.log('是否包含字符串排列', checkInClusion('ab', 'eidbatest'));


/**
 * 找所有字母异位词
 * 
 * 输入一个串S，一个串T，找到S中所有T的排列，返回它们的起始索引
 */
function findAnagrams(s, t) {
    let need = {}, window = {};

    t.split('').forEach((c) => {
        need[c] = (need[c] || 0) + 1;
    })

    let valid = 0;
    let left = 0, right = 0;
    let match = [];
    
    while(right < s.length) {
        const char = s[right];
        right++; // 右移窗口(扩大窗口)

        // 更新窗口信息
        if (need[char]) {
            window[char] = (window[char] || 0) + 1;
            if (need[char] === window[char]) {
                valid++;
            }
        }

        // 限制窗口宽度（查找子字符串，不能存在额外的多余字符）
        while(right - left >= t.length) {
            // 判断是否满足条件
            if (valid === Object.keys(need).length) {
                match.push([left, right]);
            }
            const b = s[left];
            left++; // 左移窗口(优化窗口大小)
            
            // 更新窗口信息
            if (need[b]) {
                if (need[b] === window[b]) {
                    valid--;
                }
                window[b]--;
                
            }
        }
    }

    return match;
}

console.log('找所有字母异位词', findAnagrams('cbaebabacd', 'abc'));


/**
 * 最长无重复子串
 * 
 * @link https://mmbiz.qpic.cn/sz_mmbiz_png/gibkIz0MVqdGQlBxOlAet1AXGPoibCzEowdOEyLaTVTiabiabMHr2Z7SzZZ08fxMDZt4uzzRcfvoI7sJzfdORvH0tA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1
 * 
 * 当window[c]值大于 1 时，说明窗口中存在重复字符，不符合条件，就该移动left缩小窗口了
 */
function lengthOfLongestSubstring(s) {
    let window = {};
    let left = 0, right = 0;
    let maxLen = 0;

    while(right < s.length) {
        const c = s[right];
        right++;
        window[c] = (window[c] || 0) + 1;

        // 判断是否要优化窗口
        while(window[c] > 1) {
            const b = s[left];
            left++;           
            window[b]--; 
        }

        // 每次窗口符合条件时都需要更新信息
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;
}

console.log('最长无重复子串: ', lengthOfLongestSubstring('pwwkew'));
