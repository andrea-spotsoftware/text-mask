!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.createNumberMask=o():e.createNumberMask=o()}(this,function(){return function(e){function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o){"use strict";function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=e.prefix,t=void 0===o?u:o,l=e.suffix,s=void 0===l?f:l,v=e.includeThousandsSeparator,m=void 0===v||v,y=e.thousandsSeparatorSymbol,b=void 0===y?d:y,x=e.allowDecimal,S=void 0!==x&&x,g=e.decimalSymbol,h=void 0===g?a:g,j=e.decimalLimit,D=void 0===j?2:j,M=e.requireDecimal,k=void 0!==M&&M;return function(e){var o=e.length;if(e===f||e[0]===t[0]&&1===o)return""+t+c+s;var u=e.lastIndexOf(h),d=u!==-1,a=void 0,l=void 0,v=void 0;if(a=e,d&&(S||k)?(a=e.slice(0,u),l=r(e.slice(u+1,o))):a=e,a=r(a),v=m?n(a,b):a,d&&S||k===!0)if(v+=e[u-1]===h?"":"[]",v+=h+"[]",l)("undefined"==typeof D?"undefined":i(D))===p&&(l=l.slice(0,D)),v+=l;else if(k===!0)for(var y=0;y<D;y++)v+=c;return""+t+v+s}}function r(e){return e.replace(l,f).replace(s,c)}function n(e,o){return e.replace(/\B(?=(\d{3})+(?!\d))/g,o)}Object.defineProperty(o,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};o["default"]=t;var u="$",f="",d=",",c="1",a=".",l=/\D+/g,s=/\d/g,p="number"}])});