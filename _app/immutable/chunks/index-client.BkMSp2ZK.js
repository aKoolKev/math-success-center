import{y as _,z as h,A as u,B as k,S as v,C as e,D as o,F as x,G as y,H as E}from"./runtime.bqU6ijX-.js";function i(t,s){return t===s||(t==null?void 0:t[v])===s}function B(t={},s,c,a){return _(()=>{var r,n;return h(()=>{r=n,n=[],u(()=>{t!==c(...n)&&(s(t,...n),r&&i(c(...r),t)&&s(null,...r))})}),()=>{k(()=>{n&&i(c(...n),t)&&s(null,...n)})}}),t}function C(t){e===null&&o(),x&&e.l!==null?d(e).m.push(t):y(()=>{const s=u(t);if(typeof s=="function")return s})}function S(t,s,{bubbles:c=!1,cancelable:a=!1}={}){return new CustomEvent(t,{detail:s,bubbles:c,cancelable:a})}function D(){const t=e;return t===null&&o(),(s,c,a)=>{var n;const r=(n=t.s.$$events)==null?void 0:n[s];if(r){const l=E(r)?r.slice():[r],f=S(s,c,a);for(const p of l)p.call(t.x,f);return!f.defaultPrevented}return!0}}function d(t){var s=t.l;return s.u??(s.u={a:[],b:[],m:[]})}export{B as b,D as c,C as o};
