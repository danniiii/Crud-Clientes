/*! For license information please see 215.06b0e69f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproyecto_con_ionic_y_java=self.webpackChunkproyecto_con_ionic_y_java||[]).push([[215],{5215:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(1811),i=function(t){var e,n,i,v,l=10*-f,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(t){l=(0,o.u)(t),_(t)},E=function(){clearTimeout(v),v=void 0,n&&(S(!1),n=void 0)},w=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,y(a(t),t))},_=function(t){y(void 0,t)},y=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var i=(0,o.q)(e),a=i.x,c=i.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||g(n,a,c),S(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){g(t,a,c),v=void 0}),f)}n=t}},g=function(t,e,n){p=Date.now(),t.classList.add(s);var o=m&&c(t);o&&o.addRipple&&(k(),i=o.addRipple(e,n))},k=function(){void 0!==i&&(i.then((function(t){return t()})),i=void 0)},S=function(t){k();var e=n;if(e){var o=d-Date.now()+p;if(t&&o>0&&!r(e)){var i=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,i)}else e.classList.remove(s)}},T=document;T.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),T.addEventListener("ionScrollEnd",(function(){e=void 0})),T.addEventListener("ionGestureCaptured",E),T.addEventListener("touchstart",(function(t){l=(0,o.u)(t),w(t)}),!0),T.addEventListener("touchcancel",h,!0),T.addEventListener("touchend",h,!0),T.addEventListener("mousedown",(function(t){var e=(0,o.u)(t)-f;l<e&&w(t)}),!0),T.addEventListener("mouseup",(function(t){var e=(0,o.u)(t)-f;l<e&&_(t)}),!0),T.addEventListener("contextmenu",(function(t){_(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var o=e[n];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=215.06b0e69f.chunk.js.map