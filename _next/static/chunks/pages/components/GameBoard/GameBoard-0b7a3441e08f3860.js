(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{1479:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/GameBoard/GameBoard",function(){return t(2647)}])},2647:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return f}});var a=t(5893),u=t(7294),i=t(3439),c=t.n(i),l=t(5329),s=t(8410);t(7343);var f=function(e){for(var n=function(e,n,t){var r=w;r[e][n]=t,C(o(r))},t=e.boardSize,r=e.getClickState,i=e.setClickState,f=e.solution,d=(0,u.useState)(void 0),m=d[0],v=d[1],p=[],_=0;_<t;_++){for(var h=[],g=0;g<t;g++)h.push(0);p.push(o(h))}var y=(0,u.useState)(o(p)),w=y[0],C=y[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:c().gameBoard,onMouseDown:function(e){2==e.button?i(2):i(1)},onMouseUp:function(){return i(0)},children:function(){for(var e=function(e){o.push((0,a.jsx)(l.default,{className:c().gameRow,children:function(){for(var o=[],u=0;u<t;u++)o.push((0,a.jsx)(s.default,{clickState:r,row:e,column:u,getArray:w,updateArray:n,getBeforeTile:m,setBeforeTile:v},e+"-"+u));return o}()},e))},o=[],u=0;u<t;u++)e(u);return o}()}),(0,a.jsxs)("div",{className:c().buttons,children:[(0,a.jsx)("button",{onClick:function(){for(var e=0;e<t;e++)for(var r=0;r<t;r++)n(e,r,0);v(void 0)},children:"Reset"}),(0,a.jsx)("button",{onClick:function(){w.toString().replaceAll(",","").replaceAll("2","0")==f?alert("Yay!"):alert("Nope!")},children:"Check"})]})]})}},8410:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=(t(7294),t(8182)),a=t.n(o);n.default=function(e){var n=function(){return s&&s[c]?s[c][l]:void 0},t=function(e){f(c,l,e)},o=e.clickState,u=e.getBeforeTile,i=e.setBeforeTile,c=e.row,l=e.column,s=e.getArray,f=e.updateArray;return(0,r.jsx)("div",{className:"".concat(a().gameCell," ").concat(1==n()?a().filled:2==n()?a().crossed:""),onMouseDown:function(e){e.preventDefault(),i(n()),2==e.button?0==n()?t(2):t(0):0==n()?t(1):t(0)},onMouseEnter:function(e){1==o?u==n()&&(0==n()?t(1):t(0)):2==o&&u==n()&&(0==n()?t(2):t(0))},onMouseUp:function(e){e.preventDefault(),i(void 0)},onContextMenu:function(e){return e.preventDefault()}})}},5329:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7933),a=t.n(o);n.default=function(e){var n=e.children;return(0,r.jsx)("div",{className:a().gameRow,children:n})}},7343:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(5334),a=t.n(o);n.default=function(e){var n=e.children;return(0,r.jsx)("div",{className:a().HintCol,children:n})}},3439:function(e){e.exports={gameBoard:"GameBoard_gameBoard__uQH_y"}},8182:function(e){e.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}},7933:function(e){e.exports={gameRow:"GameRow_gameRow__uEYwx"}},5334:function(e){e.exports={HintCol:"HintCol_HintCol__Vk25h"}}},function(e){e.O(0,[774,888,179],(function(){return n=1479,e(e.s=n);var n}));var n=e.O();_N_E=n}]);