(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{1479:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/GameBoard/GameBoard",function(){return t(2647)}])},2647:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return d}});var a=t(5893),u=t(7294),i=t(3439),c=t.n(i),l=t(5329),s=t(8410),f=t(5356);var d=function(e){var n=function(e){2==e.button?m(2):m(1)},t=function(e){m(0)},r=function(e){if(h){var n,t,r=27;C>=768&&(r=52),console.log;var o=S?1:2;2==h&&(o=1==o?2:1);var a,u=null===(n=d.current)||void 0===n?void 0:n.getBoundingClientRect().x,c=null===(t=d.current)||void 0===t?void 0:t.getBoundingClientRect().y,l=0;e.touches?(a=e.touches[0].clientX,l=e.touches[0].clientY):(a=e.clientX,l=e.clientY),i(Math.floor((l-c)/r),Math.floor((a-u)/r),0==b?o:0)}},i=function(e,n,t){var r=j;e<v&&n<v&&e>-1&&n>-1&&(r[e][n]=t,T(o(r)))},d=(0,u.useRef)(null),v=e.boardSize,h=e.getClickState,m=e.setClickState,g=e.key,_=e.rows,p=e.columns,w=(0,u.useState)(void 0),b=w[0],y=w[1],C=(0,f.default)()[0],x=(0,u.useState)(!0),S=x[0],B=x[1],M=(0,u.useState)(o([])),j=M[0],T=M[1];return(0,u.useEffect)((function(){!function(){for(var e=[],n=0;n<v;n++){for(var t=[],r=0;r<v;r++)t.push(0);e.push(o(t))}T(o(e))}()}),[g]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:d,className:c().gameBoard,onMouseDown:n,onTouchStart:n,onMouseUp:t,onTouchEnd:t,onTouchMove:r,onMouseMove:r,children:function(){for(var e=function(e){n.push((0,a.jsx)(l.default,{className:c().gameRow,children:function(){for(var n=[],t=0;t<v;t++)n.push((0,a.jsx)(s.default,{clickState:h,row:e,column:t,getArray:j,updateArray:i,getBeforeTile:b,setBeforeTile:y,getTapFillMode:S},e+"-"+t));return n}()},e))},n=[],t=0;t<v;t++)e(t);return n}()}),(0,a.jsxs)("div",{className:c().buttons,children:[(0,a.jsx)("button",{onClick:function(){for(var e=0;e<v;e++)for(var n=0;n<v;n++)i(e,n,0);y(void 0)},children:"Reset"}),(0,a.jsx)("button",{onClick:function(){for(var e=0;e<_.length;e++){for(var n=j[e],t=0,r="",o=0;o<n.length;o++)1==n[o]?(t++,o+1==n.length&&(r=r.concat(t,","))):0!=t&&(r=r.concat(t,","),t=0);if(r=r.substring(0,r.length-1),_[e]!=r)return void alert(_[e]+" and "+r)}for(var a=0;a<p.length;a++){for(var u=[],i=0;i<_.length;i++)u.push(j[i][a]);for(var c=0,l="",s=0;s<u.length;s++)1==u[s]?(c++,s+1==u.length&&(l=l.concat(c,","))):0!=c&&(l=l.concat(c,","),c=0);if(l=l.substring(0,l.length-1),p[a]!=l)return void alert(p[a]+" and "+l)}alert("Yay!")},children:"Check"})]}),(0,a.jsxs)("label",{className:c().switch,children:[(0,a.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(){B(!S)}}),(0,a.jsx)("span",{className:c().slider})]})]})}},8410:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=(t(7294),t(8182)),a=t.n(o);n.default=function(e){var n=function(){return s&&s[c]?s[c][l]:void 0},t=function(e){f(c,l,e)},o=function(e){"onTouchStart"!=e._reactName&&e.preventDefault(),i(n()),2!=e.button&&d?0==n()?t(1):t(0):0==n()?t(2):t(0)},u=function(e){e.preventDefault(),i(void 0)},i=e.setBeforeTile,c=e.row,l=e.column,s=e.getArray,f=e.updateArray,d=e.getTapFillMode;return(0,r.jsx)("div",{className:"".concat(a().gameCell," ").concat(1==n()?a().filled:2==n()?a().crossed:""),onMouseDown:o,onTouchStart:o,onMouseUp:u,onTouchEnd:u,onContextMenu:function(e){return e.preventDefault()}})}},5329:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7933),a=t.n(o);n.default=function(e){var n=e.children;return(0,r.jsx)("div",{className:a().gameRow,children:n})}},5356:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(7294);function o(){var e=function(){return[n?window.innerWidth:null,n?window.innerHeight:null]},n=!0,t=(0,r.useState)(e()),o=t[0],a=t[1];return(0,r.useEffect)((function(){if(n){var t=function(){a(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n]),o}},3439:function(e){e.exports={gameBoard:"GameBoard_gameBoard__uQH_y",buttons:"GameBoard_buttons__sIMf2",switch:"GameBoard_switch__8DBCM",slider:"GameBoard_slider__LHVcD"}},8182:function(e){e.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}},7933:function(e){e.exports={gameRow:"GameRow_gameRow__uEYwx"}}},function(e){e.O(0,[774,888,179],(function(){return n=1479,e(e.s=n);var n}));var n=e.O();_N_E=n}]);