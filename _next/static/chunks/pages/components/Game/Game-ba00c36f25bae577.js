(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{1062:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Game/Game",function(){return e(476)}])},476:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7294),i=e(6254),u=e(2647),a=e(2688),c=e.n(a);t.default=function(n){var t=function(n){l(0)},e=(0,o.useState)(0),a=e[0],l=e[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:c().gameCnt,onContextMenu:function(n){n.preventDefault(),l(0)},onMouseUp:t,onTouchEnd:t,children:[(0,r.jsx)(i.default,{boardSize:10,columns:[[3],[3,2],[2,4],[4],[2],[2],[4],[1,4],[1,2,2],[4]],rows:[[3,2],[3],[2,2],[4],[4],[2,2],[4,1],[4,2],[2,2],[1]]}),(0,r.jsx)(u.default,{boardSize:10,getClickState:a,setClickState:l,solution:"1110000110111000000011000011000000011110000001111000110011000111100001011110001100110000110000000001"})]})})}},2647:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(t),e.d(t,{default:function(){return f}});var i=e(5893),u=e(7294),a=e(3439),c=e.n(a),l=e(5329),s=e(8410);e(7343);var f=function(n){for(var t=function(n){2==n.button?m(2):m(1)},e=function(n){m(0)},r=function(n,t,e){var r=j;n<f&&t<f&&n>-1&&t>-1&&(r[n][t]=e,b(o(r)))},a=(0,u.useRef)(null),f=n.boardSize,d=n.getClickState,m=n.setClickState,v=n.solution,h=(0,u.useState)(void 0),_=h[0],p=h[1],g=[],C=0;C<f;C++){for(var x=[],w=0;w<f;w++)x.push(0);g.push(o(x))}var S=(0,u.useState)(o(g)),j=S[0],b=S[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{ref:a,className:c().gameBoard,onMouseDown:t,onTouchStart:t,onMouseUp:e,onTouchEnd:e,onTouchMove:function(n){var t,e,o=null===(t=a.current)||void 0===t?void 0:t.getBoundingClientRect().x,i=null===(e=a.current)||void 0===e?void 0:e.getBoundingClientRect().y;r(Math.floor((n.touches[0].clientY-i)/27),Math.floor((n.touches[0].clientX-o)/27),0==_?1:0)},children:function(){for(var n=function(n){t.push((0,i.jsx)(l.default,{className:c().gameRow,children:function(){for(var t=[],e=0;e<f;e++)t.push((0,i.jsx)(s.default,{clickState:d,row:n,column:e,getArray:j,updateArray:r,getBeforeTile:_,setBeforeTile:p},n+"-"+e));return t}()},n))},t=[],e=0;e<f;e++)n(e);return t}()}),(0,i.jsxs)("div",{className:c().buttons,children:[(0,i.jsx)("button",{onClick:function(){for(var n=0;n<f;n++)for(var t=0;t<f;t++)r(n,t,0);p(void 0)},children:"Reset"}),(0,i.jsx)("button",{onClick:function(){j.toString().replaceAll(",","").replaceAll("2","0")==v?alert("Yay!"):alert("Nope!")},children:"Check"})]})]})}},8410:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7294),i=e(8182),u=e.n(i);t.default=function(n){var t=function(){return m&&m[f]?m[f][d]:void 0},e=function(n){v(f,d,n)},i=function(n){"onTouchStart"!=n._reactName&&n.preventDefault(),s(t()),2==n.button?0==t()?e(2):e(0):0==t()?e(1):e(0)},a=function(n){n.preventDefault(),s(void 0),_(!1)},c=n.clickState,l=n.getBeforeTile,s=n.setBeforeTile,f=n.row,d=n.column,m=n.getArray,v=n.updateArray,h=(0,o.useState)(!1),_=(h[0],h[1]);return(0,r.jsx)("div",{className:"".concat(u().gameCell," ").concat(1==t()?u().filled:2==t()?u().crossed:""),onMouseDown:i,onTouchStart:i,onMouseEnter:function(n){1==c?l==t()&&(0==t()?e(1):e(0)):2==c&&l==t()&&(0==t()?e(2):e(0))},onMouseUp:a,onTouchEnd:a,onContextMenu:function(n){return n.preventDefault()}})}},5329:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7933),i=e.n(o);t.default=function(n){var t=n.children;return(0,r.jsx)("div",{className:i().gameRow,children:t})}},7343:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(5334),i=e.n(o);t.default=function(n){var t=n.children;return(0,r.jsx)("div",{className:i().HintCol,children:(0,r.jsx)("div",{className:i().inner,children:t})})}},6967:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(1662),i=e.n(o);t.default=function(n){var t=n.children;return(0,r.jsx)("div",{className:i().HintRow,children:t})}},6254:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7343),i=e(6967),u=e(3120),a=e.n(u);t.default=function(n){var t=n.boardSize,e=n.columns,u=n.rows;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:a().HintColumns,children:function(){for(var n=function(n){i.push((0,r.jsx)(o.default,{children:function(){for(var t=[],r=0;r<e[n].length;r++)r==e[n].length-1?t.push(e[n][r].toString()):t.push(e[n][r].toString()+" ");return t}()},"HintCol-"+n))},i=[],u=0;u<t;u++)n(u);return i}()}),(0,r.jsx)("div",{className:a().HintRows,children:function(){for(var n=function(n){e.push((0,r.jsx)(i.default,{children:function(){for(var t=[],e=0;e<u[n].length;e++)e==u[n].length-1?t.push(u[n][e].toString()):t.push(u[n][e].toString()+"\u3000");return t}()},"HintRow-"+n))},e=[],o=0;o<t;o++)n(o);return e}()})]})}},2688:function(n){n.exports={gameCnt:"Game_gameCnt__OWnkV"}},3439:function(n){n.exports={gameBoard:"GameBoard_gameBoard__uQH_y",buttons:"GameBoard_buttons__sIMf2"}},8182:function(n){n.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}},7933:function(n){n.exports={gameRow:"GameRow_gameRow__uEYwx"}},5334:function(n){n.exports={HintCol:"HintCol_HintCol__Vk25h",inner:"HintCol_inner__LES6b"}},1662:function(n){n.exports={HintRow:"HintRow_HintRow__7mFC0"}},3120:function(n){n.exports={HintColumns:"Hints_HintColumns__0miqN",HintRows:"Hints_HintRows__5CxRU"}}},function(n){n.O(0,[774,888,179],(function(){return t=1062,n(n.s=t);var t}));var t=n.O();_N_E=t}]);