webpackJsonp([8],{0:function(e,t,n){"use strict";var r=n(136),i=n(1);i(document).ready(function(){var e=new r;e.render({target:document.getElementById("js-toc")})})},136:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t,n=this;if("object"==("undefined"==typeof e?"undefined":a["default"](e)))for(t in e)t in n&&(n[t]=e[t]);n.scope=document.body,n.init(e)}var o=n(18),a=r(o),s=n(1);i.prototype={selector:"h1,h2,h3,h4,h5,h6",scope:null,from:1,to:6,map:null,createLinks:!0,cssClasses:{tocList:"toc",tocListItem:"toc-item_level_#"},init:function(e){var t=this;t.map=t.get()},__getMap:function(e,t){var n,r,i,o,a=this,l=[],e="undefined"!=typeof e?e:a.selector,t="undefined"!=typeof t?t:a.scope,u="querySelectorAll"in t?t.querySelectorAll(e):s(e,t);for(i=0,o=u.length;o>i;i++)n=u[i],r={id:n.id,level:parseInt(n.tagName.substr(1,1)),title:s(n).text(),node:n,content:[]},l.push(r);return l},get:function(e){var t,n,r=this,i=e&&"undefined"!=typeof e.selector?e.selector:r.selector,o=e&&"undefined"!=typeof e.scope?e.scope:r.scope;return t=r.__getMap(i,o),0==t.length?[]:n=r.__getBranch(t,t[0].level,0)},render:function(e){var t,n=this,r=e&&"undefined"!=typeof e.from?e.from:n.from,i=e&&"undefined"!=typeof e.to?e.to:n.to,o=e&&"undefined"!=typeof e.target?e.target:null;return t=n.__create(n.map,r,i),null!=o&&o.appendChild(t),t},__create:function(e,t,n){var r,i,o,a,s,l,u,c=this,f=c.createLinks,d=c.cssClasses;if(0==e.length)return null;for(r=document.createElement("ul"),r.className=d.tocList,l=0,u=e.length;u>l;l++)a=e[l],i=document.createElement("li"),i.className=d.tocListItem.replace("#",a.level),f?(o=document.createElement("a"),o.href="#"+a.id,o.appendChild(document.createTextNode(a.title))):o=document.createTextNode(a.title),i.appendChild(o),a.content.length>0&&a.content[0].level>=t&&a.content[0].level<=n&&(s=c.__create(a.content,t,n),i.appendChild(s)),r.appendChild(i);return r},__getBranch:function(e,t,n,r){for(var i,o,r="undefined"!=typeof r?r:!0,a=e.length,s=[],l=n;a>l;l++)if(i=e[l],o="undefined"!=typeof e[l-1]?e[l-1]:null,i.level==t)s.push(i);else if(i.level>t)o&&o.level<i.level&&(o.content=this.__getBranch(e,i.level,l,!1));else if(i.level<t&&!r)break;return s}},e.exports=i}});