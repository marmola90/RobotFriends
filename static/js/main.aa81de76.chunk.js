(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(8),i=n(3),l=n(17),u=n(18),h=(n(28),n(5)),m=n(6),d=n(9),b=n(7),E=n(10),p=function(e){var t=e.name,n=e.email,a=e.puesto,o=e.cumplea\u00f1os,c=e.id;return r.a.createElement("div",{className:"tc bg-orange dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement("p",null,r.a.createElement("b",null,"Cargo: "),a),r.a.createElement("p",null,r.a.createElement("b",null,"Cumplea\xf1os:")," ",o)))},g=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,n){return r.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email,"cumplea\xf1os":t[n].Cumplea\u00f1os,puesto:t[n].Puesto})})))},f=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--dark-red bg-light-yellow",type:"search",placeholder:"Search Robots",onChange:t}))},O=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"3px solid black",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good!!!!"):this.props.children}}]),t}(a.Component),R=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}));return o?r.a.createElement("h1",{className:"tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"DIT TEAM"),r.a.createElement(f,{searchChange:n}),r.a.createElement(O,null,r.a.createElement(v,null,r.a.createElement(g,{robots:c}))))}}]),t}(a.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://raw.githubusercontent.com/marmola90/JsonDBDemo/master/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},C={isPending:!1,robots:[],error:""},j=(n(30),Object(l.createLogger)()),w=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(w,Object(i.a)(u.a,j));c.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.aa81de76.chunk.js.map