(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},2617:function(e,n,t){"use strict";t.r(n);var u=t(5893),r=t(7294),o=t(3439),a=t.n(o),c=t(5329),s=t(8410);n.default=function(e){var n=(0,r.useState)(0),t=n[0],o=n[1],l=(0,r.useState)([]),i=(l[0],l[1],[]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:a().gameBoard,onMouseDown:function(e){2==e.button?o(2):o(1)},onMouseUp:function(){return o(0)},children:function(){for(var e=function(e){i.push((0,u.jsx)(c.default,{className:a().gameRow,children:function(){for(var n=[],r=1;r<=10;r++)n.push((0,u.jsx)(s.default,{className:a().gameCell,clickState:t,rowArray:i,row:r,column:e},e+"-"+r));return n}()},e))},n=1;n<=10;n++)e(n);return i}()})})}},8410:function(e,n,t){"use strict";t.r(n);var u=t(5893),r=t(7294),o=t(8182),a=t.n(o);n.default=function(e){var n=e.clickState,t=(e.row,e.column,(0,r.useState)(0)),o=t[0],c=t[1],s=(0,r.useState)(!1),l=(s[0],s[1]);return(0,u.jsx)("div",{className:"".concat(a().gameCell," ").concat(1==o?a().filled:2==o?a().crossed:""),onMouseDown:function(e){e.preventDefault(),l(!0),2==e.button?c(2==o?0:2):c(1==o?0:1)},onMouseEnter:function(e){1==n?c(1==o?0:1):2==n&&c(2==o?0:2)},onMouseUp:function(e){e.preventDefault(),l(!1)},onContextMenu:function(e){return e.preventDefault()}})}},5329:function(e,n,t){"use strict";t.r(n);var u=t(5893),r=t(7933),o=t.n(r);n.default=function(e){var n=e.children;return(0,u.jsx)("div",{className:o().gameRow,children:n})}},3678:function(e,n,t){"use strict";t.r(n);var u=t(5893),r=t(2617);n.default=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.default,{})})}},3439:function(e){e.exports={gameBoard:"GameBoard_gameBoard__uQH_y"}},8182:function(e){e.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}},7933:function(e){e.exports={gameRow:"GameRow_gameRow__uEYwx"}}},function(e){e.O(0,[774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);