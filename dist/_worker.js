var $e=Object.defineProperty;var ce=e=>{throw TypeError(e)};var Te=(e,t,r)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var d=(e,t,r)=>Te(e,typeof t!="symbol"?t+"":t,r),he=(e,t,r)=>t.has(e)||ce("Cannot "+r);var u=(e,t,r)=>(he(e,t,"read from private field"),r?r.call(e):t.get(e)),b=(e,t,r)=>t.has(e)?ce("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p=(e,t,r,s)=>(he(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);var Ce=async(e,t=Object.create(null))=>{const{all:r=!1,dot:s=!1}=t,i=(e instanceof ve?e.raw.headers:e.headers).get("Content-Type");return i!==null&&i.startsWith("multipart/form-data")||i!==null&&i.startsWith("application/x-www-form-urlencoded")?Me(e,{all:r,dot:s}):{}};async function Me(e,t){const r=await e.formData();return r?Ie(r,t):{}}function Ie(e,t){const r=Object.create(null);return e.forEach((s,n)=>{t.all||n.endsWith("[]")?De(r,n,s):r[n]=s}),t.dot&&Object.entries(r).forEach(([s,n])=>{s.includes(".")&&(Fe(r,s,n),delete r[s])}),r}var De=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:e[t]=r},Fe=(e,t,r)=>{let s=e;const n=t.split(".");n.forEach((i,c)=>{c===n.length-1?s[i]=r:((!s[i]||typeof s[i]!="object"||Array.isArray(s[i])||s[i]instanceof File)&&(s[i]=Object.create(null)),s=s[i])})},we=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Ne=e=>{const{groups:t,path:r}=Le(e),s=we(r);return qe(s,t)},Le=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,s)=>{const n=`@${s}`;return t.push([n,r]),n}),{groups:t,path:e}},qe=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[s]=t[r];for(let n=e.length-1;n>=0;n--)if(e[n].includes(s)){e[n]=e[n].replace(s,t[r][1]);break}}return e},Y={},le=e=>{if(e==="*")return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return t?(Y[e]||(t[2]?Y[e]=[e,t[1],new RegExp("^"+t[2]+"$")]:Y[e]=[e,t[1],!0]),Y[e]):null},ke=e=>{try{return decodeURI(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,t=>{try{return decodeURI(t)}catch{return t}})}},ye=e=>{const t=e.url,r=t.indexOf("/",8);let s=r;for(;s<t.length;s++){const n=t.charCodeAt(s);if(n===37){const i=t.indexOf("?",s),c=t.slice(r,i===-1?void 0:i);return ke(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(n===63)break}return t.slice(r,s)},Be=e=>{const t=ye(e);return t.length>1&&t[t.length-1]==="/"?t.slice(0,-1):t},k=(...e)=>{let t="",r=!1;for(let s of e)t[t.length-1]==="/"&&(t=t.slice(0,-1),r=!0),s[0]!=="/"&&(s=`/${s}`),s==="/"&&r?t=`${t}/`:s!=="/"&&(t=`${t}${s}`),s==="/"&&t===""&&(t="/");return t},Re=e=>{if(!e.match(/\:.+\?$/))return null;const t=e.split("/"),r=[];let s="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))s+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){r.length===0&&s===""?r.push("/"):r.push(s);const i=n.replace("?","");s+="/"+i,r.push(s)}else s+="/"+n}),r.filter((n,i,c)=>c.indexOf(n)===i)},se=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),/%/.test(e)?ie(e):e):e,be=(e,t,r)=>{let s;if(!r&&t&&!/[%+]/.test(t)){let c=e.indexOf(`?${t}`,8);for(c===-1&&(c=e.indexOf(`&${t}`,8));c!==-1;){const a=e.charCodeAt(c+t.length+1);if(a===61){const o=c+t.length+2,h=e.indexOf("&",o);return se(e.slice(o,h===-1?void 0:h))}else if(a==38||isNaN(a))return"";c=e.indexOf(`&${t}`,c+1)}if(s=/[%+]/.test(e),!s)return}const n={};s??(s=/[%+]/.test(e));let i=e.indexOf("?",8);for(;i!==-1;){const c=e.indexOf("&",i+1);let a=e.indexOf("=",i);a>c&&c!==-1&&(a=-1);let o=e.slice(i+1,a===-1?c===-1?void 0:c:a);if(s&&(o=se(o)),i=c,o==="")continue;let h;a===-1?h="":(h=e.slice(a+1,c===-1?void 0:c),s&&(h=se(h))),r?(n[o]&&Array.isArray(n[o])||(n[o]=[]),n[o].push(h)):n[o]??(n[o]=h)}return t?n[t]:n},Ue=be,Ve=(e,t)=>be(e,t,!0),ie=decodeURIComponent,D,x,pe,ve=(pe=class{constructor(e,t="/",r=[[]]){d(this,"raw");b(this,D);b(this,x);d(this,"routeIndex",0);d(this,"path");d(this,"bodyCache",{});d(this,"cachedBody",e=>{const{bodyCache:t,raw:r}=this,s=t[e];if(s)return s;const n=Object.keys(t)[0];return n?t[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,p(this,x,r),p(this,D,{})}param(e){return e?this.getDecodedParam(e):this.getAllDecodedParams()}getDecodedParam(e){const t=u(this,x)[0][this.routeIndex][1][e],r=this.getParamValue(t);return r?/\%/.test(r)?ie(r):r:void 0}getAllDecodedParams(){const e={},t=Object.keys(u(this,x)[0][this.routeIndex][1]);for(const r of t){const s=this.getParamValue(u(this,x)[0][this.routeIndex][1][r]);s&&typeof s=="string"&&(e[r]=/\%/.test(s)?ie(s):s)}return e}getParamValue(e){return u(this,x)[1]?u(this,x)[1][e]:e}query(e){return Ue(this.url,e)}queries(e){return Ve(this.url,e)}header(e){if(e)return this.raw.headers.get(e.toLowerCase())??void 0;const t={};return this.raw.headers.forEach((r,s)=>{t[s]=r}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ce(this,e))}json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData(e,t){u(this,D)[e]=t}valid(e){return u(this,D)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return u(this,x)[0].map(([[,e]])=>e)}get routePath(){return u(this,x)[0].map(([[,e]])=>e)[this.routeIndex].path}},D=new WeakMap,x=new WeakMap,pe),Ke={Stringify:1,BeforeStream:2,Stream:3},Ee=async(e,t,r,s,n)=>{const i=e.callbacks;return i!=null&&i.length?(n?n[0]+=e:n=[e],Promise.all(i.map(a=>a({phase:t,buffer:n,context:s}))).then(a=>Promise.all(a.filter(Boolean).map(o=>Ee(o,t,!1,s,n))).then(()=>n[0]))):Promise.resolve(e)},Ge="text/plain; charset=UTF-8",ne=(e,t={})=>(Object.entries(t).forEach(([r,s])=>e.set(r,s)),e),K,G,H,C,_,m,y,O,$,W,F,N,z,X,ge,Z=(ge=class{constructor(e,t){b(this,K);b(this,G);d(this,"env",{});b(this,H);d(this,"finalized",!1);d(this,"error");b(this,C,200);b(this,_);b(this,m);b(this,y);b(this,O);b(this,$,!0);b(this,W);b(this,F);b(this,N);b(this,z);b(this,X);d(this,"render",(...e)=>(u(this,F)??p(this,F,t=>this.html(t)),u(this,F).call(this,...e)));d(this,"setLayout",e=>p(this,W,e));d(this,"getLayout",()=>u(this,W));d(this,"setRenderer",e=>{p(this,F,e)});d(this,"header",(e,t,r)=>{if(t===void 0){u(this,m)?u(this,m).delete(e):u(this,y)&&delete u(this,y)[e.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(e);return}r!=null&&r.append?(u(this,m)||(p(this,$,!1),p(this,m,new Headers(u(this,y))),p(this,y,{})),u(this,m).append(e,t)):u(this,m)?u(this,m).set(e,t):(u(this,y)??p(this,y,{}),u(this,y)[e.toLowerCase()]=t),this.finalized&&(r!=null&&r.append?this.res.headers.append(e,t):this.res.headers.set(e,t))});d(this,"status",e=>{p(this,$,!1),p(this,C,e)});d(this,"set",(e,t)=>{u(this,H)??p(this,H,new Map),u(this,H).set(e,t)});d(this,"get",e=>u(this,H)?u(this,H).get(e):void 0);d(this,"newResponse",(e,t,r)=>{if(u(this,$)&&!r&&!t&&u(this,C)===200)return new Response(e,{headers:u(this,y)});if(t&&typeof t!="number"){const n=new Headers(t.headers);u(this,m)&&u(this,m).forEach((c,a)=>{a==="set-cookie"?n.append(a,c):n.set(a,c)});const i=ne(n,u(this,y));return new Response(e,{headers:i,status:t.status??u(this,C)})}const s=typeof t=="number"?t:u(this,C);u(this,y)??p(this,y,{}),u(this,m)??p(this,m,new Headers),ne(u(this,m),u(this,y)),u(this,O)&&(u(this,O).headers.forEach((n,i)=>{var c,a;i==="set-cookie"?(c=u(this,m))==null||c.append(i,n):(a=u(this,m))==null||a.set(i,n)}),ne(u(this,m),u(this,y))),r??(r={});for(const[n,i]of Object.entries(r))if(typeof i=="string")u(this,m).set(n,i);else{u(this,m).delete(n);for(const c of i)u(this,m).append(n,c)}return new Response(e,{status:s,headers:u(this,m)})});d(this,"body",(e,t,r)=>typeof t=="number"?this.newResponse(e,t,r):this.newResponse(e,t));d(this,"text",(e,t,r)=>{if(!u(this,y)){if(u(this,$)&&!r&&!t)return new Response(e);p(this,y,{})}return u(this,y)["content-type"]=Ge,typeof t=="number"?this.newResponse(e,t,r):this.newResponse(e,t)});d(this,"json",(e,t,r)=>{const s=JSON.stringify(e);return u(this,y)??p(this,y,{}),u(this,y)["content-type"]="application/json; charset=UTF-8",typeof t=="number"?this.newResponse(s,t,r):this.newResponse(s,t)});d(this,"html",(e,t,r)=>(u(this,y)??p(this,y,{}),u(this,y)["content-type"]="text/html; charset=UTF-8",typeof e=="object"&&(e instanceof Promise||(e=e.toString()),e instanceof Promise)?e.then(s=>Ee(s,Ke.Stringify,!1,{})).then(s=>typeof t=="number"?this.newResponse(s,t,r):this.newResponse(s,t)):typeof t=="number"?this.newResponse(e,t,r):this.newResponse(e,t)));d(this,"redirect",(e,t)=>(u(this,m)??p(this,m,new Headers),u(this,m).set("Location",e),this.newResponse(null,t??302)));d(this,"notFound",()=>(u(this,N)??p(this,N,()=>new Response),u(this,N).call(this,this)));p(this,K,e),t&&(p(this,_,t.executionCtx),this.env=t.env,p(this,N,t.notFoundHandler),p(this,X,t.path),p(this,z,t.matchResult))}get req(){return u(this,G)??p(this,G,new ve(u(this,K),u(this,X),u(this,z))),u(this,G)}get event(){if(u(this,_)&&"respondWith"in u(this,_))return u(this,_);throw Error("This context has no FetchEvent")}get executionCtx(){if(u(this,_))return u(this,_);throw Error("This context has no ExecutionContext")}get res(){return p(this,$,!1),u(this,O)||p(this,O,new Response("404 Not Found",{status:404}))}set res(e){if(p(this,$,!1),u(this,O)&&e){u(this,O).headers.delete("content-type");for(const[t,r]of u(this,O).headers.entries())if(t==="set-cookie"){const s=u(this,O).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of s)e.headers.append("set-cookie",n)}else e.headers.set(t,r)}p(this,O,e),this.finalized=!0}get var(){return u(this,H)?Object.fromEntries(u(this,H)):{}}},K=new WeakMap,G=new WeakMap,H=new WeakMap,C=new WeakMap,_=new WeakMap,m=new WeakMap,y=new WeakMap,O=new WeakMap,$=new WeakMap,W=new WeakMap,F=new WeakMap,N=new WeakMap,z=new WeakMap,X=new WeakMap,ge),ue=(e,t,r)=>(s,n)=>{let i=-1;return c(0);async function c(a){if(a<=i)throw new Error("next() called multiple times");i=a;let o,h=!1,l;if(e[a]?(l=e[a][0][0],s instanceof Z&&(s.req.routeIndex=a)):l=a===e.length&&n||void 0,!l)s instanceof Z&&s.finalized===!1&&r&&(o=await r(s));else try{o=await l(s,()=>c(a+1))}catch(f){if(f instanceof Error&&s instanceof Z&&t)s.error=f,o=await t(f,s),h=!0;else throw f}return o&&(s.finalized===!1||h)&&(s.res=o),s}},R="ALL",We="all",ze=["get","post","put","delete","options","patch"],xe="Can not add a route since the matcher is already built.",Oe=class extends Error{},Xe=Symbol("composedHandler"),Je=e=>e.text("404 Not Found",404),de=(e,t)=>"getResponse"in e?e.getResponse():(console.error(e),t.text("Internal Server Error",500)),j,me,je=(me=class{constructor(t={}){d(this,"get");d(this,"post");d(this,"put");d(this,"delete");d(this,"options");d(this,"patch");d(this,"all");d(this,"on");d(this,"use");d(this,"router");d(this,"getPath");d(this,"_basePath","/");b(this,j,"/");d(this,"routes",[]);d(this,"notFoundHandler",Je);d(this,"errorHandler",de);d(this,"onError",t=>(this.errorHandler=t,this));d(this,"notFound",t=>(this.notFoundHandler=t,this));d(this,"fetch",(t,...r)=>this.dispatch(t,r[1],r[0],t.method));d(this,"request",(t,r,s,n)=>{if(t instanceof Request)return r!==void 0&&(t=new Request(t,r)),this.fetch(t,s,n);t=t.toString();const i=/^https?:\/\//.test(t)?t:`http://localhost${k("/",t)}`,c=new Request(i,r);return this.fetch(c,s,n)});d(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(this.dispatch(t.request,t,void 0,t.request.method))})});[...ze,We].forEach(n=>{this[n]=(i,...c)=>(typeof i=="string"?p(this,j,i):this.addRoute(n,u(this,j),i),c.forEach(a=>{typeof a!="string"&&this.addRoute(n,u(this,j),a)}),this)}),this.on=(n,i,...c)=>{for(const a of[i].flat()){p(this,j,a);for(const o of[n].flat())c.map(h=>{this.addRoute(o.toUpperCase(),u(this,j),h)})}return this},this.use=(n,...i)=>(typeof n=="string"?p(this,j,n):(p(this,j,"*"),i.unshift(n)),i.forEach(c=>{this.addRoute(R,u(this,j),c)}),this);const s=t.strict??!0;delete t.strict,Object.assign(this,t),this.getPath=s?t.getPath??ye:Be}clone(){const t=new je({router:this.router,getPath:this.getPath});return t.routes=this.routes,t}route(t,r){const s=this.basePath(t);return r.routes.map(n=>{let i;r.errorHandler===de?i=n.handler:(i=async(c,a)=>(await ue([],r.errorHandler)(c,()=>n.handler(c,a))).res,i[Xe]=n.handler),s.addRoute(n.method,n.path,i)}),this}basePath(t){const r=this.clone();return r._basePath=k(this._basePath,t),r}mount(t,r,s){let n,i;s&&(typeof s=="function"?i=s:(i=s.optionHandler,n=s.replaceRequest));const c=i?o=>{const h=i(o);return Array.isArray(h)?h:[h]}:o=>{let h;try{h=o.executionCtx}catch{}return[o.env,h]};n||(n=(()=>{const o=k(this._basePath,t),h=o==="/"?0:o.length;return l=>{const f=new URL(l.url);return f.pathname=f.pathname.slice(h)||"/",new Request(f,l)}})());const a=async(o,h)=>{const l=await r(n(o.req.raw),...c(o));if(l)return l;await h()};return this.addRoute(R,k(t,"*"),a),this}addRoute(t,r,s){t=t.toUpperCase(),r=k(this._basePath,r);const n={path:r,method:t,handler:s};this.router.add(t,r,[s,n]),this.routes.push(n)}matchRoute(t,r){return this.router.match(t,r)}handleError(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t}dispatch(t,r,s,n){if(n==="HEAD")return(async()=>new Response(null,await this.dispatch(t,r,s,"GET")))();const i=this.getPath(t,{env:s}),c=this.matchRoute(n,i),a=new Z(t,{path:i,matchResult:c,env:s,executionCtx:r,notFoundHandler:this.notFoundHandler});if(c[0].length===1){let h;try{h=c[0][0][0][0](a,async()=>{a.res=await this.notFoundHandler(a)})}catch(l){return this.handleError(l,a)}return h instanceof Promise?h.then(l=>l||(a.finalized?a.res:this.notFoundHandler(a))).catch(l=>this.handleError(l,a)):h??this.notFoundHandler(a)}const o=ue(c[0],this.errorHandler,this.notFoundHandler);return(async()=>{try{const h=await o(a);if(!h.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return h.res}catch(h){return this.handleError(h,a)}})()}},j=new WeakMap,me),te="[^/]+",U=".*",V="(?:|/.*)",B=Symbol(),Qe=new Set(".\\+*[^]$()");function Ye(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===U||e===V?1:t===U||t===V?-1:e===te?1:t===te?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var oe=class{constructor(){d(this,"index");d(this,"varIndex");d(this,"children",Object.create(null))}insert(t,r,s,n,i){if(t.length===0){if(this.index!==void 0)throw B;if(i)return;this.index=r;return}const[c,...a]=t,o=c==="*"?a.length===0?["","",U]:["","",te]:c==="/*"?["","",V]:c.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let h;if(o){const l=o[1];let f=o[2]||te;if(l&&o[2]&&(f=f.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(f)))throw B;if(h=this.children[f],!h){if(Object.keys(this.children).some(g=>g!==U&&g!==V))throw B;if(i)return;h=this.children[f]=new oe,l!==""&&(h.varIndex=n.varIndex++)}!i&&l!==""&&s.push([l,h.varIndex])}else if(h=this.children[c],!h){if(Object.keys(this.children).some(l=>l.length>1&&l!==U&&l!==V))throw B;if(i)return;h=this.children[c]=new oe}h.insert(a,r,s,n,i)}buildRegExpStr(){const r=Object.keys(this.children).sort(Ye).map(s=>{const n=this.children[s];return(typeof n.varIndex=="number"?`(${s})@${n.varIndex}`:Qe.has(s)?`\\${s}`:s)+n.buildRegExpStr()});return typeof this.index=="number"&&r.unshift(`#${this.index}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},Ze=class{constructor(){d(this,"context",{varIndex:0});d(this,"root",new oe)}insert(e,t,r){const s=[],n=[];for(let c=0;;){let a=!1;if(e=e.replace(/\{[^}]+\}/g,o=>{const h=`@\\${c}`;return n[c]=[h,o],c++,a=!0,h}),!a)break}const i=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let c=n.length-1;c>=0;c--){const[a]=n[c];for(let o=i.length-1;o>=0;o--)if(i[o].indexOf(a)!==-1){i[o]=i[o].replace(a,n[c][1]);break}}return this.root.insert(i,t,s,this.context,r),s}buildRegExp(){let e=this.root.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,c)=>typeof i<"u"?(r[++t]=Number(i),"$()"):(typeof c<"u"&&(s[Number(c)]=++t),"")),[new RegExp(`^${e}`),r,s]}},Pe=[],et=[/^$/,[],Object.create(null)],ee=Object.create(null);function Se(e){return ee[e]??(ee[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function tt(){ee=Object.create(null)}function rt(e){var h;const t=new Ze,r=[];if(e.length===0)return et;const s=e.map(l=>[!/\*|\/:/.test(l[0]),...l]).sort(([l,f],[g,S])=>l?1:g?-1:f.length-S.length),n=Object.create(null);for(let l=0,f=-1,g=s.length;l<g;l++){const[S,w,v]=s[l];S?n[w]=[v.map(([P])=>[P,Object.create(null)]),Pe]:f++;let E;try{E=t.insert(w,f,S)}catch(P){throw P===B?new Oe(w):P}S||(r[f]=v.map(([P,T])=>{const A=Object.create(null);for(T-=1;T>=0;T--){const[J,Q]=E[T];A[J]=Q}return[P,A]}))}const[i,c,a]=t.buildRegExp();for(let l=0,f=r.length;l<f;l++)for(let g=0,S=r[l].length;g<S;g++){const w=(h=r[l][g])==null?void 0:h[1];if(!w)continue;const v=Object.keys(w);for(let E=0,P=v.length;E<P;E++)w[v[E]]=a[w[v[E]]]}const o=[];for(const l in c)o[l]=r[c[l]];return[i,o,n]}function I(e,t){if(e){for(const r of Object.keys(e).sort((s,n)=>n.length-s.length))if(Se(r).test(t))return[...e[r]]}}var st=class{constructor(){d(this,"name","RegExpRouter");d(this,"middleware");d(this,"routes");this.middleware={[R]:Object.create(null)},this.routes={[R]:Object.create(null)}}add(e,t,r){var a;const{middleware:s,routes:n}=this;if(!s||!n)throw new Error(xe);s[e]||[s,n].forEach(o=>{o[e]=Object.create(null),Object.keys(o[R]).forEach(h=>{o[e][h]=[...o[R][h]]})}),t==="/*"&&(t="*");const i=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const o=Se(t);e===R?Object.keys(s).forEach(h=>{var l;(l=s[h])[t]||(l[t]=I(s[h],t)||I(s[R],t)||[])}):(a=s[e])[t]||(a[t]=I(s[e],t)||I(s[R],t)||[]),Object.keys(s).forEach(h=>{(e===R||e===h)&&Object.keys(s[h]).forEach(l=>{o.test(l)&&s[h][l].push([r,i])})}),Object.keys(n).forEach(h=>{(e===R||e===h)&&Object.keys(n[h]).forEach(l=>o.test(l)&&n[h][l].push([r,i]))});return}const c=Re(t)||[t];for(let o=0,h=c.length;o<h;o++){const l=c[o];Object.keys(n).forEach(f=>{var g;(e===R||e===f)&&((g=n[f])[l]||(g[l]=[...I(s[f],l)||I(s[R],l)||[]]),n[f][l].push([r,i-h+o+1]))})}}match(e,t){tt();const r=this.buildAllMatchers();return this.match=(s,n)=>{const i=r[s]||r[R],c=i[2][n];if(c)return c;const a=n.match(i[0]);if(!a)return[[],Pe];const o=a.indexOf("",1);return[i[1][o],a]},this.match(e,t)}buildAllMatchers(){const e=Object.create(null);return[...Object.keys(this.routes),...Object.keys(this.middleware)].forEach(t=>{e[t]||(e[t]=this.buildMatcher(t))}),this.middleware=this.routes=void 0,e}buildMatcher(e){const t=[];let r=e===R;return[this.middleware,this.routes].forEach(s=>{const n=s[e]?Object.keys(s[e]).map(i=>[i,s[e][i]]):[];n.length!==0?(r||(r=!0),t.push(...n)):e!==R&&t.push(...Object.keys(s[R]).map(i=>[i,s[R][i]]))}),r?rt(t):null}},nt=class{constructor(e){d(this,"name","SmartRouter");d(this,"routers",[]);d(this,"routes",[]);Object.assign(this,e)}add(e,t,r){if(!this.routes)throw new Error(xe);this.routes.push([e,t,r])}match(e,t){if(!this.routes)throw new Error("Fatal error");const{routers:r,routes:s}=this,n=r.length;let i=0,c;for(;i<n;i++){const a=r[i];try{s.forEach(o=>{a.add(...o)}),c=a.match(e,t)}catch(o){if(o instanceof Oe)continue;throw o}this.match=a.match.bind(a),this.routers=[a],this.routes=void 0;break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,c}get activeRouter(){if(this.routes||this.routers.length!==1)throw new Error("No active router has been determined yet.");return this.routers[0]}},Ae=class{constructor(e,t,r){d(this,"methods");d(this,"children");d(this,"patterns");d(this,"order",0);d(this,"name");d(this,"params",Object.create(null));if(this.children=r||Object.create(null),this.methods=[],this.name="",e&&t){const s=Object.create(null);s[e]={handler:t,possibleKeys:[],score:0,name:this.name},this.methods=[s]}this.patterns=[]}insert(e,t,r){this.name=`${e} ${t}`,this.order=++this.order;let s=this;const n=Ne(t),i=[];for(let o=0,h=n.length;o<h;o++){const l=n[o];if(Object.keys(s.children).includes(l)){s=s.children[l];const g=le(l);g&&i.push(g[1]);continue}s.children[l]=new Ae;const f=le(l);f&&(s.patterns.push(f),i.push(f[1])),s=s.children[l]}s.methods.length||(s.methods=[]);const c=Object.create(null),a={handler:r,possibleKeys:i.filter((o,h,l)=>l.indexOf(o)===h),name:this.name,score:this.order};return c[e]=a,s.methods.push(c),s}gHSets(e,t,r,s){const n=[];for(let i=0,c=e.methods.length;i<c;i++){const a=e.methods[i],o=a[t]||a[R],h=Object.create(null);o!==void 0&&(o.params=Object.create(null),o.possibleKeys.forEach(l=>{const f=h[o.name];o.params[l]=s[l]&&!f?s[l]:r[l]??s[l],h[o.name]=!0}),n.push(o))}return n}search(e,t){const r=[];this.params=Object.create(null);let n=[this];const i=we(t);for(let a=0,o=i.length;a<o;a++){const h=i[a],l=a===o-1,f=[];for(let g=0,S=n.length;g<S;g++){const w=n[g],v=w.children[h];v&&(v.params=w.params,l===!0?(v.children["*"]&&r.push(...this.gHSets(v.children["*"],e,w.params,Object.create(null))),r.push(...this.gHSets(v,e,w.params,Object.create(null)))):f.push(v));for(let E=0,P=w.patterns.length;E<P;E++){const T=w.patterns[E],A={...w.params};if(T==="*"){const re=w.children["*"];re&&(r.push(...this.gHSets(re,e,w.params,Object.create(null))),f.push(re));continue}if(h==="")continue;const[J,Q,q]=T,M=w.children[J],ae=i.slice(a).join("/");if(q instanceof RegExp&&q.test(ae)){A[Q]=ae,r.push(...this.gHSets(M,e,w.params,A));continue}(q===!0||q instanceof RegExp&&q.test(h))&&typeof J=="string"&&(A[Q]=h,l===!0?(r.push(...this.gHSets(M,e,A,w.params)),M.children["*"]&&r.push(...this.gHSets(M.children["*"],e,A,w.params))):(M.params=A,f.push(M)))}}n=f}return[r.sort((a,o)=>a.score-o.score).map(({handler:a,params:o})=>[a,o])]}},it=class{constructor(){d(this,"name","TrieRouter");d(this,"node");this.node=new Ae}add(e,t,r){const s=Re(t);if(s){for(const n of s)this.node.insert(e,n,r);return}this.node.insert(e,t,r)}match(e,t){return this.node.search(e,t)}},He=class extends je{constructor(e={}){super(e),this.router=e.router??new nt({routers:[new st,new it]})}},ot=e=>{const r={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},s=(n=>typeof n=="string"?()=>n:typeof n=="function"?n:i=>n.includes(i)?i:n[0])(r.origin);return async function(i,c){var h,l;function a(f,g){i.res.headers.set(f,g)}const o=s(i.req.header("origin")||"",i);if(o&&a("Access-Control-Allow-Origin",o),r.origin!=="*"){const f=i.req.header("Vary");f?a("Vary",f):a("Vary","Origin")}if(r.credentials&&a("Access-Control-Allow-Credentials","true"),(h=r.exposeHeaders)!=null&&h.length&&a("Access-Control-Expose-Headers",r.exposeHeaders.join(",")),i.req.method==="OPTIONS"){r.maxAge!=null&&a("Access-Control-Max-Age",r.maxAge.toString()),(l=r.allowMethods)!=null&&l.length&&a("Access-Control-Allow-Methods",r.allowMethods.join(","));let f=r.allowHeaders;if(!(f!=null&&f.length)){const g=i.req.header("Access-Control-Request-Headers");g&&(f=g.split(/\s*,\s*/))}return f!=null&&f.length&&(a("Access-Control-Allow-Headers",f.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:i.res.statusText})}await c()}};const L=new He;L.use("*",async(e,t)=>ot({origin:["http://localhost:5173",e.env.CORS_ORIGIN]})(e,t));L.get("/memos",async e=>{const t=await e.env.MEMOS.list().then(async({keys:r})=>Promise.all(r.map(async s=>e.env.MEMOS.get(s.name,{type:"json"})))).then(r=>r.sort((s,n)=>n.date-s.date));return e.json(t)});const at=(e,t)=>r=>({method:"sendMessage",chat_id:e,text:r,reply_to_message_id:t,disable_notification:!0});L.post("/telegram/webhook/:token",async e=>{var a;if(e.req.param("token")!==e.env.TG_BOT_TOKEN)return e.status(403),e.json({message:"Forbiden: Invalid token"});const{message:r}=await e.req.json();if(!r)return e.json({message:"No message"});const s=at(r.chat.id,r.message_id);if(r.from.id.toString()!==e.env.TG_USER_ID)return e.json(s("Invalid user. This is a private bot."));const n={id:r.message_id,date:r.date,from:{id:r.from.id,username:r.from.username},text:r.text||r.caption||"",photos:Array.from(((a=r.photo)==null?void 0:a.reduce((o,h)=>{const l=h.file_id.split("_")[0];return o.has(l)?o.get(l).file_size<h.file_size&&o.set(l,h):o.set(l,h),o},new Map).values())||[])};console.log(n);const i=60*60*24*parseInt(e.env.EXPIRE_DAYS),c=r.message_id.toString();return await e.env.MEMOS.put(c,JSON.stringify(n),{expirationTtl:i}),e.json(s("Success"))});L.get("/telegram/file/:file_id",async e=>{const{file_id:t}=e.req.param(),r="https://api.telegram.org",s=e.env.TG_BOT_TOKEN,n=await fetch(`${r}/bot${s}/getFile?file_id=${t}`).then(i=>i.json()).then(i=>fetch(`${r}/file/bot${s}/${i.result.file_path}`));return new Response(n.body,n)});L.get("/telegram/avatar/:user_id",async e=>{const{user_id:t}=e.req.param(),r="https://api.telegram.org",s=e.env.TG_BOT_TOKEN,i=(await fetch(`${r}/bot${s}/getUserProfilePhotos?user_id=${t}`).then(c=>c.json())).result.photos[0].at(-1).file_id;return e.redirect(`/telegram/file/${i}`)});const fe=new He,ct=Object.assign({"/src/index.tsx":L});let _e=!1;for(const[,e]of Object.entries(ct))e&&(fe.route("/",e),fe.notFound(e.notFoundHandler),_e=!0);if(!_e)throw new Error("Can't import modules from ['/src/index.tsx','/app/server.ts']");export{fe as default};
