"use strict";(self.webpackChunkkapmanagement=self.webpackChunkkapmanagement||[]).push([[682],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return I},_:function(){return o},a:function(){return s},b:function(){return l},g:function(){return c},h:function(){return A}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const A=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function c(e,t,a,r,n,i,o,A){const l={};i&&(l.backgroundColor=i,"fixed"===a?(l.width=r,l.height=n,l.backgroundColor=i,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),A&&(l.objectPosition=A);const c=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return c}const d=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,d);return r.createElement(r.Fragment,null,r.createElement(u,s({},a)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:A}=e,l=o(e,p);return r.createElement("img",s({},l,{decoding:"async",loading:n,src:A?t:void 0,"data-src":A?void 0:t,srcSet:A?a:void 0,"data-srcset":A?void 0:a,alt:i}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,m);const A=i.sizes||(null==t?void 0:t.sizes),l=r.createElement(h,s({},i,t,{sizes:A,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:A})})),l):l};var y;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},f.displayName="Picture",f.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],b=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(f,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(y=f.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(f,s({},e)),r.createElement("noscript",null,r.createElement(f,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=f.propTypes;const v=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},B={image:i().object.isRequired,alt:v},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],j=new Set;let P,x;const L=function(e){let{as:t="div",image:n,style:i,backgroundColor:l,className:c,class:d,onStartLoad:u,onLoad:g,onError:p}=e,m=o(e,C);const{width:h,height:f,layout:y}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(h,f,y),{style:b,className:E}=w,v=o(w,k),B=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(c=d);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,h,f);return(0,r.useEffect)((()=>{P||(P=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=B.current.querySelector("[data-gatsby-image-ssr]");if(e&&A())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(x&&j.has(L))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;B.current&&(B.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(L),image:n},m)),j.has(L)||(t=requestAnimationFrame((()=>{B.current&&(r=o(B.current,L,j,i,u,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(L)&&x&&(B.current.innerHTML=x(s({isLoading:j.has(L),isLoaded:j.has(L),image:n},m)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},v,{style:s({},b,i,{backgroundColor:l}),className:E+(c?" "+c:""),ref:B,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},S=(0,r.memo)((function(e){return e.image?(0,r.createElement)(L,e):null}));S.propTypes=B,S.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},Q=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:v,width:_,height:_,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!Q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},I=(T=S,function(e){let{src:t,__imageData:a,__error:n}=e,i=o(e,N);return n&&console.warn(n),a?r.createElement(T,s({image:a},i)):(console.warn("Image not loaded",t),null)});var T;I.displayName="StaticImage",I.propTypes=M},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},5465:function(e,t,a){a.r(t);var r=a(7294),n=a(3723),i=a(2737);t.default=()=>r.createElement(i.Z,{fullMenu:!0},r.createElement("article",{id:"main"},r.createElement("header",null,r.createElement("h2",null,"About")),r.createElement("span",{className:"image fit"},r.createElement(n.S,{src:"../assets/images/KAP_Management_Blank.jpeg",alt:"KAP Management",placeholder:"blurred",objectFit:"contain",__imageData:a(6687)}))))},6687:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeCtMKMgA//EABkQAAMAAwAAAAAAAAAAAAAAAAABERASIP/aAAgBAQABBQKIixWbMr4//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFhABAQEAAAAAAAAAAAAAAAAAMQAw/9oACAEBAAY/AmcP/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERECExYVFxkf/aAAgBAQABPyFQZT0YLvBq9hFoN1JfNP/aAAwDAQACAAMAAAAQwAcA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHhABAAEDBQEAAAAAAAAAAAAAAQARMVEQIWGRoUH/2gAIAQEAAT8QRWhRbPubFy3Pn2EISmUpDFAHG1pwfdIKWaTkd6f/2Q=="},"images":{"fallback":{"src":"/static/f7c0bf40c910146ac956d97b4aee4d13/8a7f9/KAP_Management_Blank.jpg","srcSet":"/static/f7c0bf40c910146ac956d97b4aee4d13/b6b92/KAP_Management_Blank.jpg 262w,\\n/static/f7c0bf40c910146ac956d97b4aee4d13/92fde/KAP_Management_Blank.jpg 525w,\\n/static/f7c0bf40c910146ac956d97b4aee4d13/8a7f9/KAP_Management_Blank.jpg 1049w","sizes":"(min-width: 1049px) 1049px, 100vw"},"sources":[{"srcSet":"/static/f7c0bf40c910146ac956d97b4aee4d13/cecb9/KAP_Management_Blank.webp 262w,\\n/static/f7c0bf40c910146ac956d97b4aee4d13/9a358/KAP_Management_Blank.webp 525w,\\n/static/f7c0bf40c910146ac956d97b4aee4d13/04151/KAP_Management_Blank.webp 1049w","type":"image/webp","sizes":"(min-width: 1049px) 1049px, 100vw"}]},"width":1049,"height":921}')}}]);
//# sourceMappingURL=component---src-pages-about-js-087d60d0d36e175f240b.js.map