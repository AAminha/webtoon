(this.webpackJsonpwebtoon=this.webpackJsonpwebtoon||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(67),r=c.n(s),i=(c(75),c(0)),o=c.n(i),l=c(2),j=c(13),b=c(46),u=c.n(b),d=c(37);c(94),c(108);d.a.initializeApp({apiKey:"AIzaSyAM7vNmzh3HMyB7R39siwx2-2xpoPWGPK4",authDomain:"webtoon-a2503.firebaseapp.com",projectId:"webtoon-a2503",storageBucket:"webtoon-a2503.appspot.com",messagingSenderId:"206378362338",appId:"1:206378362338:web:2c98948ea00864dac305bb"});var h=d.a,m=d.a.auth(),O=d.a.firestore(),x=c(25),f=c(21),p=(c(35),c(18)),_=c(1),g=function(e){var t=e.userObj,c=e.id,a=e.rank,s=e.url,r=e.image,i=e.title,b=e.reader,u=e.category,d=e.author,h=e.weekday,m=Object(p.f)(),g=Object(n.useState)(!1),v=Object(j.a)(g,2),w=v[0],y=v[1],N=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y(!w),w){e.next=6;break}return e.next=4,O.collection("webtoon").get().then((function(e){n=!1,e.forEach((function(e){e.data().webtoonId===c&&(n=!0)})),n||O.collection("webtoon").add({userId:t.uid,webtoonId:c,url:s,image:r,title:i,reader:b,category:u,author:d,weekday:h})}));case 4:e.next=7;break;case 6:O.collection("webtoon").where("webtoonId","==",c).get().then((function(e){e.forEach((function(e){O.doc("webtoon/".concat(e.id)).delete()}))}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"rank",children:[a,"\uc704"]}),Object(_.jsxs)("div",{className:"top_sub_container",children:[Object(_.jsxs)("a",{className:"top_info",href:s,children:[Object(_.jsx)("img",{className:"top_image",src:r}),Object(_.jsxs)("div",{className:"top_info_main",children:[Object(_.jsx)("h2",{className:"top_info_title",children:i}),Object(_.jsxs)("div",{className:"top_info_sub",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((b/1e4).toFixed(1),"\ub9cc\uba85 | ").concat(u," | ").concat(d)]}),Object(_.jsx)("div",{className:"top_info_sub",children:"\uc5f0\uc7ac \uc694\uc77c / ".concat(h)})]})]}),Object(_.jsx)("div",{className:"favorites",onClick:Boolean(t)?N:function(){window.confirm("\ub85c\uadf8\uc778 \ud6c4 \uc990\uaca8\ucc3e\uae30\ub97c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&m.push("/auth")},children:w?Object(_.jsx)("div",{children:"\ud83d\udc9b"}):Object(_.jsx)("div",{children:"\ud83e\udd0d"})})]})]})},v=function(e){var t=e.userObj,c=e.webtoons,n=e.category,a=c.filter((function(e){return e.sub_category===n}));return Object(_.jsx)("div",{className:"top_main_container",children:a.map((function(e){return Object(_.jsx)(g,{userObj:t,id:e.series_id,url:e.url,image:e.thumb_img,title:e.title,reader:e.read_count,category:e.sub_category_title,author:e.author,weekday:e.pubperiod,rank:e.sub_rank},e.series_id)}))})},w=function(e){var t=e.userObj,c=e.webtoons;return Object(_.jsx)("div",{className:"top_main_container",children:c.map((function(e){return Object(_.jsx)(g,{userObj:t,id:e.series_id,url:e.url,image:e.thumb_img,title:e.title,reader:e.read_count,category:e.sub_category_title,author:e.author,weekday:e.pubperiod,rank:e.rank},e.series_id)}))})},y=function(e){var t,c=e.url,n=e.image,a=e.title,s=e.reader;t=a.length>8?a.substr(0,7)+"...":a;return Object(_.jsx)("div",{children:Object(_.jsx)("a",{className:"subRank_info",href:c,children:Object(_.jsxs)("div",{className:"subRank_info_container",children:[Object(_.jsx)("img",{className:"subRank_image",src:n}),Object(_.jsxs)("div",{className:"subRank_info_main",children:[Object(_.jsx)("h4",{className:"subRank_info_title",children:t}),0===s?null:Object(_.jsxs)("h5",{className:"subRank_info_reader",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((s/1e4).toFixed(1),"\ub9cc\uba85")]})]})]})})})},N=c(14),k=function(e){var t=e.webtoons;return Object(_.jsxs)("div",{className:"top_main_container",children:[Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\uc804\uccb4 TOP 5"}),Object(_.jsx)(N.b,{to:"/top/subCategory=1000",style:{textDecoration:"none",color:"#777676"},children:Object(_.jsx)("h3",{className:"top_more",children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\uc18c\ub144 TOP 5"}),Object(_.jsx)(N.b,{to:"/top/subCategory=115",style:{textDecoration:"none",color:"#777676"},children:Object(_.jsx)("h3",{className:"top_more",children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.filter((function(e){return 115===e.sub_category})).slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\ub4dc\ub77c\ub9c8 TOP 5"}),Object(_.jsx)("h3",{className:"top_more",children:Object(_.jsx)(N.b,{to:"/top/subCategory=116",style:{textDecoration:"none",color:"#777676"},children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.filter((function(e){return 116===e.sub_category})).slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\ub85c\ub9e8\uc2a4 TOP 5"}),Object(_.jsx)("h3",{className:"top_more",children:Object(_.jsx)(N.b,{to:"/top/subCategory=121",style:{textDecoration:"none",color:"#777676"},children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.filter((function(e){return 121===e.sub_category})).slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\ub85c\ud310 TOP 5"}),Object(_.jsx)("h3",{className:"top_more",children:Object(_.jsx)(N.b,{to:"/top/subCategory=69",style:{textDecoration:"none",color:"#777676"},children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.filter((function(e){return 69===e.sub_category})).slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsxs)("div",{className:"top_preview",children:[Object(_.jsxs)("div",{className:"top_preview_form",children:[Object(_.jsx)("h2",{className:"top_title",children:"\uc561\uc158\ubb34\ud611 Top 5"}),Object(_.jsx)("h3",{className:"top_more",children:Object(_.jsx)(N.b,{to:"/top/subCategory=112",style:{textDecoration:"none",color:"#777676"},children:"\ub354\ubcf4\uae30"})})]}),Object(_.jsx)("div",{className:"top_container",children:t.filter((function(e){return 112===e.sub_category})).slice(0,5).map((function(e){return Object(_.jsx)(y,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]})]})},C=function(e){var t=e.userObj,c=e.webtoons,n=Object(p.h)().path,a=c.filter((function(e){return 0===e.finished})).sort((function(e,t){return e.rank-t.rank}));switch(n){case"subCategory=1000":return Object(_.jsx)(w,{userObj:t,webtoons:a});case"subCategory=115":return Object(_.jsx)(v,{userObj:t,webtoons:a,category:115});case"subCategory=116":return Object(_.jsx)(v,{userObj:t,webtoons:a,category:116});case"subCategory=121":return Object(_.jsx)(v,{userObj:t,webtoons:a,category:121});case"subCategory=69":return Object(_.jsx)(v,{userObj:t,webtoons:a,category:69});case"subCategory=112":return Object(_.jsx)(v,{userObj:t,webtoons:a,category:112})}},D=function(e){var t=e.userObj,c=e.webtoons;return Object(_.jsx)(N.a,{children:Object(_.jsxs)(p.c,{children:[Object(_.jsx)(p.a,{exact:!0,path:"/top",children:Object(_.jsx)(k,{webtoons:c})}),Object(_.jsx)(p.a,{exact:!0,path:"/top/:path",children:Object(_.jsx)(C,{userObj:t,webtoons:c})})]})})},S=(c(39),function(e){var t,c=e.url,n=e.image,a=e.title,s=e.reader;t=a.length>8?a.substr(0,7)+"...":a;return Object(_.jsx)("div",{children:Object(_.jsx)("a",{className:"weekly_info",href:c,children:Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{className:"weekly_image",src:n}),Object(_.jsxs)("div",{className:"weekly_info_main",children:[Object(_.jsx)("h4",{className:"weekly_info_title",children:t}),0===s?null:Object(_.jsxs)("h5",{className:"weekly_info_reader",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((s/1e4).toFixed(1),"\ub9cc\uba85")]})]})]})})})}),I=function(e){for(var t=e.webtoons,c=e.category,n=t.filter((function(e){return 0===e.finished})).filter((function(e){return e.sub_category===c})),a=n.length,s=1;s<5;s++)if(a%5===s)for(var r=s;r<5;r++)n.push({series_id:r,title:"",image:"",read_count:0,url:""});return Object(_.jsxs)("div",{className:"weekly_main_container",children:[Object(_.jsx)("h2",{className:"weekly_count",children:"\uc804\uccb4 (".concat(a,")")}),Object(_.jsx)("div",{className:"weekly_container",children:n.map((function(e){return Object(_.jsx)(S,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]})},A=(c(40),function(){var e;switch((new Date).getDay()){case 0:e="sun";break;case 1:e="mon";break;case 2:e="tue";break;case 3:e="wed";break;case 4:e="thu";break;case 5:e="fri";break;case 6:e="sat"}return Object(_.jsx)("nav",{children:Object(_.jsx)("div",{children:Object(_.jsxs)("ul",{className:"weekly_nav",children:[Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly",style:{textDecoration:"none",color:"/weekly"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\ud648"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/week/".concat(e),style:{textDecoration:"none",color:Object(p.g)().pathname.includes("/weekly/week")?"black":"rgb(189, 189, 189)"},children:"\uc694\uc77c\ubcc4"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/subCategory=115",style:{textDecoration:"none",color:"/weekly/subCategory=115"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\uc18c\ub144"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/subCategory=116",style:{textDecoration:"none",color:"/weekly/subCategory=116"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\ub4dc\ub77c\ub9c8"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/subCategory=121",style:{textDecoration:"none",color:"/weekly/subCategory=121"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\ub85c\ub9e8\uc2a4"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/subCategory=69",style:{textDecoration:"none",color:"/weekly/subCategory=69"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\ub85c\ud310"})}),Object(_.jsx)("li",{children:Object(_.jsx)(N.b,{to:"/weekly/subCategory=112",style:{textDecoration:"none",color:"/weekly/subCategory=112"===Object(p.g)().pathname?"black":"rgb(189, 189, 189)"},children:"\uc561\uc158\ubb34\ud611"})})]})})})}),F=function(e){for(var t=e.webtoons.filter((function(e){return 0===e.finished})),c=t.length,n=1;n<5;n++)if(c%5===n)for(var a=n;a<5;a++)t.push({series_id:a,title:"",image:"",read_count:0,url:""});return Object(_.jsxs)("div",{className:"weekly_main_container",children:[Object(_.jsx)("h2",{className:"weekly_count",children:"\uc804\uccb4 (".concat(c,")")}),Object(_.jsx)("div",{className:"weekly_container",children:t.map((function(e){return Object(_.jsx)(S,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]})},P=function(){return Object(_.jsx)("nav",{children:Object(_.jsx)("div",{children:Object(_.jsxs)("ul",{className:"weekly_nav week_nav",children:[Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("mon")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/mon",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("mon")?"black":"rgb(189, 189, 189)"},children:"\uc6d4"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("tue")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/tue",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("tue")?"black":"rgb(189, 189, 189)"},children:"\ud654"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("wed")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/wed",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("wed")?"black":"rgb(189, 189, 189)"},children:"\uc218"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("thu")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/thu",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("thu")?"black":"rgb(189, 189, 189)"},children:"\ubaa9"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("fri")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/fri",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("fri")?"black":"rgb(189, 189, 189)"},children:"\uae08"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("sat")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/sat",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("sat")?"black":"rgb(189, 189, 189)"},children:"\ud1a0"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("sun")?"w_nav act":"w_nav",children:Object(_.jsx)(N.b,{to:"/weekly/week/sun",style:{textDecoration:"none",color:Object(p.g)().pathname.includes("sun")?"black":"rgb(189, 189, 189)"},children:"\uc77c"})})]})})})},E=function(e){var t,c=e.webtoons;switch(e.path){case"mon":t="\uc6d4";break;case"tue":t="\ud654";break;case"wed":t="\uc218";break;case"thu":t="\ubaa9";break;case"fri":t="\uae08";break;case"sat":t="\ud1a0";break;case"sun":t="\uc77c"}for(var n=c.filter((function(e){return 0===e.finished})).filter((function(e){return e.pubperiod===t})),a=n.length,s=1;s<5;s++)if(a%5===s)for(var r=s;r<5;r++)n.push({series_id:r,title:"",image:"",read_count:0,url:""});return Object(_.jsxs)("div",{className:"weekly_main_container",children:[Object(_.jsx)("h2",{className:"weekly_count",children:"\uc804\uccb4 (".concat(a,")")}),Object(_.jsx)("div",{className:"weekly_container",children:n.map((function(e){return Object(_.jsx)(S,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})]})},z=function(e){var t=e.webtoons;switch(Object(p.h)().category){case"subCategory=115":return Object(_.jsx)(I,{webtoons:t,category:115});case"subCategory=116":return Object(_.jsx)(I,{webtoons:t,category:116});case"subCategory=121":return Object(_.jsx)(I,{webtoons:t,category:121});case"subCategory=69":return Object(_.jsx)(I,{webtoons:t,category:69});case"subCategory=112":return Object(_.jsx)(I,{webtoons:t,category:112})}},B=function(e){var t=e.webtoons,c=Object(p.h)().day;switch(c){case"mon":case"tue":case"wed":case"thu":case"fri":case"sat":case"sun":return Object(_.jsx)(E,{webtoons:t,path:c})}},R=function(e){var t=e.webtoons;return Object(_.jsx)(N.a,{children:Object(_.jsxs)(p.c,{children:[Object(_.jsxs)(p.a,{exact:!0,path:"/weekly",children:[Object(_.jsx)(A,{}),Object(_.jsx)(F,{webtoons:t})]}),Object(_.jsxs)(p.a,{exact:!0,path:"/weekly/week/:day",children:[Object(_.jsx)(A,{}),Object(_.jsx)(P,{}),Object(_.jsx)(B,{webtoons:t})]}),Object(_.jsxs)(p.a,{exact:!0,path:"/weekly/:category",children:[Object(_.jsx)(A,{}),Object(_.jsx)(z,{webtoons:t})]})]})})},L=(c(62),function(e){var t=e.image;return Object(_.jsx)("img",{className:"event_image",src:t})}),T=function(e){var t=e.events,c=t.length;return Object(_.jsxs)("div",{className:"event_container",children:[Object(_.jsx)("h2",{className:"event_count",children:"\ucd94\ucc9c \uc774\ubca4\ud2b8 (".concat(c,")")}),Object(_.jsx)("div",{className:"event_images",children:t.map((function(e){return Object(_.jsx)("div",{className:"",children:Object(_.jsx)(L,{image:e.image},e.uid)})}))})]})},q=(c(63),function(e){var t=e.url,c=e.image,n=e.caption,a=e.title,s=e.reader,r=e.category,i=e.author;return Object(_.jsxs)("a",{className:"finish_info_container",href:t,children:[Object(_.jsx)("img",{className:"finish_image",src:c}),Object(_.jsxs)("div",{className:"finish_info_main",children:[Object(_.jsx)("h3",{className:"finish_info_title",children:a}),Object(_.jsx)("h3",{className:"finish_info_caption",children:n}),Object(_.jsxs)("div",{className:"finish_info_sub",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a})," ","".concat((s/1e4).toFixed(1),"\ub9cc\uba85 | ").concat(r," | ").concat(i)]})]})]})}),M=function(e){var t=e.webtoons.filter((function(e){return 1===e.finished})),c=t.length;return Object(_.jsxs)("div",{className:"finish_container",children:[Object(_.jsx)("h2",{children:"\uc644\uacb0\uc791 \uc804\uccb4  (".concat(c,"\uc791\ud488)")}),Object(_.jsx)("div",{children:t.map((function(e){return Object(_.jsx)(q,{url:e.url,image:e.land_thumb_img,caption:e.caption,title:e.title,reader:e.read_count,category:e.sub_category_title,author:e.author},e.series_id)}))})]})};c(64);function W(e){var t=e.info.filter((function(e){return 1===e.display})),c=Object(n.useState)(0),a=Object(j.a)(c,2),s=a[0],r=a[1],i=Object(n.useRef)(null),o=t.length;return Object(n.useEffect)((function(){i.current.style.transition="all 0.5s ease-in-out",i.current.style.transform="translateX(-".concat(s,"00%)")}),[s]),Object(_.jsxs)("div",{className:"slide_main_container event",children:[Object(_.jsx)("div",{className:"slide_container",ref:i,children:t.map((function(e){return Object(_.jsx)("img",{className:"slide_event_img",src:e.image},e.uid)}))}),Object(_.jsxs)("div",{className:"slide_btns",children:[Object(_.jsx)("button",{className:"btn_event left",onClick:function(){r(0===s?o-1:s-1)},children:"\u25c0"}),Object(_.jsx)("button",{className:"btn_event right",onClick:function(){r(s>=o-1?0:s+1)},children:"\u25b6"})]})]})}function G(e){var t=e.info.filter((function(e){return 1===e.display})),c=Object(n.useState)(0),a=Object(j.a)(c,2),s=a[0],r=a[1],i=Object(n.useRef)(null),o=t.length;return Object(n.useEffect)((function(){i.current.style.transition="all 0.5s ease-in-out",i.current.style.transform="translateX(-".concat(s,"00%)")}),[s]),Object(_.jsxs)("div",{className:"slide_main_container banner",children:[Object(_.jsx)("div",{className:"slide_container",ref:i,children:t.map((function(e){return Object(_.jsxs)("a",{className:"slide_webtoon_link",href:e.url,children:[Object(_.jsx)("img",{className:"slide_banner_img",src:e.image}),Object(_.jsxs)("div",{className:"slide_info",children:[Object(_.jsx)("div",{className:"slide_webtoon_title",children:e.main_copy2}),Object(_.jsx)("div",{className:"slide_description",children:e.sub_copy2})]})]},e.uid)}))}),Object(_.jsxs)("div",{className:"slide_btns",children:[Object(_.jsx)("button",{className:"btn_banner left",onClick:function(){r(0===s?o-1:s-1)},children:"\u25c0"}),Object(_.jsx)("button",{className:"btn_banner right",onClick:function(){r(s>=o-1?0:s+1)},children:"\u25b6"})]})]})}c(106);var J=function(e){var t,c=e.webtoons;switch((new Date).getDay()){case 0:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\uc77c"===e.pubperiod}));break;case 1:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\uc6d4"===e.pubperiod}));break;case 2:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\ud654"===e.pubperiod}));break;case 3:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\uc218"===e.pubperiod}));break;case 4:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\ubaa9"===e.pubperiod}));break;case 5:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\uae08"===e.pubperiod}));break;case 6:t=c.filter((function(e){return 0===e.finished})).filter((function(e){return"\ud1a0"===e.pubperiod}))}for(var n=t.length,a=1;a<5;a++)if(n%5===a)for(var s=a;s<5;s++)t.push({series_id:s,title:"",image:"",read_count:0,url:""});return Object(_.jsx)("div",{className:"home_weekly_container",children:t.map((function(e){return Object(_.jsx)(S,{url:e.url,image:e.image,title:e.title,reader:e.read_count},e.series_id)}))})},K=function(e){var t=e.webtoons,c=e.banner,n=e.events;return Object(_.jsxs)("div",{children:[Object(_.jsxs)("div",{className:"home_container",children:[Object(_.jsx)("h2",{className:"home_title",children:"\ucd94\ucc9c \uc6f9\ud230"}),Object(_.jsx)(G,{info:c})]}),Object(_.jsxs)("div",{className:"home_container",children:[Object(_.jsxs)("div",{className:"home_main_title",children:[Object(_.jsx)("h2",{className:"home_title",children:"\uba54\uc778 \uc774\ubca4\ud2b8"}),Object(_.jsx)(N.b,{to:"/event",style:{textDecoration:"none"},children:Object(_.jsx)("h4",{className:"home_more",children:"\ub354\ubcf4\uae30 (More)"})})]}),Object(_.jsx)(W,{info:n})]}),Object(_.jsxs)("div",{className:"home_container",children:[Object(_.jsx)("h2",{className:"home_title",children:"\uc624\ub298\uc758 \uc6f9\ud230"}),Object(_.jsx)(J,{webtoons:t})]})]})},U=(c(65),function(e){var t=e.webtoon;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("a",{className:"fav_info_container",href:t.url,children:[Object(_.jsx)("img",{className:"fav_image",src:t.image}),Object(_.jsxs)("div",{className:"fav_info_main",children:[Object(_.jsx)("h2",{className:"fav_info_title",children:t.title}),Object(_.jsxs)("div",{className:"fav_info_sub",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((t.reader/1e4).toFixed(1),"\ub9cc\uba85 | ").concat(t.category," | ").concat(t.author)]}),Object(_.jsx)("div",{className:"fav_info_sub",children:"\uc5f0\uc7ac \uc694\uc77c / ".concat(t.weekday)})]})]})})})}),X=function(e){var t=e.userObj,c=Object(p.f)(),a=Object(n.useState)([]),s=Object(j.a)(a,2),r=s[0],i=s[1],b=Object(n.useState)([]),u=Object(j.a)(b,2),d=u[0],h=u[1],x=[];Object(n.useEffect)((function(){f()}),[]);var f=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("webtoon").get().then((function(e){e.forEach((function(e){x.push({key:e.data().webtoonId,url:e.data().url,image:e.data().image,title:e.data().title,reader:e.data().reader,category:e.data().category,author:e.data().author,weekday:e.data().weekday}),i(x),h(d.concat({key:e.data().webtoonId,url:e.data().url,image:e.data().image,title:e.data().title,reader:e.data().reader,category:e.data().category,author:e.data().author,weekday:e.data().weekday}))}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"mypage_container",children:[Object(_.jsx)("div",{className:"account_title",children:"\ub85c\uadf8\uc778\ud55c \uacc4\uc815"}),Object(_.jsxs)("div",{className:"account_container",children:[Object(_.jsx)("img",{className:"account_img",src:t._delegate.photoURL}),Object(_.jsxs)("div",{className:"account_info",children:[Object(_.jsxs)("div",{className:"account_des",children:["\uc774\ub984 : ",t._delegate.displayName]}),Object(_.jsxs)("div",{className:"account_des",children:["\uba54\uc77c : ",t._delegate.email]}),Object(_.jsx)("button",{className:"account_logBtn",onClick:function(){m.signOut(),c.push("/"),window.alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\ub85c\uadf8\uc544\uc6c3"})]})]})]}),Object(_.jsxs)("div",{className:"mypage_container",children:[Object(_.jsx)("div",{className:"fav_title",children:"\uc990\uaca8\ucc3e\uae30\ud55c \uc6f9\ud230"}),r.map((function(e){return Object(_.jsx)(U,{webtoon:e},e.key)}))]})]})},H=c(70),Q=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(p.f)(),r=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""===c?window.alert("\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):s.push("/search=".concat(c));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("form",{className:"search_bar_input",onSubmit:r,children:[Object(_.jsx)("input",{className:"search_bar",type:"text",value:c,placeholder:"\uc81c\ubaa9/\uc791\uac00",onChange:function(e){var t=e.target.value;a(t)}}),Object(_.jsx)(H.a,{className:"search_icon",onClick:r,color:"rgb(119, 118, 118)",size:"30"})]})},V=function(e){var t=e.isLoggedIn,c=e.webtoons,n=Object(p.f)();return Object(_.jsx)("nav",{children:Object(_.jsxs)("div",{className:"nav_container",children:[Object(_.jsxs)("div",{className:"nav_header",children:[Object(_.jsx)(N.b,{to:"/",children:Object(_.jsx)("img",{className:"nav_logo",src:"/webtoon/main logo.png"})}),Object(_.jsx)(Q,{webtoons:c}),Object(_.jsx)("div",{className:"nav_logBtns",children:t?Object(_.jsx)("button",{className:"nav_logBtn",onClick:function(){m.signOut(),window.alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\ub85c\uadf8\uc544\uc6c3"}):Object(_.jsx)(N.b,{to:"/auth",children:Object(_.jsx)("button",{className:"nav_logBtn",type:"button",children:"\ub85c\uadf8\uc778"})})})]}),Object(_.jsxs)("ul",{className:"nav_mainNav",children:[Object(_.jsx)("li",{className:"/"===Object(p.g)().pathname?"nav active":"nav",children:Object(_.jsx)(N.b,{to:"/",style:{textDecoration:"none",color:"black"},children:"\ud648"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("/weekly")?"nav active":"nav",children:Object(_.jsx)(N.b,{to:"/weekly",style:{textDecoration:"none",color:"black"},children:"\uc5f0\uc7ac"})}),Object(_.jsx)("li",{className:"/finish"===Object(p.g)().pathname?"nav active":"nav",children:Object(_.jsx)(N.b,{to:"/finish",style:{textDecoration:"none",color:"black"},children:"\uc644\uacb0"})}),Object(_.jsx)("li",{className:Object(p.g)().pathname.includes("/top")?"nav active":"nav",children:Object(_.jsx)(N.b,{to:"/top",style:{textDecoration:"none",color:"black"},children:"TOP"})}),Object(_.jsx)("li",{className:"/event"===Object(p.g)().pathname?"nav active":"nav",children:Object(_.jsx)(N.b,{to:"/event",style:{textDecoration:"none",color:"black"},children:"\uc774\ubca4\ud2b8"})}),Object(_.jsx)("li",{className:"/mypage"===Object(p.g)().pathname?"nav active":"nav",onClick:function(){t?n.push("/mypage"):window.confirm("\ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")?n.push("/auth"):n.push("/")},style:{textDecoration:"none",color:"black"},children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]})]})})},Y=c(53),Z=(c(66),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],b=r[1],u=Object(n.useState)(""),d=Object(j.a)(u,2),O=d[0],x=d[1],g=Object(p.f)(),v=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?a(n):"password"===c&&b(n)},w=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.signInWithEmailAndPassword(c,i);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),x(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new h.auth.GoogleAuthProvider:"github"===c&&(n=new h.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:N();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){m.onAuthStateChanged((function(e){e&&g.push("/")}))};return Object(_.jsxs)("div",{className:"auth_container",children:[Object(_.jsx)("div",{className:"auth_layout",children:Object(_.jsxs)("form",{className:"log_form",onSubmit:w,children:[Object(_.jsx)("input",{className:"input_form",name:"email",type:"email",value:c,onChange:v,placeholder:"\uc774\uba54\uc77c",required:!0}),Object(_.jsx)("input",{className:"input_form",name:"password",type:"password",value:i,onChange:v,placeholder:"\ube44\ubc00\ubc88\ud638",required:!0}),Object(_.jsx)("span",{className:"auth_Error",children:O}),Object(_.jsx)("input",{className:"auth_btn",type:"submit",value:"\ub85c\uadf8\uc778",onClick:N}),Object(_.jsx)("input",{className:"go_sign_btn",type:"submit",style:{textDecoration:"none",color:"black"},value:"\ud68c\uc6d0\uac00\uc785",onClick:function(){g.push("/auth/signup")}})]})}),Object(_.jsxs)("div",{className:"social_btns",children:[Object(_.jsxs)("button",{className:"social_btn",onClick:y,name:"google",children:[Object(_.jsx)(f.a,{icon:Y.b})," \uad6c\uae00 \ub85c\uadf8\uc778"]}),Object(_.jsxs)("button",{className:"social_btn",onClick:y,name:"github",children:[Object(_.jsx)(f.a,{icon:Y.a})," \uae43\ud5c8\ube0c \ub85c\uadf8\uc778"]})]})]})}),$=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],b=r[1],u=Object(n.useState)(""),d=Object(j.a)(u,2),h=d[0],O=d[1],x=Object(p.f)(),f=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?a(n):"password"===c&&b(n)},g=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.createUserWithEmailAndPassword(c,i);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)("div",{className:"sign_container",children:Object(_.jsx)("div",{className:"sign_layout",children:Object(_.jsxs)("form",{className:"sign_form",onSubmit:g,children:[Object(_.jsx)("input",{className:"input_form",name:"email",type:"email",value:c,onChange:f,placeholder:"\uc774\uba54\uc77c",required:!0}),Object(_.jsx)("input",{className:"input_form",name:"password",type:"password",value:i,onChange:f,placeholder:"\ube44\ubc00\ubc88\ud638",required:!0}),Object(_.jsx)("span",{className:"auth_Error",children:h}),Object(_.jsx)("input",{className:"auth_Btn",type:"submit",value:"\ud68c\uc6d0\uac00\uc785",onClick:function(){m.onAuthStateChanged((function(e){e&&x.push("/")}))}})]})})})},ee=(c(50),function(e){var t=e.url,c=e.image,n=e.title,a=e.reader,s=e.category,r=e.author,i=e.weekday,o="\uc644\uacb0";return 0===e.finished&&(o="".concat(i," \uc5f0\uc7ac")),Object(_.jsx)("div",{children:Object(_.jsxs)("a",{className:"search_info",href:t,children:[Object(_.jsx)("img",{className:"search_image",src:c}),Object(_.jsxs)("div",{className:"search_info_main",children:[Object(_.jsx)("h3",{className:"search_info_title",children:n}),Object(_.jsxs)("div",{className:"search_info_sub",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((a/1e4).toFixed(1),"\ub9cc\uba85 | ").concat(s," | ").concat(r)]}),Object(_.jsx)("div",{className:"search_info_day",children:o})]})]})})}),te=function(e){var t=e.url,c=e.image,n=e.title,a=e.reader,s=e.category,r=e.author,i=e.weekday,o="\uc644\uacb0";return 0===e.finished&&(o="".concat(i," \uc5f0\uc7ac")),Object(_.jsx)("div",{children:Object(_.jsxs)("a",{className:"search_info",href:t,children:[Object(_.jsx)("img",{className:"search_image",src:c}),Object(_.jsxs)("div",{className:"search_info_main",children:[Object(_.jsx)("h3",{className:"search_info_title",children:n}),Object(_.jsxs)("div",{className:"search_info_sub",children:[Object(_.jsx)(f.a,{className:"user_icon",icon:x.a}),"".concat((a/1e4).toFixed(1),"\ub9cc\uba85 | ").concat(s," | ").concat(r)]}),Object(_.jsx)("div",{className:"search_info_day",children:o})]})]})})},ce=function(e){var t=e.webtoons,c=Object(p.h)().term,n=[],a=[];return Object(_.jsxs)("div",{className:"search_container",children:[function(){n.length=0,a.length=0;var e=c.replace(/(\s*)/g,"");n=t.filter((function(t){return t.title.replace(/(\s*)/g,"").includes(e)})),a=t.filter((function(t){return t.author.replace(/(\s*)/g,"").includes(e)}))}(),Object(_.jsx)("h2",{children:"".concat(c,"(\uc73c)\ub85c \uac80\uc0c9\ud55c \uacb0\uacfc\uc785\ub2c8\ub2e4.")}),Object(_.jsx)("hr",{color:"#bdbdbd",width:"100%",size:"2px"}),Object(_.jsx)("h3",{className:"search_count",children:"\uc81c\ubaa9 (".concat(n.length,"\uac74)")}),n.map((function(e){return Object(_.jsx)(ee,{url:e.url,image:e.thumb_img,title:e.title,reader:e.read_count,category:e.sub_category_title,author:e.author,weekday:e.pubperiod,finished:t.finished},e.series_id)})),Object(_.jsx)("h3",{className:"search_count",children:"\uc791\uac00 (".concat(a.length,"\uac74)")}),a.map((function(e){return Object(_.jsx)(te,{url:e.url,image:e.thumb_img,title:e.title,reader:e.read_count,category:e.sub_category_title,author:e.author,weekday:e.pubperiod,finished:t.finished},e.series_id)}))]})},ne=function(e){var t=e.isLoggedIn,c=e.userObj,n=e.webtoons,a=e.banner,s=e.events;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(N.a,{children:[Object(_.jsx)(V,{userObj:c,isLoggedIn:t,webtoons:n}),Object(_.jsxs)(p.c,{children:[Object(_.jsx)(p.a,{exact:!0,path:"/",children:Object(_.jsx)(K,{useObj:c,webtoons:n,banner:a,events:s,isLoggedIn:t})}),Object(_.jsx)(p.a,{exact:!0,path:"/finish",children:Object(_.jsx)(M,{webtoons:n})}),Object(_.jsx)(p.a,{exact:!0,path:"/event",children:Object(_.jsx)(T,{events:s})}),Object(_.jsx)(p.a,{exact:!0,path:"/mypage",children:Object(_.jsx)(X,{userObj:c})}),Object(_.jsx)(p.a,{exact:!0,path:"/auth",children:Object(_.jsx)(Z,{isLoggedIn:t})}),Object(_.jsx)(p.a,{exact:!0,path:"/auth/signup",children:Object(_.jsx)($,{isLoggedIn:t})}),Object(_.jsx)(p.a,{exact:!0,path:"/search=:term",children:Object(_.jsx)(ce,{webtoons:n})})]})]})})};var ae=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),i=r[0],b=r[1],d=Object(n.useState)([]),h=Object(j.a)(d,2),O=h[0],x=h[1],f=Object(n.useState)([]),p=Object(j.a)(f,2),g=p[0],v=p[1],w=Object(n.useState)([]),y=Object(j.a)(w,2),N=y[0],k=y[1];Object(n.useEffect)((function(){C(),S(),I(),m.onAuthStateChanged((function(e){b(e||null),a(!0)}))}),[]);var C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon.json");case 2:t=e.sent,c=t.data.list,x(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/webtoon_banner.json");case 2:t=e.sent,c=t.data.list,v(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/AAminha/webtoon/master/public/dummy/event.json");case 2:t=e.sent,c=t.data.list,k(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.jsx)(_.Fragment,{children:c?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(ne,{isLoggedIn:Boolean(i),userObj:i,webtoons:O,banner:g,events:N}),Object(_.jsx)(R,{webtoons:O}),Object(_.jsx)(D,{userObj:i,webtoons:O})]}):"Initializing..."})};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(N.a,{children:Object(_.jsx)(ae,{})})}),document.getElementById("root"))},35:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},75:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.487f5606.chunk.js.map