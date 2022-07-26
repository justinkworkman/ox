import e,{Fragment as r}from"react";import o from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function i(e,r){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)r.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(e,i[t])&&(o[i[t]]=e[i[t]])}return o}const t=o.button`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
    color: ${e=>e.primary?"#1b116e":"#ffffff"};
    background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
    opacity: ${e=>e.disabled?.5:1};
    &:hover {
      background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
    }
    &:active {
        border: solid 2px #1b116e;
        padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
    }
`,a=r=>{var{size:o,primary:a,disabled:d,text:l,onClick:p}=r,s=i(r,["size","primary","disabled","text","onClick"]);return e.createElement(t,Object.assign({type:"button",onClick:p,primary:a,disabled:d,size:o},s),l)},d=o.input`
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${e=>e.disabled?"#e4e3ea":e.error?"a915ob":e.success?"#067d68":"#353637"}
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`,l=o.div`
    font-size: 14px;
    color: ${e=>e.disabled?"#e4e3ea":"#080808"};
    padding-bottom: 6px;
`,p=o.div`
   font-size: 14px;
   color: #a9150b8;
   padding-top: 4px;
`,s=o.p`
   margin: 0px;
   color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`,n=o=>{var{id:t,disabled:a,label:n,message:b,error:c,success:x,onChange:m,placeholder:f}=o,u=i(o,["id","disabled","label","message","error","success","onChange","placeholder"]);return e.createElement(r,null,e.createElement(l,{disabled:a},e.createElement(s,{disabled:a,error:c},n)),e.createElement(d,Object.assign({id:t,type:"text",onChange:m,disabled:a,error:c,success:x,placeholder:f},u)),e.createElement(p,{disabled:a},e.createElement(s,{disabled:a,error:c},b)))};export{a as Button,n as Input};
//# sourceMappingURL=index.js.map
