(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{1479:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/GameBoard/GameBoard",function(){return t(2647)}])},2647:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return d}});var u=t(5893),a=t(7294),i=t(3439),c=t.n(i),l=t(5329),s=t(8410),f=t(5356);var d=function(e){for(var n=function(e){2==e.button?h(2):h(1)},t=function(e){h(0)},r=function(e){if(m){var n,t,r=27;y>=768&&(r=52),console.log;var o=C?1:2;2==m&&(o=1==o?2:1);var u,a=null===(n=d.current)||void 0===n?void 0:n.getBoundingClientRect().x,c=null===(t=d.current)||void 0===t?void 0:t.getBoundingClientRect().y,l=0;e.touches?(u=e.touches[0].clientX,l=e.touches[0].clientY):(u=e.clientX,l=e.clientY),i(Math.floor((l-c)/r),Math.floor((u-a)/r),0==g?o:0)}},i=function(e,n,t){var r=T;e<v&&n<v&&e>-1&&n>-1&&(r[e][n]=t,A(o(r)))},d=(0,a.useRef)(null),v=e.boardSize,m=e.getClickState,h=e.setClickState,_=e.solution,p=(0,a.useState)(void 0),g=p[0],w=p[1],y=(0,f.default)()[0],b=(0,a.useState)(!0),C=b[0],x=b[1],S=[],B=0;B<v;B++){for(var M=[],j=0;j<v;j++)M.push(0);S.push(o(M))}var N=(0,a.useState)(o(S)),T=N[0],A=N[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{ref:d,className:c().gameBoard,onMouseDown:n,onTouchStart:n,onMouseUp:t,onTouchEnd:t,onTouchMove:r,onMouseMove:r,children:function(){for(var e=function(e){n.push((0,u.jsx)(l.default,{className:c().gameRow,children:function(){for(var n=[],t=0;t<v;t++)n.push((0,u.jsx)(s.default,{clickState:m,row:e,column:t,getArray:T,updateArray:i,getBeforeTile:g,setBeforeTile:w,getTapFillMode:C},e+"-"+t));return n}()},e))},n=[],t=0;t<v;t++)e(t);return n}()}),(0,u.jsxs)("div",{className:c().buttons,children:[(0,u.jsx)("button",{onClick:function(){for(var e=0;e<v;e++)for(var n=0;n<v;n++)i(e,n,0);w(void 0)},children:"Reset"}),(0,u.jsx)("button",{onClick:function(){T.toString().replaceAll(",","").replaceAll("2","0")==_?alert("Yay!"):alert("Nope!")},children:"Check"})]}),(0,u.jsxs)("label",{className:c().switch,children:[(0,u.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:function(){x(!C)}}),(0,u.jsx)("span",{className:c().slider})]})]})}},8410:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=(t(7294),t(8182)),u=t.n(o);n.default=function(e){var n=function(){return s&&s[c]?s[c][l]:void 0},t=function(e){f(c,l,e)},o=function(e){"onTouchStart"!=e._reactName&&e.preventDefault(),i(n()),2!=e.button&&d?0==n()?t(1):t(0):0==n()?t(2):t(0)},a=function(e){e.preventDefault(),i(void 0)},i=e.setBeforeTile,c=e.row,l=e.column,s=e.getArray,f=e.updateArray,d=e.getTapFillMode;return(0,r.jsx)("div",{className:"".concat(u().gameCell," ").concat(1==n()?u().filled:2==n()?u().crossed:""),onMouseDown:o,onTouchStart:o,onMouseUp:a,onTouchEnd:a,onContextMenu:function(e){return e.preventDefault()}})}},5329:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(7933),u=t.n(o);n.default=function(e){var n=e.children;return(0,r.jsx)("div",{className:u().gameRow,children:n})}},5356:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(7294);function o(){var e=function(){return[n?window.innerWidth:null,n?window.innerHeight:null]},n=!0,t=(0,r.useState)(e()),o=t[0],u=t[1];return(0,r.useEffect)((function(){if(n){var t=function(){u(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n]),o}},3439:function(e){e.exports={gameBoard:"GameBoard_gameBoard__uQH_y",buttons:"GameBoard_buttons__sIMf2",switch:"GameBoard_switch__8DBCM",slider:"GameBoard_slider__LHVcD"}},8182:function(e){e.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}},7933:function(e){e.exports={gameRow:"GameRow_gameRow__uEYwx"}}},function(e){e.O(0,[774,888,179],(function(){return n=1479,e(e.s=n);var n}));var n=e.O();_N_E=n}]);