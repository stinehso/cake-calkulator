(this["webpackJsonpcake-calculator"]=this["webpackJsonpcake-calculator"]||[]).push([[0],{65:function(e,t,a){e.exports=a(78)},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),o=(a(70),a(21)),c=a(23),s=a(24),u=a(27),m=a(26),h=a(109),d=a(120),p=a(112),f=a(114),g=a(116),v=a(115),b=a(49),E=a.n(b),w=a(50),k=a.n(w),S=Object(h.a)((function(e){return Object(d.a)({root:{flexGrow:1},homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textTransform:"uppercase",margin:"auto"}})}));var C=function(e){var t=e.home,a=e.volumes,n=S();return r.a.createElement("div",null,r.a.createElement(p.a,{position:"fixed"},r.a.createElement(f.a,null,r.a.createElement(v.a,{edge:"start",className:n.homeButton,color:"inherit","aria-label":"home",onClick:t},r.a.createElement(E.a,null)),r.a.createElement(g.a,{variant:"h6",className:n.title},"Kakekalkulatoren"),r.a.createElement(v.a,{className:n.pieButton,color:"inherit","aria-label":"volume table",onClick:a},r.a.createElement(k.a,null)))))};a(75);var y=function(e){var t=e.which,a=e.onChoiceMade;return r.a.createElement("div",{className:"container"},"all"===t?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"Fra en form..."),r.a.createElement("div",{className:"shape outline circle",onClick:function(){return a({orig:"circle"})}}),r.a.createElement("div",{className:"shape outline square",onClick:function(){return a({orig:"square"})}}),r.a.createElement("p",null,"eller fra et antall/ en mengde..."),r.a.createElement("div",{className:"shape heap",onClick:function(){return a({orig:"number"})}},r.a.createElement("div",{className:"smallItem outline circle top"}),r.a.createElement("div",{className:"smallItem outline circle bottom1"}),r.a.createElement("div",{className:"smallItem outline circle bottom2"}))):"circleSquare"===t?r.a.createElement(n.Fragment,null,r.a.createElement("p",null,"...til en annen"),r.a.createElement("div",{className:"shape outline circle",onClick:function(){return a({new:"circle"})}}),r.a.createElement("div",{className:"shape outline square",onClick:function(){return a({new:"square"})}})):r.a.createElement("p",null,"...til et annet!"))},N=a(121),x=Object(h.a)((function(e){return{root:{width:300,marginTop:"40px"},margin:{height:e.spacing(3)}}})),A=[{value:0,label:"0 cm"},{value:20,label:"20 cm"},{value:40,label:"40 cm"},{value:60,label:"60 cm"}];function j(e){return"".concat(e," cm")}function I(e){var t=e.valueChange,a=x();return r.a.createElement("div",{className:a.root},r.a.createElement(N.a,{defaultValue:35,getAriaValueText:j,"aria-labelledby":"discrete-slider-always",step:.5,marks:A,valueLabelDisplay:"on",track:!1,min:0,max:60,onChange:function(e){return t(parseFloat(e.target.textContent))}}))}var O=a(119),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n,r=e.shape,i=e.setArea;e.num;return Object(c.a)(this,a),(n=t.call(this)).onSliderChange=function(e,t){var a;a="d"===t?"diameter":"l"===t?"length":"w"===t?"width":"number",document.getElementById("".concat(a,"-input-").concat(n.props.num)).value=e,n.onInputChange(e,t)},n.onInputChange=function(e,t){"d"===t?n.setState({dia:e,area:3.14*Math.pow(e/2,2)},(function(){n.props.setArea(n.state.area)})):"l"===t?n.setState({len:e,area:e*n.state.wid},(function(){n.props.setArea(n.state.area)})):"w"===t?n.setState({wid:e,area:e*n.state.len},(function(){n.props.setArea(n.state.area)})):n.setState({area:e},(function(){n.props.setArea(n.state.area)}))},n.state={setArea:i,shape:r,area:0,dia:0,len:0,wid:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,i,l,o=this,c=this.state.shape;return"circle"===c?(e="outline",t="circle",a="diameter",i="Diameter (cm)",l="d"):"square"===c?(e="outline",t="square",a="length",i="Lengde (cm)",l="l"):(e="",t="heap",a="number",i="Mengde/ antall",l="n"),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"shape ".concat(e," ").concat(t)},"number"===c?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"smallItem outline circle top"}),r.a.createElement("div",{className:"smallItem outline circle bottom1"}),r.a.createElement("div",{className:"smallItem outline circle bottom2"})):r.a.createElement(n.Fragment,null)),r.a.createElement(O.a,{id:"".concat(a,"-input-").concat(this.props.num),label:i,type:"number",InputLabelProps:{shrink:!0},onChange:function(e){return o.onInputChange(e.target.value,l)}}),r.a.createElement(I,{valueChange:function(e){return o.onSliderChange(e,l)}}),"square"===c?r.a.createElement(n.Fragment,null,r.a.createElement(O.a,{id:"width-input-".concat(this.props.num),label:"Bredde (cm)",type:"number",InputLabelProps:{shrink:!0},onChange:function(e){return o.onInputChange(e.target.value,"w")}}),r.a.createElement(I,{valueChange:function(e){return o.onSliderChange(e,"w")}})):r.a.createElement(n.Fragment,null))}}]),a}(n.Component),F=a(41),q=a(51),B=a.n(q),L=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},numberInput:{width:"10px"}}}}));var M=function(e){var t,a,n,i=e.id,l=e.amount,o=e.item,c=(e.calculate,e.onInputChange),s=e.multiplier;return L(),t=0===i?"Mengde":"",a=0===i?"Enhet og ingrediens":"",r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{id:"quantity".concat(i),label:t,type:"number",defaultValue:l,placeholder:"Mengde",InputLabelProps:{shrink:!0},onChange:function(e){return c(e.target.value,i,"quantity")}}),r.a.createElement(O.a,{id:"text".concat(i),label:a,type:"text",defaultValue:o,placeholder:"Enhet og ingrediens",InputLabelProps:{shrink:!0},onChange:function(e){return c(e.target.value,i,"text")}}),r.a.createElement(B.a,null),r.a.createElement(g.a,{variant:"body1",display:"inline"},"".concat((n=l*s,new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(n))," ").concat(o)))},T=a(52),R=a.n(T),W=(a(76),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;e.multiplicator;return Object(c.a)(this,a),(n=t.call(this)).onInputChange=function(e,t,a){var r=Object(F.a)(n.state.ingredients),i=Object(o.a)({},r[t]);"quantity"===a?i.amount=e:i.value=e,r[t]=i,n.setState({ingredients:r})},n.calculateHowMuch=function(e){},n.addNewLine=function(){console.log("new line");var e={key:n.state.keyCounter,amount:"",value:""};n.setState((function(t){return{ingredients:[].concat(Object(F.a)(t.ingredients),[e])}}),(function(){n.setState({keyCounter:n.state.keyCounter+1})})),console.log(n.state.ingredients)},n.state={ingredients:[],keyCounter:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(this.props.multiplicator);return r.a.createElement("div",null,r.a.createElement("h2",null,"Multipliser oppskriften med ",t),r.a.createElement(g.a,{variant:"subtitle2"},"Sett inn:"),r.a.createElement("div",{className:"listContainer"},this.state.ingredients.map((function(a,n){return r.a.createElement(M,{id:a.key,amount:a.amount,item:a.value,calculate:e.calculateHowMuch,onInputChange:e.onInputChange,multiplier:t})}))),r.a.createElement(v.a,{color:"inherit","aria-label":"add-item",classes:"addButton",onClick:function(t){return e.addNewLine()}},r.a.createElement(R.a,null)))}}]),a}(n.Component)),V=a(53),D=a.n(V),P=Object(h.a)((function(e){return Object(d.a)({root:{flexGrow:1,flexDirection:"row",width:"100vw",position:"fixed",bottom:0},backButton:{justifySelf:"start",marginRight:e.spacing(2),marginLeft:e.spacing(2)},title:{flexGrow:1,textTransform:"uppercase",margin:"auto"}})}));var G=function(e){var t=e.route,a=e.back,n=P();return r.a.createElement(f.a,{className:n.root},r.a.createElement(v.a,{edge:"start",className:n.backButton,color:"inherit","aria-label":"back",onClick:function(e){return a(t)}},r.a.createElement(D.a,null)))},U=a(117),H=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{height:140,width:100},control:{padding:e.spacing(6)}}})),J=16,K=240;function $(){var e=H(),t=function(e){return new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(e)};return r.a.createElement(U.a,{container:!0,className:e.root,spacing:6},r.a.createElement(U.a,{container:!0,xs:12,justify:"center",spacing:6},r.a.createElement(U.a,{item:!0,xs:12}),r.a.createElement("h2",null,"Volumtabell"),r.a.createElement(U.a,{item:!0,xs:12}),[1,.5,1/3,1/4].map((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(U.a,{item:!0,xs:3}),r.a.createElement(U.a,{key:e,item:!0,xs:2},t(e)," cup "),r.a.createElement(U.a,{key:e,item:!0,xs:2},t(e*J)," ss "),r.a.createElement(U.a,{key:e,item:!0,xs:2},t(e*K)," ml "),r.a.createElement(U.a,{item:!0,xs:3}))})),r.a.createElement(U.a,{item:!0,xs:12}),r.a.createElement(U.a,{item:!0,xs:12})))}var Q=a(118),X=Object(h.a)((function(e){return{calculateButton:{margin:e.spacing(4),cursor:"pointer",zIndex:1}}}));function Y(e){var t=e.onSubmitSize,a=X();return r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"contained",color:"primary",className:a.calculateButton,onClick:t},"Beregn"))}a(77);var Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onRouteChange=function(t){var a;a="showResult"===t?"setSize":"home",e.setState({route:a,shapes:"all"})},e.setInitialState=function(t){e.setState({route:"home",shapes:"all"})},e.toVolumeTable=function(t){e.setState({route:"volumeTable"})},e.onShapeClick=function(t){e.setState(t),"all"===e.state.shapes?(e.setState({route:"secondShape"}),"circle"===t.orig||"square"===t.orig?e.setState({shapes:"circleSquare"}):(e.setState({shapes:"heap"}),e.setState({new:"number"}),setTimeout((function(){return e.setState({route:"setSize"})}),1e3))):e.state.route.includes("second")&&e.setState({route:"setSize"})},e.setArea=function(t,a){"firstArea"===t?e.setState((function(e){return{sizes:Object(o.a)(Object(o.a)({},e.sizes),{},{firstArea:a})}})):e.setState((function(e){return{sizes:Object(o.a)(Object(o.a)({},e.sizes),{},{secondArea:a})}}))},e.onSubmitSize=function(t){e.state.sizes.firstArea>0&&e.state.sizes.secondArea>0?e.setState({route:"result"}):(console.log("firstA: ",e.state.sizes.firstArea),console.log("secondA: ",e.state.sizes.secondArea),console.log("Sizes cannot be zero"))},e.state={route:"home",shapes:"all",orig:"",new:"",sizes:{firstArea:0,secondArea:0}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.route,a=this.state.sizes.firstArea,i=this.state.sizes.secondArea;return r.a.createElement("div",{className:"App"},r.a.createElement(C,{home:function(t){return e.setInitialState()},volumes:function(t){e.toVolumeTable()},route:t,back:this.onRouteChange}),r.a.createElement("div",{className:"mainArea"},"home"===t||"secondShape"===t?r.a.createElement(n.Fragment,null,r.a.createElement(y,{which:this.state.shapes,onChoiceMade:this.onShapeClick})):"setSize"===t?r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Set the size of your baking trays"),r.a.createElement(z,{shape:this.state.orig,setArea:function(t){return e.setArea("firstArea",t)},num:1}),r.a.createElement(z,{shape:this.state.new,setArea:function(t){return e.setArea("secondArea",t)},num:2}),r.a.createElement(Y,{onSubmitSize:this.onSubmitSize})):"result"===t?r.a.createElement(W,{multiplicator:i/a}):r.a.createElement($,null),r.a.createElement(G,{route:t,back:this.onRouteChange})))}}]),a}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(t,e)}))}}()}},[[65,1,2]]]);
//# sourceMappingURL=main.c851ab8b.chunk.js.map