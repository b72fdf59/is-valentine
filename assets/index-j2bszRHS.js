var le=Object.defineProperty;var se=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var B=(e,t,n)=>(se(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function L(){}function Z(e){return e()}function U(){return Object.create(null)}function N(e){e.forEach(Z)}function ee(e){return typeof e=="function"}function ie(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function re(e){return Object.keys(e).length===0}function b(e,t){e.appendChild(t)}function x(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function A(){return V(" ")}function W(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}function C(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}let q;function M(e){q=e}const E=[],D=[];let O=[];const G=[],ce=Promise.resolve();let F=!1;function fe(){F||(F=!0,ce.then(te))}function T(e){O.push(e)}const Y=new Set;let k=0;function te(){if(k!==0)return;const e=q;do{try{for(;k<E.length;){const t=E[k];k++,M(t),ue(t.$$)}}catch(t){throw E.length=0,k=0,t}for(M(null),E.length=0,k=0;D.length;)D.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];Y.has(n)||(Y.add(n),n())}O.length=0}while(E.length);for(;G.length;)G.pop()();F=!1,Y.clear(),M(e)}function ue(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}function de(e){const t=[],n=[];O.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),O=t}const ae=new Set;function ne(e,t){e&&e.i&&(ae.delete(e),e.i(t))}function J(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function he(e,t){e.d(1),t.delete(e.key)}function me(e,t,n,l,i,s,u,h,m,o,p,d){let r=e.length,f=s.length,c=r;const y={};for(;c--;)y[e[c].key]=c;const P=[],j=new Map,I=new Map,H=[];for(c=f;c--;){const a=d(i,s,c),g=n(a);let v=u.get(g);v?l&&H.push(()=>v.p(a,t)):(v=o(g,a),v.c()),j.set(g,P[c]=v),g in y&&I.set(g,Math.abs(c-y[g]))}const K=new Set,R=new Set;function z(a){ne(a,1),a.m(h,p),u.set(a.key,a),p=a.first,f--}for(;r&&f;){const a=P[f-1],g=e[r-1],v=a.key,S=g.key;a===g?(p=a.first,r--,f--):j.has(S)?!u.has(v)||K.has(v)?z(a):R.has(S)?r--:I.get(v)>I.get(S)?(R.add(v),z(a)):(K.add(S),r--):(m(g,u),r--)}for(;r--;){const a=e[r];j.has(a.key)||m(a,u)}for(;f;)z(P[f-1]);return N(H),P}function pe(e,t,n){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,n),T(()=>{const s=e.$$.on_mount.map(Z).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...s):N(s),e.$$.on_mount=[]}),i.forEach(T)}function _e(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(E.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,l,i,s,u=null,h=[-1]){const m=q;M(e);const o=e.$$={fragment:null,ctx:[],props:s,update:L,not_equal:i,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:U(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};u&&u(o.root);let p=!1;if(o.ctx=n?n(e,t.props||{},(d,r,...f)=>{const c=f.length?f[0]:r;return o.ctx&&i(o.ctx[d],o.ctx[d]=c)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](c),p&&ye(e,d)),r}):[],o.update(),p=!0,N(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const d=oe(t.target);o.fragment&&o.fragment.l(d),d.forEach(w)}else o.fragment&&o.fragment.c();t.intro&&ne(e.$$.fragment),pe(e,t.target,t.anchor),te()}M(m)}class ve{constructor(){B(this,"$$");B(this,"$$set")}$destroy(){_e(this,1),this.$destroy=L}$on(t,n){if(!ee(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!re(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(be);function Q(e,t,n){const l=e.slice();return l[5]=t[n],l}function $e(e){let t,n,l,i,s,u,h,m,o,p,d,r,f;return{c(){t=_("div"),t.innerHTML='<img src="valentine.gif" alt="Plankton getting a heart"/>',n=A(),l=_("h1"),l.textContent="Will you be my valentine?",i=A(),s=_("div"),u=_("div"),h=_("button"),m=V("Yes"),o=A(),p=_("div"),d=_("button"),d.textContent="No",$(t,"class","emoji svelte-1x7m1n6"),C(h,"font-size",e[1]),$(h,"class","svelte-1x7m1n6"),$(u,"class","btn-yes svelte-1x7m1n6"),$(d,"class","svelte-1x7m1n6"),$(p,"class","btn-no svelte-1x7m1n6"),$(s,"class","btn-row svelte-1x7m1n6")},m(c,y){x(c,t,y),x(c,n,y),x(c,l,y),x(c,i,y),x(c,s,y),b(s,u),b(u,h),b(h,m),b(s,o),b(s,p),b(p,d),r||(f=[W(h,"click",e[3]),W(d,"click",e[2])],r=!0)},p(c,y){y&2&&C(h,"font-size",c[1])},d(c){c&&(w(t),w(n),w(l),w(i),w(s)),r=!1,N(f)}}}function we(e){let t;return{c(){t=_("h1"),t.textContent="Yayyyyyyy! Love you bb! 😍"},m(n,l){x(n,t,l)},p:L,d(n){n&&w(t)}}}function X(e,t){let n,l;return{key:e,first:null,c(){n=_("div"),l=V(`❤️
			`),$(n,"class","heart svelte-1x7m1n6"),C(n,"left",t[5].x+"%"),C(n,"top",t[5].y+"%"),this.first=n},m(i,s){x(i,n,s),b(n,l)},p(i,s){t=i},d(i){i&&w(n)}}}function xe(e){let t,n,l,i,s=[],u=new Map;function h(r,f){return r[0]?we:$e}let m=h(e),o=m(e),p=J(e[4]);const d=r=>r[5].id;for(let r=0;r<p.length;r+=1){let f=Q(e,p,r),c=d(f);u.set(c,s[r]=X(c,f))}return{c(){t=_("main"),n=_("div"),l=_("div"),o.c(),i=A();for(let r=0;r<s.length;r+=1)s[r].c();$(l,"class","content svelte-1x7m1n6"),$(n,"class","container svelte-1x7m1n6")},m(r,f){x(r,t,f),b(t,n),b(n,l),o.m(l,null),b(n,i);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null)},p(r,[f]){m===(m=h(r))&&o?o.p(r,f):(o.d(1),o=m(r),o&&(o.c(),o.m(l,null))),f&16&&(p=J(r[4]),s=me(s,f,d,1,r,p,u,n,he,X,null,Q))},i:L,o:L,d(r){r&&w(t),o.d();for(let f=0;f<s.length;f+=1)s[f].d()}}}function ke(e,t,n){let l=!1,i="1em",s=()=>{n(1,i=parseFloat(i)+1+"em")},u=()=>{n(0,l=!0)},h=Array.from({length:100},(m,o)=>({id:o,x:Math.random()*100,y:Math.random()*100}));return[l,i,s,u,h]}class Ee extends ve{constructor(t){super(),ge(this,t,ke,xe,ie,{})}}new Ee({target:document.getElementById("app")});
