(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t(0),o=t.n(a);t(1);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(t.push(c.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function n(e){var t,a,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,i=m(n).call(this,e),(t=!i||"object"!==r(i)&&"function"!=typeof i?l(a):i).toggleList=t.toggleList.bind(l(l(t))),t.list=[],Object.entries(e.data).forEach(function(n,a){var r=c(n,2),i=r[0];r[1];return t.list.push(o.a.createElement("li",{id:"list-".concat(a),key:"list-".concat(a),className:a||e.noOpen?"":"active",onClick:t.toggleList},i),o.a.createElement("div",{id:"content-".concat(a),key:"content-".concat(a),className:"list-content ".concat(a||e.noOpen?"":"active")},e.data[i]))}),t}var t,a,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,o.a.Component),t=n,(a=[{key:"toggleList",value:function(e){var n=e.currentTarget,t=n.id.substr(5),a=n.parentElement.querySelector("#content-"+t);a&&(n.classList.toggle("active"),a.classList.toggle("active"),window.location.hash="go-"+n.id)}},{key:"render",value:function(){return o.a.createElement("ul",{className:"enableOpen"},this.list)}}])&&i(t.prototype,a),s&&i(t,s),n}()},163:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(1),c=t.n(r),i=t(27),m=t(9),u={News:function(e){var n=e.data,t=e.lang,a=[];return n.forEach(function(e,n){a.push(o.a.createElement(i.a,{key:"news-".concat(n),style:{marginTop:"10px"}},o.a.createElement(m.a,{md:2,className:"date"},e.date),o.a.createElement(m.a,{md:1,xs:2,className:"type"},"en"===t?"grats":e.type),o.a.createElement(m.a,{md:9,xs:10},"en"===t&&e.description_en?e.description_en:e.description))),e.comment&&a.push(o.a.createElement(i.a,{key:"news-comment-".concat(n)},o.a.createElement(m.a,{md:3,xs:2}),o.a.createElement(m.a,{md:9,xs:10,className:"comment"},"en"===t&&e.comment_en?e.comment_en:e.comment)))}),a}};u.News.propTypes={lang:c.a.string.isRequired,data:c.a.array.isRequired},u.Honor=function(e){var n=e.data,t=e.lang;return n.map(function(e,n){return o.a.createElement(i.a,{key:"honor-".concat(n),style:{margin:"5px -15px"}},o.a.createElement(m.a,{md:3},"en"===t&&e.name_en?e.name_en:e.name),o.a.createElement(m.a,{md:9},"en"===t&&e.content_en?e.content_en:e.content))})},u.Honor.propTypes={lang:c.a.string.isRequired,data:c.a.array.isRequired},n.a=u},252:function(e){e.exports={award:"Awards",intern:"Internships",exchange:"Exchange Students",research:"Overseas Short-term Research"}},253:function(e){e.exports={award:"獲獎",intern:"實習",exchange:"交換學生",research:"國外短期研究"}},254:function(e){e.exports={award:{"year 2018":[{name:["劉俊林"],name_en:["Chan Lam Lao"],content:"成大資工系 108 級專題展 第二名",content_en:"The 2nd Place in 2018 NCKU CSIE Undergraduate Project Exhibition"},{name:["梁祐承","謝耀賢"],name_en:["You-Cheng Liang","Y.-S. Hsieh"],content:"成大資工系 108 級專題展 第三名",content_en:"The 3rd Place in 2018 NCKU CSIE Undergraduate Project Exhibition"},{name:["劉俊林"],content:"科技部大專生計畫"},{name:["方鈞麒"],content:"斐陶斐榮譽學會榮譽會員"},{name:["張鶴騰"],name_en:["He-Teng Chang"],content:"中華民國資訊學會 最佳碩博士論文獎優等",content_en:"IICM Master Thesis Award"},{name:["林佳瑩"],content:"Linux Foundation Scholarship (with invitation to attend ONS North America 2018)"},{name:["林佳瑩"],content:"Google Code Jam for Women 全球第 118名, 受邀前往 Mountain View 參加 Google I/O 2018"},{name:["林佳瑩"],content:"WeTech Qualcomm Global Scholars"}],"year 2017":[{name:["林佳瑩"],content:"IEEE CCNC Student Travel Grant"},{name:["張蕙玲,林佳瑩"],content:"科技部 補助博士生赴國外研究 獎助"},{name:["張鶴騰"],content:"台灣電機電子工程學會 最佳碩博士論文獎佳作"},{name:["蔡昀展"],content:"科技部大專生計畫研究創作獎"},{name:["方鈞麒,陳珞安"],content:"科技部大專生計畫"},{name:["林佳瑩"],name_en:["Chia-Ying Lin"],content:"GHC 獎學金 (Google 提供；並受邀前往美國參加 Grace Hopper Celebration of Women in Computing)",content_en:"GHC Scholarship (by Google; with invitation to attend Grace Hopper Celebration of Women in Computing)"},{name:["呂尚霖"],name_en:["Shang-Lin Lu"],content:"中華民國資訊學會 最佳碩博士論文獎佳作",content_en:"IICM Master Thesis Award"},{name:["蔡昀展","陸勇盛"],name_en:["Yun-Zhan Tsai","Y.-S. Lu"],content:"成大資工系 106 級專題展 佳作",content_en:"Honorable Poster Award in 2017 NCKU CSIE Undergraduate Project Exhibition"}],"year 2016":[{name:["蔡昀展"],content:"潘文淵獎學金"},{name:["張鶴騰"],content:"國際積體電路電腦輔助設計(CAD)軟體製作競賽 定題組B題 國內賽 優等"},{name:["楊靜妃"],content:"國際 iGEM 競賽金牌"},{name:["呂尚霖"],content:"台灣電機電子工程學會 最佳碩博士論文獎佳作"},{name:["朱宥繐"],content:"科技部大專生計畫研究創作獎"},{name:["蔡昀展"],content:"科技部大專生計畫"},{name:["楊靜妃","吳孟庭"],content:"Google Code Jam for Women 全球第 58名/127名, 受邀前往 Mountain View 參加 Google I/O 2016"},{name:["林佳瑩"],content:"Garmin 獎學金"},{name:["朱宥繐","楊靜妃","謝忠穎"],content:"成大資工系 105 級專題展 優等 / 人氣獎 第二名"}],"year 2015":[{name:["楊靜妃"],content:"洪肇奎博士獎助學金"},{name:["張鶴騰","呂宜龍"],content:"國際積體電路電腦輔助設計(CAD)軟體製作競賽 定題組B題佳作"},{name:["劉心慈"],content:"錄取新世紀領袖菁英培育班 (共同指導)"},{name:["張鶴騰"],content:"聯詠科技獎學金"},{name:["蘇珮華"],content:"斐陶斐榮譽學會榮譽會員"},{name:["朱宥繐"],content:"科技部大專生計畫"},{name:["林季伯"],content:"科技部大專生計畫 (共同指導)"},{name:["林佳瑩"],content:"中國工程師學會 優秀工程學生獎學金"}],"year 2014":[{name:["林佳瑩"],content:"洪肇奎博士獎助學金"},{name:["高宏瑋"],content:"中華民國資訊學會 最佳碩博士論文獎佳作"},{name:["楊靜妃"],content:"晨鐘獎學金"},{name:["楊靜妃"],content:"錄取新世紀領袖菁英培育班"}],"year 2013":[{name:["陳冠宇"],content:"科技部大專生計畫"}]},intern:{"year 2018":[{name:["廖其忻"],name_en:["Cayon Liow Keei Yann"],content:"台達電子",content_en:"Delta Electronics Inc."},{name:["蔡昀展,方鈞麒"],name_en:["Yun-Zhan Cai, Chun-Chi Fang"],content:"工研院 (ITRI)",content_en:"Industrial Technology Research Institute (ITRI)"}],"year 2017":[{name:["謝忠穎,陳蓓蓓"],name_en:["Chung-Ying Hsieh, Pei-Pei Chen"],content:"工研院 (ITRI)",content_en:"Industrial Technology Research Institute (ITRI)"},{name:["王俞婷"],name_en:["Yu-Ting Wang"],content:"威聯通科技 (QNAP)",content_en:"QNAP Systems Inc."},{name:["林賢哲"],name_en:["Sian-Jhe Lin"],content:"思銳科技 (EstiNet)",content_en:"EstiNet Technologies Inc."},{name:["張鶴騰"],name_en:["He-Teng Chang"],content:"瑞昱科技 (RealTek)",content_en:"RealTek"}],"year 2016":[{name:["吳孟庭"],content:"趨勢科技 (Trend Micro) 美國 Dallas 分公司"},{name:["林賢哲"],content:"趨勢科技 (Trend Micro)"},{name:["林佳瑩"],content:"Yahoo!"},{name:["蔡昀展,陸勇盛,方鈞麒"],content:"思銳科技 (EstiNet)"}],"year 2015":[{name:["張蕙玲,蘇容德"],content:"聯發科技 (MTK)"},{name:["林佳瑩"],content:"宏達電 (hTC)"},{name:["吳孟庭,林賢哲,黃筱涵"],content:"工研院 (ITRI)"},{name:["楊靜妃"],content:"美國 iwNetworks"}],"year 2014":[{name:["賴志豪"],content:"聯發科技 (MTK)"},{name:["蔡婉萍"],content:"女人迷 (Womany)"},{name:["李思穎"],content:"趨勢科技 (Trend Micro)"},{name:["呂宜龍"],content:"昱泉國際 (InterServ)"}],"year 2013":[{name:["賴志豪,蘇珮華,高宏瑋"],content:"IBM"}],"year 2012":[{name:["李冠賢"],content:"台積電 (TSMC)"}]},exchange:{"year 2017":[{name:["吳孟庭"],content:"德國 RWTH Aachen University"}],"year 2015":[{name:["賴志豪"],content:"美國 Temple 大學"}],"year 2014":[{name:["蘇珮華"],content:"北京清華大學"}]},research:{"year 2017":[{name:["劉俊林"],content:"香港大學(HKU)"},{name:["林佳瑩"],content:"德國 RWTH Aachen University"}],"year 2016":[{name:["呂宜龍"],content:"日本 北陸先端科學技術大學院大學 (JAIST)"},{name:["張鶴騰"],content:"加拿大 University of Ottawa (uOttawa)"}]}}},395:function(e,n,t){__NEXT_REGISTER_PAGE("/honor",function(){return e.exports=t(396),{page:e.exports.default}})},396:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=(t(1),t(28)),c=t(29),i=t(13),m=t(152),u=t(163),l=(t(63),t(252)),s=t(253),f=t(254);function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,o=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(t.push(c.value),!n||t.length!==n);a=!0);}catch(e){o=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){d(e,n,t[n])})}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default=Object(r.withRouter)(function(e){var n=e.router,t=n.query.title,a=n.query.lang||"zh-tw",r="en"===a?l:s,d=p({},f),g=[];return Object.entries(d).forEach(function(e){var n=h(e,1)[0],t=p({},d[n]);Object.entries(t).forEach(function(e){var n=h(e,1)[0],r=y(t[n]);t[n]=o.a.createElement(u.a.Honor,{data:r,lang:a})}),g.push(o.a.createElement(i.a,{key:n,title:r[n],ref:o.a.createRef()},o.a.createElement(m.a,{data:t})))}),o.a.createElement(c.a,{id:"honor-container",blocks:g,pathname:n.asPath,lang:a,title:t})})}},[[395,1,0]]]);