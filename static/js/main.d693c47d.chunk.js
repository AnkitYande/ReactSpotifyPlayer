(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{77:function(e,t){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(30),o=n.n(r),s=n(1);function i(){return Object(s.jsx)("a",{className:"btn",href:"https://accounts.spotify.com/authorize?client_id=a0bf3438b3ad4c858409f29e0bd154d8&response_type=code&redirect_uri=https://ankityande.github.io/ReactSpotifyPlayer/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",children:"Login With Spotify"})}var u=n(5),l=n.n(u),b=n(15),d=n(4),f=n(9),j=n(7),p=n(31),y=n.n(p);var g=n(32),h=n.n(g),O=(n(94),new h.a({clientId:"a0bf3438b3ad4c858409f29e0bd154d8"}));function m(e){var t=function(e){var t=Object(c.useState)(),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(),s=Object(d.a)(o,2),i=(s[0],s[1]),u=Object(c.useState)(),l=Object(d.a)(u,2),b=(l[0],l[1]);return Object(c.useEffect)((function(){y.a.post("https://spotify-player-api.herokuapp.com/login",{code:e}).then((function(e){r(e.data.accessToken),i(e.data.refreshToken),b(e.data.expiresIn),window.history.pushState({},null,"/player")})).catch((function(e){console.log(e)}))}),[e]),a}(e.code),n=Object(c.useState)(),a=Object(d.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(),u=Object(d.a)(i,2),p=u[0],g=u[1],h=Object(c.useState)(),m=Object(d.a)(h,2),v=m[0],k=m[1],x=Object(c.useState)(),w=Object(d.a)(x,2),S=w[0],_=w[1],M=Object(c.useState)(),R=Object(d.a)(M,2),I=R[0],P=R[1],E=Object(c.useState)(),T=Object(d.a)(E,2),Y=T[0],z=T[1],C=Object(c.useState)(),L=Object(d.a)(C,2),X=L[0],J=L[1];Object(c.useEffect)((function(){t&&(O.setAccessToken(t),N())}),[t]),Object(c.useEffect)((function(){var e=setInterval((function(){N(),B()}),1e3);return function(){return clearInterval(e)}}));var N=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&O.getMyCurrentPlaybackState().then((function(e){e&&e.body?(o(e.body.is_playing),g(e.body.item.name),k(e.body.item.album.name),_(e.body.item.artists[0].name),P(e.body.item.album.images[0].url),e.body&&e.body.progress_ms&&z(e.body.progress_ms),J(e.body.item.duration_ms)):alert("Make sure you are playing something in Spotify")}),(function(e){console.log("Something went wrong getting playback info",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=Object(c.useRef)(),A=Object(c.useRef)(),B=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y&&X&&(A.current.style.width="".concat(100*Y/X,"%"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("body",{children:[Object(s.jsx)("div",{class:"container",onMouseEnter:function(){W.current.style.transition="none"},onMouseLeave:function(){return W.current.style.transition="all 0.5s ease",void(W.current.style.transform="rotateY(0deg) rotateX(0deg)")},onMouseMove:function(e){return function(e){var t=(window.innerWidth/2-e.pageX)/20,n=(window.innerHeight/2-e.pageY)/20;W.current.style.transform="rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)")}(e)},children:Object(s.jsxs)("div",{class:"card",ref:W,children:[Object(s.jsx)("div",{class:"now-playing__img",children:Object(s.jsx)("img",{class:"playing_img",src:I})}),Object(s.jsxs)("div",{class:"now-playing__info",children:[Object(s.jsx)("div",{class:"now-playing__name",children:p}),Object(s.jsx)("div",{class:"now-playing__album",children:v}),Object(s.jsx)("div",{class:"now-playing__artist",children:S}),Object(s.jsx)("div",{class:"progress",children:Object(s.jsx)("div",{class:"progress__bar",ref:A})}),Object(s.jsxs)("div",{class:"playback",children:[Object(s.jsx)(f.a,{style:{cursor:"pointer",fontSize:"2rem",marginRight:10},icon:j.c,onClick:function(){O.skipToPrevious().then((function(){console.log("Skip to previous")}),(function(e){alert("You need a premium account for that",e)}))}}),Object(s.jsx)(f.a,{style:{cursor:"pointer",fontSize:"3rem",marginRight:10},icon:r?j.a:j.b,onClick:function(){r?O.pause().then((function(){console.log("Playback paused")}),(function(e){})):O.play().then((function(){console.log("Playback started")}),(function(e){}))}}),Object(s.jsx)(f.a,{style:{cursor:"pointer",fontSize:"2rem",marginRight:10},icon:j.d,onClick:function(){O.skipToNext().then((function(){console.log("Skip to next")}),(function(e){alert("You need a premium account for that",e)}))}})]})]})]})}),Object(s.jsx)("div",{class:"background",style:{backgroundImage:"url(".concat(I,")")}})]})}var v=new URLSearchParams(window.location.search).get("code");var k=function(){return v?Object(s.jsx)(m,{code:v}):Object(s.jsx)(i,{})};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.d693c47d.chunk.js.map