!function(t){function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}var n={};i.m=t,i.c=n,i.i=function(t){return t},i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=440)}({175:function(t,i,n){"use strict";window.startFireworks=function(){function t(){var t=new Particle(r/2,h,10+5*Math.random(),(1.4+.2*Math.random())*Math.PI);t.size=f/2,t.hue=d,t.lightness=100,t.setGravity(.1),t.setFriction(.98),a.push(t)}function i(t,i,n,e){var o=new Particle(t,i,6+4*Math.random(),2*Math.random()*Math.PI);o.size=n,o.hue=e,o.lightness=40+40*Math.random(),o.setGravity(.1),o.setFriction(.95),c.push(o)}function n(){y.begin(),s.clearRect(0,0,e.width,e.height);var t=void 0,o=void 0,f=void 0,p=void 0,v=void 0,g=[],x=[];for(d+=.5,t=0,f=a.length;t<f;t+=1)o=a[t],o.update(),o.position.x>0&&o.position.x<r&&o.position.y<h&&!o.explode&&g.push(o);for(a=g,t=0,f=a.length;t<f;t+=1){if(o=a[t],o.size+=.015,o.lightness-=.3,o.hue+=1,Math.random()<.001||Math.sqrt(Math.pow(u-o.position.x,2)+Math.pow(l-o.position.y,2))<3*o.size)for(o.explode=!0,p=0;p<50;p+=1)i(o.position.x,o.position.y,o.size,o.hue);s.beginPath(),s.arc(o.position.x,o.position.y,o.size,0,2*Math.PI,!1),s.fillStyle="hsl("+o.hue+",100%, "+o.lightness+"%)",s.fill()}for(t=0;t<c.length;t+=1)v=c[t],v.lightness>0&&x.push(v);for(c=x,t=0;t<c.length;t+=1)v=c[t],v.update(),v.lightness-=.5,s.beginPath(),s.arc(v.position.x,v.position.y,v.size,0,2*Math.PI,!1),s.fillStyle="hsl("+v.hue+",100%, "+v.lightness+"%)",s.fill();y.end(),requestAnimationFrame(n)}!function(t){var i=function(t,i,n,e){this.initialize(t,i,n,e)},n=i.prototype;n.initialize=function(t,i,n,e){return this.position=new Vector(t,i),this.velocity=new Vector(0,0),this.velocity.set(n,e),this.gravity=new Vector(0,0),this.friction=1,this},n.setGravity=function(t){this.gravity=new Vector(0,t)},n.setFriction=function(t){this.friction=t},n.accelerate=function(t){this.velocity.add(t)},n.update=function(){this.velocity.add(this.gravity),this.velocity.multiply(this.friction),this.position.add(this.velocity)},t.Particle=i}(window),function(t){var i=function(t,i){this.initialize(t,i)},n=i.prototype;n.initialize=function(t,i){return this.x=t||0,this.y=i||0,this},n.set=function(t,i){this.x=t*Math.cos(i),this.y=t*Math.sin(i)},n.set2=function(t,i){this.x=t,this.y=i},n.getAngle=function(){return Math.atan2(this.y,this.x)},n.getLength=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},n.add=function(t){this.x+=t.x,this.y+=t.y},n.multiply=function(t){this.x*=t,this.y*=t},t.Vector=i}(window);var e=document.getElementById("canvas"),o=document.getElementById("main-container"),s=e.getContext("2d");e.width=o.offsetWidth,e.height=o.offsetHeight;var r=e.width,h=e.height,a=[],c=[],u=0,l=0,f=3,d=0,p=0,y=new Stats;document.body.addEventListener("mousemove",function(t){u=t.clientX,l=t.clientY});window.setInterval(function(){var i=void 0;if(p%2==0)for(i=1;i<=2;i+=1)t();if(p%3==0)for(i=1;i<=2;i+=1)t();if(p%5==0)for(i=1;i<=2;i+=1)t();p+=1},500);n(),setTimeout(function(){console.log("Interval cleared!")},3e4)}},440:function(t,i,n){t.exports=n(175)}});
//# sourceMappingURL=fireworks.bundle.js.map