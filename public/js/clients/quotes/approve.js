/*! For license information please see approve.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=10)}({10:function(e,t,n){e.exports=n("WuMn")},WuMn:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.shouldDisplaySignature=t}var t,r,o;return t=e,(r=[{key:"submitForm",value:function(){document.getElementById("approve-form").submit()}},{key:"displaySignature",value:function(){document.getElementById("displaySignatureModal").removeAttribute("style"),new SignaturePad(document.getElementById("signature-pad"),{backgroundColor:"rgb(240,240,240)",penColor:"rgb(0, 0, 0)"})}},{key:"handle",value:function(){var e=this;document.getElementById("approve-button").addEventListener("click",(function(){e.shouldDisplaySignature&&(e.displaySignature(),document.getElementById("signature-next-step").addEventListener("click",(function(){e.submitForm()}))),e.shouldDisplaySignature||e.submitForm()}))}}])&&n(t.prototype,r),o&&n(t,o),e}(),o=document.querySelector('meta[name="require-quote-signature"]').content;new r(Boolean(+o)).handle()}});

