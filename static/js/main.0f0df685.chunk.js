(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){e.exports={overlay:"DetailWork_overlay__2E0TH",popupItem:"DetailWork_popupItem__1uHih"}},108:function(e,t,a){e.exports=a.p+"static/media/formSamurai.2cd3791b.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/samurai-voiny-zima-asia-legends-david-benzal-aziia-iaponiia.5f610657.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/mountdown.bb55f8d7.webp"},126:function(e,t,a){e.exports={mount:"MountDown_mount__3VGZB",move:"MountDown_move__1QHqX"}},127:function(e,t,a){e.exports=a.p+"static/media/mountapp.23d89800.webp"},128:function(e,t,a){e.exports={mount:"MountUp_mount__2xPnt",move:"MountUp_move__I17HS"}},129:function(e,t,a){e.exports=a.p+"static/media/samurai.3f7073f0.webp"},130:function(e,t,a){e.exports={samurai:"Samurai_samurai__226rd",move:"Samurai_move__3Atei"}},131:function(e,t,a){e.exports={switch:"Switch_switch__2yS-h"}},132:function(e,t,a){e.exports=a.p+"static/media/skill1.41711b9e.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/skill2.240f8f23.jpg"},150:function(e,t,a){e.exports=a(203)},156:function(e,t,a){},161:function(e,t,a){},184:function(e,t,a){var n={"./spa-articles.jpg":185,"./spa-network.jpg":186,"./spa-todolist.jpg":187};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=184},185:function(e,t,a){e.exports=a.p+"static/media/spa-articles.8a3800bc.jpg"},186:function(e,t,a){e.exports=a.p+"static/media/spa-network.2e0a60ba.jpg"},187:function(e,t,a){e.exports=a.p+"static/media/spa-todolist.482c5b6f.jpg"},188:function(e,t,a){var n={"./features-genymotion-imac.jpg":189,"./shopify_ecommerce.png":190,"./spa-articles.jpg":191,"./spa-network.jpg":192,"./spa-todolist.jpg":193};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=188},189:function(e,t,a){e.exports=a.p+"static/media/features-genymotion-imac.3c313227.jpg"},190:function(e,t,a){e.exports=a.p+"static/media/shopify_ecommerce.4c5586db.png"},191:function(e,t,a){e.exports=a.p+"static/media/spa-articles.34b20d09.jpg"},192:function(e,t,a){e.exports=a.p+"static/media/spa-network.3c8300c1.jpg"},193:function(e,t,a){e.exports=a.p+"static/media/spa-todolist.7b837158.jpg"},195:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),s=(a(155),a(156),a(43)),o=a(26),c=a(31),u=(a(161),a(242)),m=a(96),p=a.n(m),d=a(243),f=a(244),E=a(245),h=a(55),g=a(246),b=a(247),v=a(99),w=a.n(v),k=function(e){var t=e.item,n=e.showDetail,i=e.setOpen,l=p()({root:{width:"100%"},media:{height:300}})();return r.a.createElement(u.a,{className:l.root},r.a.createElement(d.a,null,r.a.createElement(f.a,{className:l.media,image:a(184)("./"+t.img),title:t.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},t.description.length>45?t.description.substr(0,45)+"..":t.description))),r.a.createElement(g.a,null,r.a.createElement(b.a,{size:"small",color:"primary",onClick:function(){return function(e){n(e),i(!0)}(t)}},"Learn More"),"#"!==t.href&&r.a.createElement(b.a,{target:"_blank",href:t.href},r.a.createElement(w.a,null))))},y=function(e){return r.a.createElement("span",{className:e.active===e.category.name?"active":"",onClick:function(){return t=e.category,e.sortItems(t.sort),void e.setActive(t.name);var t}},e.category.name)},N=a(19),_=a(100),x=a.n(_),S=a(249),j=a(250),O=a(101),D=a.n(O),I=a(248),T=a(102),C=a.n(T),q=a(103),A=a.n(q),R=a(104),P=a.n(R),W=a(3),M=a(251),H=Object(I.a)((function(e){return{media:{height:0,paddingTop:"40.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),L=function(e){var t=e.hideDetail,n=e.handleClose,i=e.item,l=r.a.useState(!1),s=Object(c.a)(l,2),o=s[0],m=s[1],p=H();return r.a.createElement(u.a,{className:x.a.popupItem},r.a.createElement(S.a,{action:r.a.createElement(j.a,{onClick:function(){t(),n()},"aria-label":"Close popup"},r.a.createElement(D.a,null)),title:i.name,subheader:i.addedDate}),r.a.createElement(f.a,{className:p.media,image:a(188)("./"+i.fullImg),title:i.name}),r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},i.description)),r.a.createElement(g.a,{disableSpacing:!0},r.a.createElement(j.a,{"aria-label":"add to favorites"},r.a.createElement(C.a,null)),r.a.createElement(j.a,{"aria-label":"share"},r.a.createElement(A.a,null)),r.a.createElement(j.a,{className:Object(W.a)(p.expand,Object(N.a)({},p.expandOpen,o)),onClick:function(){m(!o)},"aria-expanded":o,"aria-label":"show more"},r.a.createElement(P.a,null))),r.a.createElement(M.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(E.a,null,r.a.createElement(h.a,{paragraph:!0},i.fullText))))},F=a(212),B=a(209),Q=a(210),Y=a(261),J=a(262),z=a(253),G=a(107),U=a.n(G),K=Object(I.a)((function(e){return{modal:{display:"flex",position:"relative",alignItems:"center",justifyContent:"center",margin:"20px 0",overflowY:"scroll",width:"100vw"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],maxHeight:"90vh"}}})),X=function(e){var t=Object(n.useState)("All"),a=Object(c.a)(t,2),i=a[0],l=a[1],s=K(),o=r.a.useState(!1),u=Object(c.a)(o,2),m=u[0],p=u[1],d=function(){p(!1)},f=r.a.useState(null),E=Object(c.a)(f,2),h=E[0],g=E[1],v=function(t,a){g(null),"string"!==typeof a&&e.sortItems(a)};return r.a.createElement("section",{className:"wrap-works"},r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title titleWork titleDefault"},r.a.createElement("span",null,"WORK"),r.a.createElement(Y.a,{className:"worksFilter"},r.a.createElement(Y.a,{display:{xs:"block",md:"none"}},r.a.createElement(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){g(e.currentTarget)}},r.a.createElement("span",null," filter")," ",r.a.createElement(U.a,null)),r.a.createElement(J.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:v},e.categories.map((function(e){return r.a.createElement(z.a,{key:e.id,onClick:function(t){return v(0,e.sort)}},e.name)})))),r.a.createElement(Y.a,{display:{xs:"none",md:"block"}},e.categories.map((function(t){return r.a.createElement(y,{key:t.id,sortItems:e.sortItems,setActive:l,active:i,category:t})}))))),r.a.createElement("div",{className:"works"},e.items.map((function(t){return r.a.createElement(k,{key:t.id,setOpen:p,showDetail:e.showDetail,item:t})}))))),r.a.createElement(F.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:m,onClose:d,closeAfterTransition:!0,BackdropComponent:B.a,BackdropProps:{timeout:500}},r.a.createElement(Q.a,{in:m},r.a.createElement("div",{className:s.paper},r.a.createElement(L,{hideDetail:e.hideDetail,handleClose:d,item:e.itemsDetail})))))},V=a(35),Z={title:"Works",categories:[{id:0,name:"All",sort:"All"},{id:1,name:"Landing Page",sort:1},{id:2,name:"SPA",sort:2},{id:3,name:"Web-site",sort:3}],items:[{id:1,name:"Articles",img:"spa-articles.jpg",fullImg:"spa-articles.jpg",description:"This App create for Good2code company",addedDate:"December 14, 2020",href:"#",fullText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.",sort:2},{id:2,name:"TodoLists App",img:"spa-todolist.jpg",fullImg:"spa-todolist.jpg",description:"app for create tasks",addedDate:"November 12, 2019",href:"https://yevhensoldatov1998.github.io/typesctiptTodolist/",fullText:"This app created with: React JS, Redux, REST API, NodeJS , Express, Mongoose, MongoDB, Heroku, GIT, axios",sort:2},{id:3,name:"Social Network",img:"spa-network.jpg",fullImg:"spa-network.jpg",href:"https://yevhensoldatov1998.github.io/soc-network/",description:"In the process of development. My SPA  for communication between clients",addedDate:"July 1, 2019",fullText:"This app created with: React JS, Redux, REST API, NodeJS , Express, Mongoose, MongoDB, Heroku, GIT, axios </br> Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut varius risus. Fusce hendrerit, tellus sit amet vestibulum sodales, justo ex auctor ligula, sed tempor erat libero quis velit. Praesent lobortis pharetra augue vitae iaculis. Praesent non porttitor arcu. Quisque aliquet odio non urna tincidunt, eu consectetur lacus varius. Phasellus hendrerit nulla sed tristique dictum. Etiam vehicula dignissim lacinia. Sed ullamcorper turpis in eros rhoncus mattis. Nullam tellus lacus, tincidunt sed euismod at, tincidunt ac arcu. Integer aliquam consectetur dui a feugiat. Quisque a egestas ipsum. Maecenas quis libero pretium, ullamcorper ex non, suscipit nibh. Integer sit amet tincidunt nunc. Proin nisi orci, dictum id sodales auctor, tincidunt sed libero.",sort:2}],itemsDetail:{id:null,name:null,img:null,description:null,sort:null},currentSort:"All",isShowDetails:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT":return Object(V.a)({},e,{currentSort:t.currentSort});case"SHOW_DETAIL":return Object(V.a)({},e,{itemsDetail:t.item,isShowDetails:!0});case"HIDE_DETAIL":return Object(V.a)({},e,{isShowDetails:!1});default:return e}},ee=Object(o.b)((function(e){var t=e.works.items.filter((function(t){return"All"===e.works.currentSort?t:e.works.currentSort===t.sort?t:void 0}));return{title:e.works.title,categories:e.works.categories,items:t,itemsDetail:e.works.itemsDetail,currentSort:e.works.currentSort,isShowDetails:e.works.isShowDetails}}),{sortItems:function(e){return{type:"SORT",currentSort:e}},showDetail:function(e){return{type:"SHOW_DETAIL",item:e}},hideDetail:function(){return{type:"HIDE_DETAIL"}}})(X),te=(a(195),a(81)),ae=a(254),ne=a(263),re=a(264),ie=a(255),le=a(109),se=a.n(le),oe=a(110),ce=a.n(oe),ue=a(111),me=a.n(ue),pe=a(108),de=a.n(pe),fe=Object(I.a)((function(e){return{root:{padding:"120px 20px 60px",display:"flex",alignItems:"center",position:"relative",justifyContent:"space-between"},h2:{position:"absolute",top:0},formWrap:Object(N.a)({width:600,flexShrink:0},e.breakpoints.down("sm"),{width:"100%"}),form:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-end",padding:e.spacing(4)},margin:{marginBottom:40,width:"100%"},button:{},img:Object(N.a)({marginLeft:20},e.breakpoints.down("md"),{display:"none"})}})),Ee=function(){var e=fe();return r.a.createElement("div",{className:" contacts ".concat(e.root)},r.a.createElement("h2",{style:{opacity:.4},className:"title titleDefault ".concat(e.h2)},"\u9023\u7d61\u5148"),r.a.createElement(te.a,{elevation:3,className:e.formWrap},r.a.createElement("form",{action:"",className:e.form},r.a.createElement(ae.a,{className:e.margin},r.a.createElement(ne.a,{htmlFor:"input-name"},"Your name"),r.a.createElement(re.a,{id:"input-name",startAdornment:r.a.createElement(ie.a,{position:"start"},r.a.createElement(se.a,null))})),r.a.createElement(ae.a,{className:e.margin},r.a.createElement(ne.a,{htmlFor:"input-phone"},"Your phone"),r.a.createElement(re.a,{id:"input-phone",startAdornment:r.a.createElement(ie.a,{position:"start"},r.a.createElement(ce.a,null))})),r.a.createElement(ae.a,{className:e.margin},r.a.createElement(ne.a,{htmlFor:"input-message"},"Your message"),r.a.createElement(re.a,{id:"input-message",startAdornment:r.a.createElement(ie.a,{position:"start"},r.a.createElement(me.a,null))})),r.a.createElement(b.a,{size:"small",color:"primary",className:e.button},"Send message"))),r.a.createElement("div",{className:e.img},r.a.createElement("img",{src:de.a,alt:""})))},he=(a(196),a(112)),ge=a.n(he),be=Object(I.a)((function(e){var t;return{root:(t={display:"flex"},Object(N.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(N.a)(t,e.breakpoints.down("xs"),{alignItems:"center"}),t),button:Object(N.a)({width:310,minHeight:55,border:"3px solid #3f51b5",color:"#3f51b5",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:0,fontWeight:400,flexShrink:0,fontSize:"22px",marginRight:10},e.breakpoints.down("sm"),{marginBottom:20,marginRight:0}),buttonInverse:{backgroundColor:"#3f51b5",color:"#fff","&:hover":{color:"#3f51b5"}},descr:{marginTop:"-30px",marginBottom:"40px",pointerEvents:"none"}}})),ve=function(e){var t={backgroundImage:"url(".concat(ge.a,")")},a=be();return r.a.createElement("section",{className:"container telework",style:t},r.a.createElement("div",{className:"blur"}),r.a.createElement("h2",{className:"title titleDefault"},"Hire me to work"),r.a.createElement(h.a,{variant:"h3",className:a.descr},"\u30ea\u30e2\u30fc\u30c8\u3067"),r.a.createElement("div",{"aria-label":"Select",className:a.root},r.a.createElement(b.a,{className:a.button},"Contact with me"),r.a.createElement(b.a,{className:a.button+" "+a.buttonInverse},"Hire me")))},we=a(23),ke=a.n(we),ye=a(116),Ne=a.n(ye),_e=a(117),xe=a.n(_e),Se=a(118),je=a.n(Se),Oe=a(119),De=a.n(Oe),Ie=a(113),Te=a.n(Ie),Ce=a(114),qe=a.n(Ce),Ae=a(115),Re=a.n(Ae),Pe=function(){return r.a.createElement("footer",{className:"container ".concat(ke.a.footer)},r.a.createElement("ul",{className:ke.a.links},r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"mailto: arr.ess1998@gmail.com"},r.a.createElement(Te.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"https://t.me/Web_developer1998"},r.a.createElement(qe.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"#"},r.a.createElement(Re.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/profile.php?id=100025759760724"},r.a.createElement(Ne.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"https://twitter.com/soldatov1998"},r.a.createElement(xe.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/yevhensoldatov1998/"},r.a.createElement(je.a,null))),r.a.createElement("li",{className:ke.a.link},r.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/yevhen_soldatov/"},r.a.createElement(De.a,null)))))},We=a(46),Me=a.n(We),He=function(e){return r.a.createElement("nav",{className:Me.a.navbar},e.nav.map((function(e){return r.a.createElement(s.b,{to:e.link.toLowerCase(),key:e.id}," ",r.a.createElement("span",null,"<"),"  ",e.link," ",r.a.createElement("span",null,"/>"),"    ")})))},Le=a(211),Fe=a(256),Be=a(257),Qe=a(258),Ye=a(259),Je=a(208),ze=a(252),Ge=a(121),Ue=a.n(Ge);function Ke(e){var t=e.children,a=e.window,n=Object(Fe.a)({target:a?a():void 0});return r.a.createElement(Le.a,{appear:!1,direction:"down",in:!n},t)}var Xe=Object(I.a)({root:{display:"flex",justifyContent:"space-between",height:70,alignItems:"center",flexDirection:"row",width:"100%",background:"rgba(0,0,0, 0.8)",zIndex:30},list:{width:250,display:"flex",flexDirection:"column",justifyContent:"center"},fullList:{width:"auto"},link:{color:"#333",fontSize:18,textDecoration:"none",marginBottom:10,display:"inline-flex",alignItems:"center"},menuIcon:{color:"#fff"}}),Ve=function(e){var t=Xe(),a=r.a.useState(!1),n=Object(c.a)(a,2),i=n[0],l=n[1],o=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.a,null),r.a.createElement(Ke,e,r.a.createElement(Qe.a,{className:t.root},r.a.createElement("div",{className:Me.a.logo_wrap},r.a.createElement("div",{className:Me.a.logo}),r.a.createElement("div",{className:Me.a.name},r.a.createElement("span",null," Y"),".Soldatov")),r.a.createElement(Y.a,{display:{xs:"block",sm:"none"}},r.a.createElement(b.a,{color:"primary",onClick:o(!0)},r.a.createElement(Ue.a,{className:t.menuIcon})),r.a.createElement(Ye.a,{open:i,onClose:o(!1)},r.a.createElement(ze.a,{component:"nav","aria-labelledby":"nested-list-subheader",className:t.list},e.nav.map((function(e){return r.a.createElement(Je.a,{button:!0,key:e.id},r.a.createElement(s.b,{className:t.link,to:e.link.toLowerCase()},r.a.createElement(h.a,null,e.link)))}))))),r.a.createElement(Y.a,{display:{xs:"none",sm:"block"}},r.a.createElement(He,{nav:e.nav})))))},Ze=Object(o.b)((function(e){return{nav:e.header.nav}}))(Ve),$e=a(122),et=a(123),tt=a(135),at=a(124),nt=a(136),rt=(a(198),a(199),a(200),function(e){var t="day"===e.switch?"10vh":"90vh",a="day"===e.switch?"0.1":"0",n={transform:"translateX(-50%) translateY(".concat(t,")")},i={opacity:a};return r.a.createElement("div",{className:"sun"},r.a.createElement("div",{style:n,className:"circle"},r.a.createElement("div",{className:"circleFirst"}),r.a.createElement("span",{className:"m1"}),r.a.createElement("span",{className:"m2"}),r.a.createElement("span",{className:"m3"}),r.a.createElement("span",{style:i,className:"m4"}),r.a.createElement("span",{style:i,className:"m5"})))}),it=a(125),lt=a.n(it),st=a(126),ot=a.n(st),ct=function(e){var t={filter:"day"===e.switch?"brightness(1)":"brightness(0.4)"};return r.a.createElement("div",{style:t,className:ot.a.mount},r.a.createElement("img",{src:lt.a,alt:""}))},ut=a(127),mt=a.n(ut),pt=a(128),dt=a.n(pt),ft=function(e){var t={filter:"day"===e.switch?"brightness(1)":"brightness(0.4)"};return r.a.createElement("div",{style:t,className:dt.a.mount},r.a.createElement("img",{src:mt.a,alt:""}))},Et=a(129),ht=a.n(Et),gt=a(130),bt=a.n(gt),vt=function(e){var t={filter:"day"===e.switch?"grayscale(.5)":"grayscale(.9)"};return r.a.createElement("div",{style:t,className:bt.a.samurai},r.a.createElement("img",{src:ht.a,alt:""}))},wt=a(80),kt=a.n(wt),yt=function(e){return r.a.createElement("div",{className:kt.a.titleWrap},r.a.createElement("h1",{className:kt.a.title},r.a.createElement("small",null,"Hello"),r.a.createElement("strong",null,"I am Yevhen Soldatov"),r.a.createElement("span",null,"A Frond-End Developer")))},Nt=a(131),_t=a.n(Nt),xt=(a(201),function(e){return r.a.createElement("div",{className:_t.a.switch},r.a.createElement("div",{className:"onoffswitch"},r.a.createElement("input",{type:"checkbox",name:"onoffswitch",className:"onoffswitch-checkbox",id:"myonoffswitch",defaultChecked:!0,onChange:function(t){e.ON_SWITCH_CREATOR()}.bind(void 0)}),r.a.createElement("label",{className:"onoffswitch-label",htmlFor:"myonoffswitch"},r.a.createElement("span",{className:"onoffswitch-inner"}),r.a.createElement("span",{className:"onoffswitch-switch"}))))}),St=function(e){function t(){return Object($e.a)(this,t),Object(tt.a)(this,Object(at.a)(t).apply(this,arguments))}return Object(nt.a)(t,e),Object(et.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.props.DRAW_ONE_DAY_CREATOR()}),1e3)}},{key:"render",value:function(){return r.a.createElement("section",{className:"firstSection"},r.a.createElement("main",{className:"night"===this.props.switch?"dark":"night"},r.a.createElement(rt,{switch:this.props.switch}),r.a.createElement(vt,{switch:this.props.switch}),r.a.createElement(ft,{switch:this.props.switch}),r.a.createElement(ct,{switch:this.props.switch}),r.a.createElement(yt,null),r.a.createElement(xt,{ON_SWITCH_CREATOR:this.props.ON_SWITCH_CREATOR})))}}]),t}(r.a.Component),jt={switch:"night"},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_SWITCH":var a="day"===e.switch?"night":"day";return Object(V.a)({},e,{switch:a});case"DRAW_ONE_DAY":return Object(V.a)({},e,{switch:"day"});default:return e}},Dt=Object(o.b)((function(e){return{switch:e.firstSection.switch}}),{ON_SWITCH_CREATOR:function(){return{type:"ON_SWITCH"}},DRAW_ONE_DAY_CREATOR:function(){return{type:"DRAW_ONE_DAY"}}})(St),It=(a(202),a(132)),Tt=a.n(It),Ct=a(133),qt=a.n(Ct),At=a(20),Rt=a.n(At),Pt=a(260),Wt=function(){return r.a.createElement("section",{className:"wrap"},r.a.createElement("article",{className:"partDefault partOne"},r.a.createElement("div",{className:"partLeft"},r.a.createElement("div",{className:"title titleDefault titleSkill titleWork"},"SKILLS"),r.a.createElement("div",{className:"partText textDefault stack"},r.a.createElement("p",null,r.a.createElement("span",null,"JavaScript, ES6, TypeScript ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"React ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"Redux ",r.a.createElement(Rt.a,{color:"primary"}))),r.a.createElement(Pt.a,null),r.a.createElement("p",null,r.a.createElement("span",null,"HTML5 ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"CSS3, CSS frameworks, CSS preprocessors ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"CSS Grid, Flexbox, BEM ",r.a.createElement(Rt.a,{color:"primary"}))),r.a.createElement(Pt.a,null),r.a.createElement("p",null,r.a.createElement("span",null,"NodeJS ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"Express ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"MongoDB ",r.a.createElement(Rt.a,{color:"primary"})),r.a.createElement("span",null,"GIT, Heroku ",r.a.createElement(Rt.a,{color:"primary"}))))),r.a.createElement("div",{className:"partImg"},r.a.createElement("img",{src:Tt.a,alt:""}))),r.a.createElement("article",{className:"partDefault partTwo"},r.a.createElement("div",{className:"partImgReverse"},r.a.createElement("img",{src:qt.a,alt:""})),r.a.createElement("div",null,r.a.createElement("div",{style:{opacity:.4},className:"title titleDefault "},"\u79c1\u81ea\u8eab"),r.a.createElement("div",{className:"partText textDefault"},r.a.createElement("p",null,"I am ready to go through and solve any difficulties encountered on the development path,"),r.a.createElement("p",null,"which would ultimately give you a high-quality and flexible product")))))},Mt=function(){return r.a.createElement(s.a,{basename:"/portfolio"},r.a.createElement("div",{className:"appWrap"},r.a.createElement(Ze,null),r.a.createElement(Dt,null),r.a.createElement(Wt,null),r.a.createElement(ve,null),r.a.createElement(ee,null),r.a.createElement(Ee,null),r.a.createElement(Pe,null)))},Ht=a(39),Lt=a(134),Ft={nav:[{id:1,link:"Skill"},{id:2,link:"Works"},{id:3,link:"Contact"}]},Bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft;arguments.length>1&&arguments[1];return e},Qt=Object(Ht.combineReducers)({header:Bt,firstSection:Ot,works:$}),Yt=Object(Ht.createStore)(Qt,Object(Lt.composeWithDevTools)());l.a.render(r.a.createElement(o.a,{store:Yt},r.a.createElement(Mt,null)),document.getElementById("root"))},23:function(e,t,a){e.exports={footer:"footer_footer__1mx4P",title:"footer_title__1eTas",links:"footer_links__1f-tb",link:"footer_link__3ej-a"}},46:function(e,t,a){e.exports={logo_wrap:"header_logo_wrap__31RLr",name:"header_name__277Gi",logo:"header_logo__3HS7D",pulse:"header_pulse__M_MF-",navbar:"header_navbar__2j8SB"}},80:function(e,t,a){e.exports={titleWrap:"firstSectionText_titleWrap__1bY_C",title:"firstSectionText_title__3CjQO"}}},[[150,1,2]]]);
//# sourceMappingURL=main.0f0df685.chunk.js.map