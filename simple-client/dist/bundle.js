!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(10),i=n(6),u=o(i),c=function(e,t){return"@@SYNC-CONNECT-SERVER-START"===t.type?{state:"initState"}:e},s=function(e){return"FILTERED"!==e.type},a=new u["default"]("ws://localhost:2000",{debug:!0,shouldSend:s,autoReconnectMaxTries:10,autoReconnectDelay:100}),f=(0,r.createStore)(c,(0,r.applyMiddleware)(a.getClientMiddleware()));f.dispatch({type:"@@SYNC-CONNECT-SERVER-START"})},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],n=t.slice(0,-1);return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){function o(){h===p&&(h=p.slice())}function i(){return d}function s(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return o(),h.push(e),function(){if(t){t=!1,o();var n=h.indexOf(e);h.splice(n,1)}}}function a(e){if(!(0,u["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,d=l(d,e)}finally{y=!1}for(var t=p=h,n=0;n<t.length;n++)t[n]();return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,a({type:c.INIT})}if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,d=t,p=[],h=p,y=!1;return a({type:c.INIT}),{dispatch:a,subscribe:s,getState:i,replaceReducer:f}}t.__esModule=!0,t.ActionTypes=void 0,t["default"]=r;var i=n(4),u=o(i),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},function(e,t,n){function o(e){if(!i(e)||f.call(e)!=u||r(e))return!1;var t=l(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==a}var r=n(11),i=n(12),u="[object Object]",c=Object.prototype,s=Function.prototype.toString,a=s.call(Object),f=c.toString,l=Object.getPrototypeOf;e.exports=o},function(e,t){function n(){a=!1,u.length?s=u.concat(s):f=-1,s.length&&o()}function o(){if(!a){var e=setTimeout(n);a=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,a=!1,clearTimeout(e)}}function r(e,t){this.fun=e,this.array=t}function i(){}var u,c=e.exports={},s=[],a=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new r(e,t)),1!==s.length||a||setTimeout(o,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t,n){var o,r,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(u,c){"object"===n(t)&&"object"===n(e)?e.exports=c():(r=[],o=c,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i)))}(void 0,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}([function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t,o){n(this,e);var r={autoReconnectDelay:1e3,autoReconnectMaxTries:null,shouldSend:null,debug:!1};this.options=Object.assign({},r,o),this.url=t,this.store=null,this.readyToSend=!1,this.connectTriesCount=0}return o(e,[{key:"getClientMiddleware",value:function(){var e=this;return function(t){return function(n){return function(o){var r=n(o);return e.readyToSend&&e.send(o),"@@SYNC-CONNECT-SERVER-START"===o.type&&e.init(t),r}}}}},{key:"init",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(this.log("Initializing the socket"),this.ws=new WebSocket(this.url),null===t)throw"You must provide a redux store as the sole parameter of the init function.";this.store=t,this.ws.onerror=function(){e.store.dispatch({type:"@@SYNC-CONNECT-SERVER-FAILED",url:e.url})},this.ws.onopen=function(){this.log("Socket initialized, sending a dump of the full state to the server."),this.connectTriesCount=0;var e=this.store.getState()||{};this.readyToSend=!0,this.store.dispatch({type:"@@SYNC-CONNECT-SERVER-SUCCESS",state:e})}.bind(this),this.ws.onmessage=function(t){e.log("Received an action from the server",t.data),e.store.dispatch(JSON.parse(t.data))},this.ws.onclose=function(){e.readyToSend=!1,e.log("Socket closed."),e.reconnect()}}},{key:"send",value:function(e){("function"!=typeof this.options.shouldSend||this.options.shouldSend(e))&&(this.log("Sending to the server the action ",e),this.ws.send(JSON.stringify(e)))}},{key:"reconnect",value:function(){null===this.options.autoReconnectMaxTries||this.connectTriesCount<this.options.autoReconnectMaxTries?(this.log("Reconnecting automatically... "+this.connectTriesCount++),setTimeout(this.init.bind(this,this.store),this.options.autoReconnectDelay)):this.connectTriesCount==this.options.autoReconnectMaxTries&&(this.log("Reached the maximum of authorized reconnect tries."),this.store.dispatch({type:"@@SYNC-CONNECT-SERVER-FAILED-FATAL",url:this.url}))}},{key:"log",value:function(){if(this.options.debug){var e;(e=console).log.apply(e,["redux-share-client: "].concat(Array.prototype.slice.call(arguments)))}}}]),e}();e.exports=r}])})}).call(t,n(13)(e))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,o,r){var u=e(n,o,r),s=u.dispatch,a=[],f={getState:u.getState,dispatch:function(e){return s(e)}};return a=t.map(function(e){return e(f)}),s=c["default"].apply(void 0,a)(u.dispatch),i({},u,{dispatch:s})}}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.__esModule=!0,t["default"]=r;var u=n(1),c=o(u)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var o=Object.keys(e),r={},i=0;i<o.length;i++){var u=o[i],c=e[u];"function"==typeof c&&(r[u]=n(c,t))}return r}t.__esModule=!0,t["default"]=o},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=t&&t.type,o=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+o+". To ignore an action, you must explicitly return the previous state."}function i(e,t,n){var o=Object.keys(t),r=n&&n.type===s.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,f["default"])(e))return"The "+r+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+o.join('", "')+'"');var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+r+". ")+"Expected to find one of the known reducer keys instead: "+('"'+o.join('", "')+'". Unexpected keys will be ignored.'):void 0}function u(e){Object.keys(e).forEach(function(t){var n=e[t],o=n(void 0,{type:s.ActionTypes.INIT});if("undefined"==typeof o)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var r="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:r}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function c(t){for(var n=Object.keys(t),o={},c=0;c<n.length;c++){var s=n[c];"function"==typeof t[s]&&(o[s]=t[s])}var a,f=Object.keys(o);try{u(o)}catch(l){a=l}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(a)throw a;if("production"!==e.env.NODE_ENV){var u=i(t,o,n);u&&(0,d["default"])(u)}for(var c=!1,s={},l=0;l<f.length;l++){var p=f[l],h=o[p],y=t[p],v=h(y,n);if("undefined"==typeof v){var g=r(p,n);throw new Error(g)}s[p]=v,c=c||v!==y}return c?s:t}}t.__esModule=!0,t["default"]=c;var s=n(2),a=n(4),f=o(a),l=n(3),d=o(l)}).call(t,n(5))},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var i=n(2),u=o(i),c=n(9),s=o(c),a=n(8),f=o(a),l=n(7),d=o(l),p=n(1),h=o(p),y=n(3),v=o(y);"production"!==e.env.NODE_ENV&&"string"==typeof r.name&&"isCrushed"!==r.name&&(0,v["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),t.createStore=u["default"],t.combineReducers=s["default"],t.bindActionCreators=f["default"],t.applyMiddleware=d["default"],t.compose=h["default"]}).call(t,n(5))},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=bundle.js.map