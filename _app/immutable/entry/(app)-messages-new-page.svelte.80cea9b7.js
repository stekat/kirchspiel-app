import{S as De,i as Ne,s as Ve,k as a,q as K,a as _,l as s,m as o,r as O,h as r,c as p,n as t,b as ye,H as e,L as Le,K as Ae,I as ie,M as Be}from"../chunks/index.a77ba8c3.js";import{g as Te}from"../chunks/navigation.c63a3be9.js";function Ie(h,l,f){const i=h.slice();return i[3]=l[f],i}function xe(h){let l,f=h[3].text+"",i,m;return{c(){l=a("option"),i=K(f),m=_(),this.h()},l(v){l=s(v,"OPTION",{});var b=o(l);i=O(b,f),m=p(b),b.forEach(r),this.h()},h(){l.__value=h[3],l.value=l.__value},m(v,b){ye(v,l,b),e(l,i),e(l,m)},p:ie,d(v){v&&r(l)}}}function ke(h){let l,f,i,m,v,b,F,P,g,U,G,J,S,j,u,I,L,X,Q,q,W,x,A,Y,Z,w,ee,y,B,te,le,D,ae,N,T,se,re,C,oe,de,M=h[1],d=[];for(let n=0;n<M.length;n+=1)d[n]=xe(Ie(h,M,n));return{c(){l=a("div"),f=a("div"),i=a("div"),m=a("div"),v=a("h5"),b=K("Neue Nachricht senden"),F=_(),P=a("div"),g=a("button"),U=a("i"),G=K(" versenden"),J=_(),S=a("div"),j=a("form"),u=a("div"),I=a("div"),L=a("label"),X=K("Betreff"),Q=_(),q=a("input"),W=_(),x=a("div"),A=a("label"),Y=K("Nachricht"),Z=_(),w=a("textarea"),ee=_(),y=a("div"),B=a("label"),te=K("Kanal"),le=_(),D=a("select");for(let n=0;n<d.length;n+=1)d[n].c();ae=_(),N=a("div"),T=a("label"),se=K("Ablaufdatum"),re=_(),C=a("input"),this.h()},l(n){l=s(n,"DIV",{class:!0});var E=o(l);f=s(E,"DIV",{class:!0});var c=o(f);i=s(c,"DIV",{class:!0});var k=o(i);m=s(k,"DIV",{class:!0});var fe=o(m);v=s(fe,"H5",{});var ue=o(v);b=O(ue,"Neue Nachricht senden"),ue.forEach(r),fe.forEach(r),F=p(k),P=s(k,"DIV",{class:!0});var he=o(P);g=s(he,"BUTTON",{class:!0});var ce=o(g);U=s(ce,"I",{class:!0}),o(U).forEach(r),G=O(ce," versenden"),ce.forEach(r),he.forEach(r),k.forEach(r),c.forEach(r),J=p(E),S=s(E,"DIV",{class:!0});var ve=o(S);j=s(ve,"FORM",{});var me=o(j);u=s(me,"DIV",{class:!0});var V=o(u);I=s(V,"DIV",{class:!0});var H=o(I);L=s(H,"LABEL",{class:!0,for:!0});var _e=o(L);X=O(_e,"Betreff"),_e.forEach(r),Q=p(H),q=s(H,"INPUT",{class:!0,type:!0,placeholder:!0}),H.forEach(r),W=p(V),x=s(V,"DIV",{class:!0});var R=o(x);A=s(R,"LABEL",{class:!0,for:!0});var pe=o(A);Y=O(pe,"Nachricht"),pe.forEach(r),Z=p(R),w=s(R,"TEXTAREA",{class:!0,placeholder:!0}),o(w).forEach(r),R.forEach(r),ee=p(V),y=s(V,"DIV",{class:!0});var $=o(y);B=s($,"LABEL",{class:!0,for:!0});var be=o(B);te=O(be,"Kanal"),be.forEach(r),le=p($),D=s($,"SELECT",{class:!0});var Ee=o(D);for(let ne=0;ne<d.length;ne+=1)d[ne].l(Ee);Ee.forEach(r),$.forEach(r),ae=p(V),N=s(V,"DIV",{class:!0});var z=o(N);T=s(z,"LABEL",{class:!0,for:!0});var ge=o(T);se=O(ge,"Ablaufdatum"),ge.forEach(r),re=p(z),C=s(z,"INPUT",{class:!0,type:!0,placeholder:!0}),z.forEach(r),V.forEach(r),me.forEach(r),ve.forEach(r),E.forEach(r),this.h()},h(){t(m,"class","col-4 col-sm-auto d-flex align-items-center"),t(U,"class","fa-solid fa-paper-plane"),t(g,"class","btn btn-outline-secondary"),t(P,"class","col-8 col-sm-auto d-flex text-right"),t(i,"class","row d-flex justify-content-between align-items-center"),t(f,"class","card-header"),t(L,"class","form-label"),t(L,"for","message-subject"),t(q,"class","form-control"),t(q,"type","text"),t(q,"placeholder","Betreff"),t(I,"class","col-12 mb-3"),t(A,"class","form-label"),t(A,"for","message-body"),t(w,"class","form-control"),t(w,"placeholder","Nachricht"),t(x,"class","col-12 mb-3"),t(B,"class","form-label"),t(B,"for","category"),t(D,"class","form-select"),t(y,"class","col-sm-6 mb-3"),t(T,"class","form-label"),t(T,"for","expiry-date"),t(C,"class","form-control"),t(C,"type","text"),t(C,"placeholder","Ablaufdatum, z.B. 01.01.2001"),t(N,"class","col-sm-6 mb-3"),t(u,"class","row"),t(S,"class","card-body"),t(l,"class","card")},m(n,E){ye(n,l,E),e(l,f),e(f,i),e(i,m),e(m,v),e(v,b),e(i,F),e(i,P),e(P,g),e(g,U),e(g,G),e(l,J),e(l,S),e(S,j),e(j,u),e(u,I),e(I,L),e(L,X),e(I,Q),e(I,q),e(u,W),e(u,x),e(x,A),e(A,Y),e(x,Z),e(x,w),e(u,ee),e(u,y),e(y,B),e(B,te),e(y,le),e(y,D);for(let c=0;c<d.length;c+=1)d[c].m(D,null);Le(D,h[2]),e(u,ae),e(u,N),e(N,T),e(T,se),e(N,re),e(N,C),oe||(de=Ae(g,"click",h[0],{once:!0}),oe=!0)},p(n,[E]){if(E&2){M=n[1];let c;for(c=0;c<M.length;c+=1){const k=Ie(n,M,c);d[c]?d[c].p(k,E):(d[c]=xe(k),d[c].c(),d[c].m(D,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=M.length}},i:ie,o:ie,d(n){n&&r(l),Be(d,n),oe=!1,de()}}}function Ke(h){function l(){Te("/messages/")}let f=[{id:1,text:"Konfi"},{id:2,text:"Jugend"},{id:3,text:"Gemeinde"}],i;return[l,f,i]}class Se extends De{constructor(l){super(),Ne(this,l,Ke,ke,Ve,{})}}export{Se as default};
