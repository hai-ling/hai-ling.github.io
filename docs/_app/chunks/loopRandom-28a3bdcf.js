import{w as s}from"./writeAndUnwriteText-a7ce2814.js";import{r,a as m,m as l}from"./animationSetup-d5beeac0.js";import"./writeEffect-e8eeb5eb.js";import"./unwriteEffect-d38979c5.js";import"./vendor-4a1b413a.js";let t=[];const c=e=>{for(;;){const n=r(0,e.length),o=typeof t=="number"&&n!==t,i=Array.isArray(t)&&!t.includes(n);if(e.length===1||i||o)return o&&(t=[]),t.push(n),e[n];t.length===e.length&&(t=t.pop())}},T=async(e,n)=>{const{options:o,elements:i}=m(e,n);for(;;){l(e);const a=c(i);await s(a,o)}};export{T as default};