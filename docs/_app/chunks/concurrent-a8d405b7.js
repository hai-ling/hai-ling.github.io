import{w as c}from"./writeEffect-e8eeb5eb.js";import{a}from"./animationSetup-d5beeac0.js";import"./vendor-4a1b413a.js";const d=(e,t)=>t.text.length-e.text.length,l=e=>e.sort(d)[0].currentNode,g=(e,t)=>{new MutationObserver(i=>{i.forEach(o=>{const n=o.type==="attributes",r=o.target.classList.contains("finished-typing");n&&r&&t()})}).observe(e,{attributes:!0,childList:!0,subtree:!0})},f=(e,t)=>{const{options:s,elements:i}=a(e,t),o=l(i);g(o,()=>s.dispatch("done"));for(const n of i)c(n,s).then(()=>{s.keepCursorOnFinish?n.currentNode!==o&&n.currentNode.classList.replace("typing","finished-typing"):n.currentNode.classList.replace("typing","finished-typing")})};export{f as default};
