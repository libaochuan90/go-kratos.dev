(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3218],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1087:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"auth",title:"\u8ba4\u8bc1\u9274\u6743",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},l=void 0,c={unversionedId:"component/middleware/auth",id:"component/middleware/auth",isDocsHomePage:!1,title:"\u8ba4\u8bc1\u9274\u6743",description:"Auth \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8ba4\u8bc1\u8bf7\u6c42\u3002\u53ea\u6709\u901a\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u624d\u80fd\u88ab\u5904\u7406\uff0c\u7ed3\u5408 selector \u4e2d\u95f4\u4ef6\u53ef\u5b9e\u73b0\u767d\u540d\u5355\u3002\u76ee\u524d\u63d0\u4f9b\u57fa\u4e8eJWT\u8ba4\u8bc1\u7684\u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/component/middleware/auth.md",sourceDirName:"component/middleware",slug:"/component/middleware/auth",permalink:"/en/docs/component/middleware/auth",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/auth.md",tags:[],version:"current",frontMatter:{id:"auth",title:"\u8ba4\u8bc1\u9274\u6743",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},sidebar:"docs",previous:{title:"Validate",permalink:"/en/docs/component/middleware/validate"},next:{title:"Overview",permalink:"/en/docs/component/transport/overview"}},p=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u914d\u7f6eOptions",id:"\u914d\u7f6eoptions",children:[]},{value:"\u83b7\u53d6 <code>JWT Token</code> \u7684 <code>Claims</code>",id:"\u83b7\u53d6-jwt-token-\u7684-claims",children:[]},{value:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848",id:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Auth")," \u4e2d\u95f4\u4ef6\u7528\u4e8e\u8ba4\u8bc1\u8bf7\u6c42\u3002\u53ea\u6709\u901a\u8fc7\u8ba4\u8bc1\u7684\u8bf7\u6c42\u624d\u80fd\u88ab\u5904\u7406\uff0c\u7ed3\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u4e2d\u95f4\u4ef6\u53ef\u5b9e\u73b0\u767d\u540d\u5355\u3002\u76ee\u524d\u63d0\u4f9b\u57fa\u4e8eJWT\u8ba4\u8bc1\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h4",{id:"server"},"server"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u79d8\u94a5\u751f\u6210\u51fd\u6570\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'httpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grpc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("h4",{id:"client"},"client"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," \u79d8\u94a5\u751f\u6210\u51fd\u6570\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n    http.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"grpc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'con, _ := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("dns:///127.0.0.1:9001"),\n    grpc.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,a.kt)("h3",{id:"\u914d\u7f6eoptions"},"\u914d\u7f6eOptions"),(0,a.kt)("h4",{id:"withsigningmethod"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithSigningMethod()")),(0,a.kt)("p",null,"\u7528\u4e8e\u914d\u7f6eJWT\u7b7e\u540d\u7684\u7b97\u6cd5\u3002\u9002\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import jwtv4 "github.com/golang-jwt/jwt/v4"\n\njwt.WithSigningMethod(jwtv4.SigningMethodHS256)\n')),(0,a.kt)("h4",{id:"withclaims"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithClaims()")),(0,a.kt)("p",null,"\u7528\u4e8e\u914d\u7f6eJWT\u7684claims\u3002\u9002\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"claims := jwtv4.StandardClaims{}\njwt.WithClaims(claims)\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6-jwt-token-\u7684-claims"},"\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h3"},"JWT Token")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Claims")),(0,a.kt)("p",null,"\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT Token")," \u7684\u8bf7\u6c42\uff0c\u7ecf\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u4fa7\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," \u4e2d\u95f4\u4ef6\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"token")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," \u4f1a\u653e\u8fdb\u4e0a\u4e0b\u6587 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u4e2d\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u8005\u53ef\u901a\u8fc7\u63d0\u4f9b\u7684\u63a5\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt.FromContext(ctx)")," \u83b7\u53d6\u4e0a\u4e0b\u6587\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"claims"),"\u3002"),(0,a.kt)("h3",{id:"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848"},"\u767d\u540d\u5355\u53c2\u8003\u65b9\u6848"),(0,a.kt)("p",null,"\u7ed3\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u4e2d\u95f4\u4ef6\u4f7f\u7528\u5b9e\u73b0\u767d\u540d\u5355\u673a\u5236\u3002\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/Casper-Mars/b1a2ddb1cfd3db30522fac537c6bdc82"},"https://gist.github.com/Casper-Mars/b1a2ddb1cfd3db30522fac537c6bdc82")))}d.isMDXComponent=!0}}]);