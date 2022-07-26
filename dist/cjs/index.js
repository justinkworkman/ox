"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("styled-components");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),o=t(r);
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
***************************************************************************** */
function d(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t}const l=o.default.button`
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
`,i=o.default.input`
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${e=>e.disabled?"#e4e3ea":e.error?"a915ob":e.success?"#067d68":"#353637"}
    background-color: #fff;
    &:focus {
        border: solid 2px #1b116e;
    }
`,p=o.default.div`
    font-size: 14px;
    color: ${e=>e.disabled?"#e4e3ea":"#080808"};
    padding-bottom: 6px;
`,s=o.default.div`
   font-size: 14px;
   color: #a9150b8;
   padding-top: 4px;
`,n=o.default.p`
   margin: 0px;
   color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;exports.Button=e=>{var{size:r,primary:t,disabled:o,text:i,onClick:p}=e,s=d(e,["size","primary","disabled","text","onClick"]);return a.default.createElement(l,Object.assign({type:"button",onClick:p,primary:t,disabled:o,size:r},s),i)},exports.Input=r=>{var{id:t,disabled:o,label:l,message:b,error:c,success:u,onChange:f,placeholder:x}=r,m=d(r,["id","disabled","label","message","error","success","onChange","placeholder"]);return a.default.createElement(e.Fragment,null,a.default.createElement(p,{disabled:o},a.default.createElement(n,{disabled:o,error:c},l)),a.default.createElement(i,Object.assign({id:t,type:"text",onChange:f,disabled:o,error:c,success:u,placeholder:x},m)),a.default.createElement(s,{disabled:o},a.default.createElement(n,{disabled:o,error:c},b)))};
//# sourceMappingURL=index.js.map
