!function(){"use strict";const e="RECIEVE_DATA",t="ERROR",n="select-start-date",o="select-end-date",c=1881,r=2006,a=e=>e;const s=function(e,t=a){return function(...n){return{type:e,payload:t(...n)}}}("FETCH_DATA",(e,t)=>({route:e,params:t}));function l(){i()}function u(e){const t="btn--selected";if(e.target.classList.contains(t))return e.preventDefault(),void e.stopPropagation;Array.prototype.forEach.call(document.getElementsByClassName(t),e=>e.classList.remove(t)),e.target.classList.add(t)}function d(e){e.preventDefault(),i()}function i(){const e=function(){const e={};[n,o].forEach(t=>{const n=document.getElementById(t);e[n.name]=n.value});const t=document.querySelector("#controls .btn--selected");return e.route=t.value,e}();m.postMessage(s(e.route,e))}const m=new Worker("./worker.js");function p(e,t){const n=document.getElementById(e),o=function(e,t){const n=document.createDocumentFragment();let o=e;for(;o<=t;){const e=document.createElement("option");e.textContent=o,e.value=o,n.appendChild(e),o++}return n}(c,r);o.querySelector(`[value="${t}"]`).selected=!0,n.appendChild(o)}m.onmessage=function(n){try{const{data:o}=n;switch(o.type){case e:console.log("Client recieved",o.payload);break;case t:throw o.payload;default:throw new Error(`Unknown data type: ${o.type}`)}}catch(e){console.error(e)}},p(n,c),p(o,r),[n,o].forEach(e=>{document.getElementById(e).addEventListener("change",l)}),document.getElementById("controls").addEventListener("submit",d),document.querySelectorAll('.btn[name="type"]').forEach(e=>e.addEventListener("click",u)),m.postMessage(s("temperature"))}();
