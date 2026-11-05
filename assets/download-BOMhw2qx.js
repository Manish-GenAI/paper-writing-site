function c(t,n,e="text/plain;charset=utf-8"){const s=new Blob([n],{type:e}),r=URL.createObjectURL(s),o=document.createElement("a");o.href=r,o.download=t,o.rel="noopener",document.body.appendChild(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(r),2e3)}function a(t,n){c(t,JSON.stringify(n,null,2)+`
`,"application/json")}function i(t){if(t==null)return"";const n=typeof t=="object"?JSON.stringify(t):String(t),e=/^[=+\-@\t\r]/.test(n)&&!/^-?\d/.test(n)?`'${n}`:n;return/[",\n\r]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function l(t,n){const e=[n.join(",")];for(const s of t)e.push(n.map(r=>i(s[r])).join(","));return e.join(`\r
`)+`\r
`}export{a,c as d,l as t};
