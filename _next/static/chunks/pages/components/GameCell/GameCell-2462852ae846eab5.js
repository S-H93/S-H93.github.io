(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{399:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/GameCell/GameCell",function(){return t(8410)}])},8410:function(e,n,t){"use strict";t.r(n);var o=t(5893),u=t(7294),l=t(8182),c=t.n(l);n.default=function(e){var n=function(){return f[r][a]},t=function(e){m(e),s(r,a,e)},l=e.clickState,r=e.row,a=e.column,f=e.getArray,s=e.updateArray,_=(0,u.useState)(0),i=_[0],m=_[1];return(0,o.jsx)("div",{className:"".concat(c().gameCell," ").concat(1==i?c().filled:2==i?c().crossed:""),onMouseDown:function(e){e.preventDefault(),2==e.button?2==n()?t(0):t(2):1==n()?t(0):t(1)},onMouseEnter:function(e){1==l?1==n()?t(0):t(1):2==l&&(2==n()?t(0):t(2))},onMouseUp:function(e){e.preventDefault()},onContextMenu:function(e){return e.preventDefault()}})}},8182:function(e){e.exports={gameCell:"GameCell_gameCell__mcR1D",filled:"GameCell_filled__v_mRJ",crossed:"GameCell_crossed__MBSof"}}},function(e){e.O(0,[774,888,179],(function(){return n=399,e(e.s=n);var n}));var n=e.O();_N_E=n}]);