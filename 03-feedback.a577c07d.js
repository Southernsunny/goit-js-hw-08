!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return v.Date.now()};function p(e,t,n){var i,o,a,u,l,f,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,l=setTimeout(h,t),s?p(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=a}function h(){var e=y();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return v?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&i?p(e):(i=o=void 0,u)}function T(){var e=y(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(v)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),j=O.querySelector('input[name="email"]'),h=O.querySelector('textarea[name="message"]'),w="feedback-form-state",T=JSON.parse(localStorage.getItem(w))||{};j.value=T.email||"",h.value=T.message||"";var N=e(t)((function(){var e={email:j.value,message:h.value};localStorage.setItem(w,JSON.stringify(e))}),500);O.addEventListener("input",(function(e){e.target!==j&&e.target!==h||N()})),O.addEventListener("submit",(function(e){e.preventDefault();var t={email:j.value,message:h.value};localStorage.setItem(w,JSON.stringify(t)),console.log(t),j.value="",h.value="",localStorage.removeItem(w)})),O.addEventListener("submit",(function(e){if(e.preventDefault(),j.value)if(h.value){var t={email:j.value,message:h.value};localStorage.setItem(w,JSON.stringify(t)),console.log(t),j.value="",h.value="",localStorage.removeItem(w)}else alert("Please fill in your message");else alert("Please fill in your email")}))}();
//# sourceMappingURL=03-feedback.a577c07d.js.map
