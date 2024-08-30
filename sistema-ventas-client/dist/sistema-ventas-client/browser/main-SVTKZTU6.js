import{a as y}from"./chunk-GV2HO34K.js";import{a as V,b as Xe,c as Ye,d as Qe,e as We,f as Je,i as Ke,j as et,k as tt,l as nt}from"./chunk-UYM3372Q.js";import"./chunk-J545SRXK.js";import"./chunk-ZETOQEDU.js";import{Da as it,E as Be,F as $e,G as Ge,W as M}from"./chunk-OM5FE3UL.js";import{b as Re,c as Te,d as Ae,e as je,f as Le,g as ze,h as Ve,i as He,j as Ue,k as L,l as $}from"./chunk-BBVDCCLH.js";import{c as qe,d as G,f as z,g as Ze,h as q}from"./chunk-IX6G3U3V.js";import{$a as me,Ba as se,C as te,Cb as a,Da as le,Db as s,Dc as De,Eb as h,Fb as be,Gb as ye,I as F,Ib as k,Ja as ce,Lb as E,Lc as A,M as ie,Mc as j,Nb as b,Ob as Ce,Oc as Fe,Pb as xe,Rb as Se,Sb as _e,Tb as Me,Ub as N,Vb as c,W as w,Wa as pe,Wb as B,Xb as we,Yb as Ie,Z as ne,Za as p,_a as v,_b as Oe,a as J,aa as R,ac as ke,b as K,ba as S,bb as de,bc as Ee,cc as Ne,da as oe,db as ue,fb as fe,ga as d,gb as he,j as P,k as ee,ka as u,la as _,na as re,oa as U,pc as Pe,rb as f,sa as ae,t as D,ta as I,tb as m,ua as O,ub as T,vb as ge,wb as ve}from"./chunk-XDC2YFKR.js";var ot=(i,e)=>d(y).token$.pipe(F(1),D(t=>!t));var rt=(i,e)=>{let o=d(y),t=d(Ue);return o.token$.pipe(F(1),D(n=>n?!0:t.createUrlTree(["/login"])))};var Ct=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-5XGT54RV.js").then(i=>i.HomeModule)},{path:"notFound",loadChildren:()=>import("./chunk-S6A2CSYF.js").then(i=>i.NotFoundModule)},{path:"admin",loadChildren:()=>import("./chunk-JW6DB5WG.js").then(i=>i.AdminModule),canActivate:[rt]},{path:"login",loadChildren:()=>import("./chunk-C3WSCYHI.js").then(i=>i.LoginModule),canActivate:[ot]}],at=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=S({imports:[$.forRoot(Ct),$]});let i=e;return i})();var St=["overlay"],_t=["*"];function Mt(i,e){i&1&&h(0,"div")}function wt(i,e){if(i&1&&(a(0,"div"),f(1,Mt,1,0,"div",6),s()),i&2){let o=b(2);ve(o.spinner.class),T("color",o.spinner.color),p(),m("ngForOf",o.spinner.divArray)}}function It(i,e){if(i&1&&(h(0,"div",7),ke(1,"safeHtml")),i&2){let o=b(2);m("innerHTML",Ee(1,1,o.template),pe)}}function Ot(i,e){if(i&1&&(a(0,"div",2,0),f(2,wt,2,5,"div",3)(3,It,2,3,"div",4),a(4,"div",5),xe(5),s()()),i&2){let o=b();T("background-color",o.spinner.bdColor)("z-index",o.spinner.zIndex)("position",o.spinner.fullScreen?"fixed":"absolute"),m("@.disabled",o.disableAnimation)("@fadeIn","in"),p(2),m("ngIf",!o.template),p(),m("ngIf",o.template),p(),T("z-index",o.spinner.zIndex)}}var kt={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},Z={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},X="primary",x=class i{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new i(e)}},Y=(()=>{let e=class e{constructor(){this.spinnerObservable=new ee(null)}getSpinner(t){return this.spinnerObservable.asObservable().pipe(te(n=>n&&n.name===t))}show(t=X,n){return new Promise((r,l)=>{setTimeout(()=>{n&&Object.keys(n).length?(n.name=t,this.spinnerObservable.next(new x(K(J({},n),{show:!0}))),r(!0)):(this.spinnerObservable.next(new x({name:t,show:!0})),r(!0))},10)})}hide(t=X,n=10){return new Promise((r,l)=>{setTimeout(()=>{this.spinnerObservable.next(new x({name:t,show:!1})),r(!0)},n)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),st=new oe("NGX_SPINNER_CONFIG"),Et=(()=>{let e=class e{constructor(t){this._sanitizer=t}transform(t){if(t)return this._sanitizer.bypassSecurityTrustHtml(t)}};e.\u0275fac=function(n){return new(n||e)(v(ze,16))},e.\u0275pipe=re({name:"safeHtml",type:e,pure:!0,standalone:!0});let i=e;return i})(),lt=(()=>{let e=class e{constructor(t,n,r,l){this.spinnerService=t,this.changeDetector=n,this.elementRef=r,this.globalConfig=l,this.disableAnimation=!1,this.spinner=new x,this.ngUnsubscribe=new P,this.setDefaultOptions=()=>{let{type:g}=this.globalConfig??{};this.spinner=x.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??g,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=Z.BD_COLOR,this.zIndex=Z.Z_INDEX,this.color=Z.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=X,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(w(this.ngUnsubscribe)).subscribe(t=>{this.setDefaultOptions(),Object.assign(this.spinner,t),t.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(t){return t===this.elementRef.nativeElement.parentElement?!0:t.parentNode&&this.isSpinnerZone(t.parentNode)}ngOnChanges(t){for(let n in t)if(n){let r=t[n];if(r.isFirstChange())return;typeof r.currentValue<"u"&&r.currentValue!==r.previousValue&&r.currentValue!==""&&(this.spinner[n]=r.currentValue,n==="showSpinner"&&(r.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),n==="name"&&this.initObservable())}}getClass(t,n){this.spinner.divCount=kt[t],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((l,g)=>g);let r="";switch(n.toLowerCase()){case"small":r="la-sm";break;case"medium":r="la-2x";break;case"large":r="la-3x";break;default:break}return"la-"+t+" "+r}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}};e.\u0275fac=function(n){return new(n||e)(v(Y),v(Pe),v(se),v(st,8))},e.\u0275cmp=u({type:e,selectors:[["ngx-spinner"]],viewQuery:function(n,r){if(n&1&&Se(St,5),n&2){let l;_e(l=Me())&&(r.spinnerDOM=l.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[ae,Oe],ngContentSelectors:_t,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,r){n&1&&(Ce(),f(0,Ot,6,12,"div",1)),n&2&&m("ngIf",r.spinner.show)},dependencies:[Et,j,A],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[qe("fadeIn",[Ze("in",z({opacity:1})),q(":enter",[z({opacity:0}),G(300)]),q(":leave",G(200,z({opacity:0})))])]},changeDetection:0});let i=e;return i})(),ct=(()=>{let e=class e{static forRoot(t){return{ngModule:e,providers:[{provide:st,useValue:t}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=S({imports:[Fe]});let i=e;return i})();function Ft(i,e){if(i&1){let o=k();be(0),a(1,"button",6),E("click",function(){I(o);let n=b();return O(n.onToggleSidenav())}),a(2,"mat-icon"),c(3,"menu"),s()(),ye()}}function Rt(i,e){i&1&&(a(0,"a",7),c(1,"Iniciar sesi\xF3n"),s())}function Tt(i,e){if(i&1){let o=k();a(0,"button",8),c(1),a(2,"mat-icon"),c(3,"expand_more"),s()(),a(4,"mat-menu",null,1)(6,"button",9),E("click",function(){I(o);let n=b();return O(n.onLogout())}),a(7,"mat-icon"),c(8,"logout"),s(),c(9," Cerrar sesi\xF3n "),s()()}if(i&2){let o=N(5),t=b();m("matMenuTriggerFor",o),p(),Ie(" ",t.data.nombre?t.data.nombre:""," ",t.data.apellidos?t.data.apellidos:""," ")}}var dt=(()=>{let e=class e{constructor(t){this.authSvc=t,this.toggleSidenav=new le,this.isLogged=!1,this.data={},this.destroy$=new P}ngOnInit(){this.authSvc.isLogged$.pipe(w(this.destroy$)).subscribe(t=>{this.isLogged=t,console.log("isLogged",this.isLogged)}),this.authSvc.tokenData$.pipe(w(this.destroy$)).subscribe(t=>{this.data=t,console.log("data",this.data)})}onToggleSidenav(){this.toggleSidenav.emit()}onLogout(){this.authSvc.logout()}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}};e.\u0275fac=function(n){return new(n||e)(v(y))},e.\u0275cmp=u({type:e,selectors:[["app-header"]],outputs:{toggleSidenav:"toggleSidenav"},decls:9,vars:5,consts:[["viewLogOut",""],["lista","matMenu"],[4,"ngIf"],["routerLink","/home"],[1,"spacer"],["mat-button","","color","primary","routerLink","/login",4,"ngIf","ngIfElse"],["mat-icon-button","",3,"click"],["mat-button","","color","primary","routerLink","/login"],["mat-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"]],template:function(n,r){if(n&1&&(a(0,"mat-toolbar"),f(1,Ft,4,0,"ng-container",2),a(2,"span")(3,"a",3),c(4,"Sistema de Ventas"),s()(),h(5,"span",4),f(6,Rt,2,0,"a",5),s(),f(7,Tt,10,3,"ng-template",null,0,Ne)),n&2){let l=N(8);ge("mat-elevation-z1",!0),p(),m("ngIf",r.isLogged),p(5),m("ngIf",!r.isLogged)("ngIfElse",l)}},dependencies:[j,L,$e,Be,Ge,M,V,et,Ke,tt],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}"]});let i=e;return i})();var ut=(()=>{let e=class e{constructor(){this.currentYear=new Date().getFullYear()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-footer"]],decls:20,vars:1,consts:[[1,"footer"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"col-md-6","text-md-right"],["href","",1,"me-2"],["color","primary"],["href",""],["color","warn"],[1,"col"],[1,"text-muted"]],template:function(n,r){n&1&&(a(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p"),c(5," Magna veniam laborum tempor consecte "),s()(),a(6,"div",4)(7,"a",5)(8,"mat-icon",6),c(9,"facebook"),s()(),a(10,"a",7)(11,"mat-icon",8),c(12,"my_location"),s()()()(),a(13,"div",2)(14,"div",9),h(15,"hr"),s()(),a(16,"div",2)(17,"div",9)(18,"span",10),c(19),s()()()()()),n&2&&(p(19),we("",r.currentYear," Mi Empresa"))},dependencies:[M],styles:['@charset "UTF-8";.footer[_ngcontent-%COMP%]{position:fixed;width:100%;bottom:0;background-color:#f5f5f5;padding:10px 0;text-align:center;z-index:10;box-shadow:0 -2px 5px #0000001a}.container[_ngcontent-%COMP%]{max-width:1000px;margin:0 auto}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.footer[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:10px 0}body[_ngcontent-%COMP%]{padding-bottom:60px}']});let i=e;return i})();function Lt(i,e){if(i&1&&(a(0,"div")(1,"a",2)(2,"mat-icon",3),c(3),s(),a(4,"span"),c(5),s()()()),i&2){let o=e.$implicit;p(),m("routerLink",o.route),p(2),B(o.icon),p(2),B(o.name)}}var ft=(()=>{let e=class e{constructor(){this.menus=[]}ngOnInit(){this.generarMenu()}generarMenu(){this.menus.push({icon:"home",name:"Home",route:"/"},{icon:"person",name:"Usuarios",route:"/admin/usuarios"},{icon:"category",name:"Categor\xEDas",route:"admin/categorias"},{icon:"inventory_2",name:"Productos",route:"admin/productos"},{icon:"shopping_cart",name:"Ventas",route:"ventas/ventas"},{icon:"content_copy",name:"Productos",route:"ventas/reportes"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-sidebar"]],decls:4,vars:1,consts:[["color","primary"],[4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink"],[1,"me-2"]],template:function(n,r){n&1&&(a(0,"mat-toolbar",0),c(1,"Menu"),s(),a(2,"mat-list"),f(3,Lt,6,3,"div",1),s()),n&2&&(p(3),m("ngForOf",r.menus))},dependencies:[A,L,M,V,We,Je]});let i=e;return i})();var ht=(()=>{let e=class e{constructor(){this.title="sistema-ventas-client"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:11,vars:1,consts:[["sidenav",""],["mode","push"],[3,"toggleSidenav"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#ff1b82","type","ball-triangle-path",3,"fullScreen"],[2,"color","white"]],template:function(n,r){if(n&1){let l=k();a(0,"mat-sidenav-container")(1,"mat-sidenav",1,0),h(3,"app-sidebar"),s(),a(4,"mat-sidenav-content")(5,"app-header",2),E("toggleSidenav",function(){I(l);let H=N(2);return O(H.toggle())}),s(),h(6,"router-outlet")(7,"app-footer"),s()(),a(8,"ngx-spinner",3)(9,"p",4),c(10," Cargando... "),s()()}n&2&&(p(8),m("fullScreen",!0))},dependencies:[He,Ye,Qe,Xe,lt,dt,ut,ft],styles:["mat-sidenav[_ngcontent-%COMP%]{width:25%}mat-sidenav-container[_ngcontent-%COMP%]{height:100%}"]});let i=e;return i})();var Vt="@",Ht=(()=>{let e=class e{constructor(t,n,r,l,g){this.doc=t,this.delegate=n,this.zone=r,this.animationType=l,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=d(de,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-GEE3ZCOT.js").then(n=>n)).catch(n=>{throw new ne(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let l=new Q(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let H=g.createRenderer(t,n);l.use(H),this.scheduler?.notify(9)}).catch(g=>{l.use(r)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){me()},e.\u0275prov=R({token:e,factory:e.\u0275fac});let i=e;return i})(),Q=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,n){this.delegate.insertBefore(e,o,t,n)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,n){this.delegate.setAttribute(e,o,t,n)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,n){this.delegate.setStyle(e,o,t,n)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Vt)}};function gt(i="animations"){return fe("NgAsyncAnimations"),U([{provide:ue,useFactory:(e,o,t)=>new Ht(e,o,t,i),deps:[De,Ae,he]},{provide:ce,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var W=0,vt=(i,e)=>{let o=d(Y);return W++,o.show(),e(i).pipe(ie(()=>{W--,W===0&&o.hide()}))};var bt=(i,e)=>{if(i.headers.get("requireToken")){let t=d(y).tokenValue;if(t){let n=i.clone({setHeaders:{auth:`${t}`}});return e(n)}}return e(i)};var yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e,bootstrap:[ht]}),e.\u0275inj=S({providers:[Ve(),gt(),Re(Te([vt,bt]))],imports:[Le,at,nt,ct,it]});let i=e;return i})();je().bootstrapModule(yt,{ngZoneEventCoalescing:!0}).catch(i=>console.error(i));
