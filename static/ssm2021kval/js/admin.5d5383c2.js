(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{b6a5:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=Object(a["I"])("data-v-3cafa5ae");Object(a["t"])("data-v-3cafa5ae");var c=Object(a["g"])("h1",null,"Admin",-1),o=Object(a["g"])("p",null,"Jag hoppas det enda du ville göra var att skicka announcements, för det är det enda som stödjs :P",-1);Object(a["r"])();var s=r((function(e,t,n,r,s,u){var m=Object(a["y"])("RemoteForm");return Object(a["q"])(),Object(a["d"])(a["a"],null,[c,o,Object(a["g"])(m,{form:s.announceForm||e.$store.state.forms.announce,button_text:"Announce",onSubmit:u.announce},null,8,["form","onSubmit"])],64)})),u=(n("96cf"),n("1da1")),m=n("cadc"),i=n("c6e1"),d={components:{RemoteForm:m["a"]},data:function(){return{announceForm:null}},methods:{announce:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i["a"].request("POST","/api/admin/announcement",e);case 2:if(a=n.sent,200===a.status){n.next=6;break}return t.$store.commit("createToast",{type:"error",title:"Backend could not be reached: ".concat(a.status),body:"Please try again."}),n.abrupt("return");case 6:return n.next=8,a.json();case 8:r=n.sent,t.createForm=r.form,r.success&&(t.$store.commit("processAnnouncement",r.announcement),t.$store.commit("createToast",{type:"success",title:"Announcement successfully sent!"}));case 11:case"end":return n.stop()}}),n)})))()}}};d.render=s,d.__scopeId="data-v-3cafa5ae";t["default"]=d}}]);
//# sourceMappingURL=admin.5d5383c2.js.map