
        export function create() {
          const source = "var e=\"function\"==typeof Object.assign?Object.assign:function(e,n){if(null==e)throw new TypeError(\"Cannot convert undefined or null to object\");for(var t=Object(e),r=1,o=arguments.length;r<o;++r){var i=arguments[r];if(null!=i)for(var f in i)i.hasOwnProperty(f)&&(t[f]=i[f])}return t},n=\"GENERATE_BUFFERS\",t=[],r={vertexPosition:0,indexPosition:0};function o(e,n,t,r,o){e[n+0]=t,e[n+1]=r,e[n+2]=o}function i(e,n,i,f,s,a){var u=3+s,l=e[n+0],v=e[n+1],c=t;c.length=s;for(var g=0;g<c.length;g++)c[g]=e[n+2+g];var b=a?a.vertexPosition:0,h=a?a.indexPosition:0,d=b/u;return o(i,b,l,v,0),c.length&&i.set(c,b+3),o(i,b+=u,l,v,1),c.length&&i.set(c,b+3),o(i,b+=u,l,v,2),c.length&&i.set(c,b+3),o(i,b+=u,l,v,3),c.length&&i.set(c,b+3),b+=u,f[h++]=d,f[h++]=d+1,f[h++]=d+3,f[h++]=d+1,f[h++]=d+2,f[h++]=d+3,r.vertexPosition=b,r.indexPosition=h,r}var f=self;f.onmessage=function(t){var r=t.data;if(r.type===n){for(var o,s=r.customAttributesCount,a=2+s,u=new Float32Array(r.renderInstructions),l=u.length/a,v=4*l*(s+3),c=new Uint32Array(6*l),g=new Float32Array(v),b=0;b<u.length;b+=a)o=i(u,b,g,c,s,o);var h=e({vertexBuffer:g.buffer,indexBuffer:c.buffer,renderInstructions:u.buffer},r);f.postMessage(h,[g.buffer,c.buffer,u.buffer])}};";
          return new Worker(typeof Blob === 'undefined'
            ? 'data:application/javascript;base64,' + Buffer.from(source, 'binary').toString('base64')
            : URL.createObjectURL(new Blob([source], {type: 'application/javascript'})));
        }
      
