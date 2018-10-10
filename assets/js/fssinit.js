var fssinit=function(){function e(){t(),i(),a(),o(),l(),r(k.offsetWidth,k.offsetHeight),c()}function t(){b=new FSS.WebGLRenderer,v=new FSS.CanvasRenderer,x=new FSS.SVGRenderer,n(H.renderer)}function n(e){switch(u&&A.removeChild(u.element),e){case w:u=b;break;case R:u=v;break;case I:u=x}u.setSize(k.offsetWidth,k.offsetHeight),A.appendChild(u.element)}function i(){g=new FSS.Scene}function a(){g.remove(F),u.clear(),p=new FSS.Plane(y.width*u.width,y.height*u.height,y.segments,y.slices),V=new FSS.Material(y.ambient,y.diffuse),F=new FSS.Mesh(p,V),g.add(F);var e,t;for(e=p.vertices.length-1;e>=0;e--)t=p.vertices[e],t.anchor=FSS.Vector3.clone(t.position),t.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),t.time=Math.randomInRange(0,Math.PIM2)}function o(){var e,t;for(e=g.lights.length-1;e>=0;e--)t=g.lights[e],g.remove(t);for(u.clear(),e=0;e<M.count;e++)t=new FSS.Light(M.ambient,M.diffuse),t.ambientHex=t.ambient.format(),t.diffuseHex=t.diffuse.format(),g.add(t),t.mass=Math.randomInRange(.5,1),t.velocity=FSS.Vector3.create(),t.acceleration=FSS.Vector3.create(),t.force=FSS.Vector3.create()}function r(e,t){u.setSize(e,t),FSS.Vector3.set(L,u.halfWidth,u.halfHeight),a()}function c(){m=Date.now()-z,s(),S(),requestAnimationFrame(c)}function s(){var e,t,n,i,a,o,r,c=y.depth/2;for(FSS.Vector3.copy(M.bounds,L),FSS.Vector3.multiplyScalar(M.bounds,M.xyScalar),FSS.Vector3.setZ(W,M.zOffset),M.autopilot&&(e=Math.sin(M.step[0]*m*M.speed),t=Math.cos(M.step[1]*m*M.speed),FSS.Vector3.set(W,M.bounds[0]*e,M.bounds[1]*t,M.zOffset)),i=g.lights.length-1;i>=0;i--){a=g.lights[i],FSS.Vector3.setZ(a.position,M.zOffset);var s=Math.clamp(FSS.Vector3.distanceSquared(a.position,W),M.minDistance,M.maxDistance),S=M.gravity*a.mass/s;FSS.Vector3.subtractVectors(a.force,W,a.position),FSS.Vector3.normalise(a.force),FSS.Vector3.multiplyScalar(a.force,S),FSS.Vector3.set(a.acceleration),FSS.Vector3.add(a.acceleration,a.force),FSS.Vector3.add(a.velocity,a.acceleration),FSS.Vector3.multiplyScalar(a.velocity,M.dampening),FSS.Vector3.limit(a.velocity,M.minLimit,M.maxLimit),FSS.Vector3.add(a.position,a.velocity)}for(o=p.vertices.length-1;o>=0;o--)r=p.vertices[o],e=Math.sin(r.time+r.step[0]*m*y.speed),t=Math.cos(r.time+r.step[1]*m*y.speed),n=Math.sin(r.time+r.step[2]*m*y.speed),FSS.Vector3.set(r.position,y.xRange*p.segmentWidth*e,y.yRange*p.sliceHeight*t,y.zRange*c*n-c),FSS.Vector3.add(r.position,r.anchor);p.dirty=!0}function S(){if(u.render(g),M.draw){var e,t,n,i;for(e=g.lights.length-1;e>=0;e--)switch(i=g.lights[e],t=i.position[0],n=i.position[1],H.renderer){case R:u.context.lineWidth=.5,u.context.beginPath(),u.context.arc(t,n,10,0,Math.PIM2),u.context.strokeStyle=i.ambientHex,u.context.stroke(),u.context.beginPath(),u.context.arc(t,n,4,0,Math.PIM2),u.context.fillStyle=i.diffuseHex,u.context.fill();break;case I:t+=u.halfWidth,n=u.halfHeight-n,i.core.setAttributeNS(null,"fill",i.diffuseHex),i.core.setAttributeNS(null,"cx",t),i.core.setAttributeNS(null,"cy",n),u.element.appendChild(i.core),i.ring.setAttributeNS(null,"stroke",i.ambientHex),i.ring.setAttributeNS(null,"cx",t),i.ring.setAttributeNS(null,"cy",n),u.element.appendChild(i.ring)}}}function l(){window.addEventListener("resize",h),k.addEventListener("click",d),k.addEventListener("mousemove",f)}function d(e){FSS.Vector3.set(W,e.x,u.height-e.y),FSS.Vector3.subtract(W,L),M.autopilot=!M.autopilot}function f(e){FSS.Vector3.set(W,e.x,u.height-e.y),FSS.Vector3.subtract(W,L)}function h(e){r(k.offsetWidth,k.offsetHeight),S()}var m,u,g,F,p,V,b,v,x,y={width:1.2,height:1.2,depth:2,segments:8,slices:5,xRange:.3,yRange:.2,zRange:1,ambient:"#000000",diffuse:"#FFFFFF",speed:.002},M={count:4,xyScalar:1,zOffset:30,ambient:"#000000",diffuse:"#FFFFFF",speed:.0015,gravity:1200,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!1,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},w="webgl",R="canvas",I="svg",H={renderer:R},z=Date.now(),L=FSS.Vector3.create(),W=FSS.Vector3.create(),k=document.getElementById("fss"),A=document.getElementById("fss");e()};$("#fss").length&&fssinit();