(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[667],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8589:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={id:"validate",title:"\u53c2\u6570\u6821\u9a8c",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},i=void 0,p={unversionedId:"component/middleware/validate",id:"component/middleware/validate",isDocsHomePage:!1,title:"\u53c2\u6570\u6821\u9a8c",description:"Validate \u4e2d\u95f4\u4ef6\u4f7f\u7528 proto-gen-validate \u751f\u6210\u540e\u7684\u4ee3\u7801\u8fdb\u884c\u53c2\u6570\u6821\u9a8c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 proto \u4e2d\u7f16\u5199\u53c2\u6570\u6821\u9a8c\u89c4\u5219\uff0c\u7136\u540e\u751f\u6210\u4ee3\u7801\uff0c\u901a\u8fc7\u4e2d\u95f4\u4ef6\u81ea\u52a8\u7684\u8fdb\u884c\u6821\u9a8c\u3002",source:"@site/docs/component/middleware/validate.md",sourceDirName:"component/middleware",slug:"/component/middleware/validate",permalink:"/docs/component/middleware/validate",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/middleware/validate.md",tags:[],version:"current",frontMatter:{id:"validate",title:"\u53c2\u6570\u6821\u9a8c",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/component/middleware/tracing"},next:{title:"\u8ba4\u8bc1\u9274\u6743",permalink:"/docs/component/middleware/auth"}},c=[{value:"\u5b89\u88c5\u5de5\u5177",id:"\u5b89\u88c5\u5de5\u5177",children:[]},{value:"\u89c4\u5219\u793a\u4f8b",id:"\u89c4\u5219\u793a\u4f8b",children:[]},{value:"\u6570\u5b57\u7c7b\u578b",id:"\u6570\u5b57\u7c7b\u578b",children:[]},{value:"\u751f\u6210\u4ee3\u7801",id:"\u751f\u6210\u4ee3\u7801",children:[]},{value:"\u642d\u914d\u4e2d\u95f4\u4ef6\u4f7f\u7528",id:"\u642d\u914d\u4e2d\u95f4\u4ef6\u4f7f\u7528",children:[]},{value:"References",id:"references",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Validate \u4e2d\u95f4\u4ef6\u4f7f\u7528 proto-gen-validate \u751f\u6210\u540e\u7684\u4ee3\u7801\u8fdb\u884c\u53c2\u6570\u6821\u9a8c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 proto \u4e2d\u7f16\u5199\u53c2\u6570\u6821\u9a8c\u89c4\u5219\uff0c\u7136\u540e\u751f\u6210\u4ee3\u7801\uff0c\u901a\u8fc7\u4e2d\u95f4\u4ef6\u81ea\u52a8\u7684\u8fdb\u884c\u6821\u9a8c\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u5de5\u5177"},"\u5b89\u88c5\u5de5\u5177"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 validate \u4e4b\u524d\u9996\u5148\u9700\u8981\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/protoc-gen-validate"},"proto-gen-validate"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get -d github.com/envoyproxy/protoc-gen-validate\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e2d\u9047\u5230\u65e0\u6cd5\u4f7f\u7528\u6216\u8005\u751f\u6210\u7684\u4ee3\u7801\u4e2d \u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"// no validation rules for xxxx")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5c1d\u8bd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone github.com/envoyproxy/protoc-gen-validate")," \u7136\u540e ",(0,o.kt)("inlineCode",{parentName:"p"},"make build")),(0,o.kt)("h3",{id:"\u89c4\u5219\u793a\u4f8b"},"\u89c4\u5219\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e0b\u9762\u4e3a\u5927\u5bb6\u5217\u4e3e\u51e0\u79cd\u5e38\u7528\u7c7b\u578b\u7684\u53c2\u6570\u6821\u9a8c\u793a\u4f8b\uff0c\u66f4\u591a\u7684\u793a\u4f8b\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/envoyproxy/protoc-gen-validate"},"proto-gen-validate")," \u6587\u6863\u4e2d\u67e5\u770b\u3002"),(0,o.kt)("h3",{id:"\u6570\u5b57\u7c7b\u578b"},"\u6570\u5b57\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// \u53c2\u6570\u5fc5\u987b\u5927\u4e8e 0\nint64 id = 1 [(validate.rules).int64 = {gt: 0}];\n// \u53c2\u6570\u5fc5\u987b\u5728 0 \u5230 120 \u4e4b\u95f4\nint32 age = 2 [(validate.rules).int64 = {gt:0, lte: 120}];\n// \u53c2\u6570\u662f 1 \u6216 2 \u6216 3\nuint32 code = 3 [(validate.rules).uint32 = {in: [1,2,3]}];\n// \u53c2\u6570\u4e0d\u80fd\u662f 0 \u6216 99.99\nfloat score = 1 [(validate.rules).float = {not_in: [0, 99.99]}];\n")),(0,o.kt)("h4",{id:"\u5e03\u5c14\u7c7b\u578b"},"\u5e03\u5c14\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// \u53c2\u6570\u5fc5\u987b\u4e3a true\nbool state = 5 [(validate.rules).bool.const = true];\n// \u53c2\u6570\u5fc5\u987b\u4e3a false\nbool state = 5 [(validate.rules).bool.const = false];\n")),(0,o.kt)("h4",{id:"\u6587\u672c\u7c7b\u578b"},"\u6587\u672c\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// \u53c2\u6570\u5fc5\u987b\u4e3a /hello\nstring path = 6 [(validate.rules).string.const = "/hello"];\n// \u53c2\u6570\u6587\u672c\u957f\u5ea6\u5fc5\u987b\u4e3a 11\nstring phone = 7 [(validate.rules).string.len = 11];\n// \u53c2\u6570\u6587\u672c\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e 10 \u4e2a\u5b57\u7b26\nstring explain = 8 [(validate.rules).string.min_len =  10];\n// \u53c2\u6570\u6587\u672c\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e 1 \u4e2a\u5b57\u7b26\u5e76\u4e14\u4e0d\u80fd\u5927\u4e8e 10 \u4e2a\u5b57\u7b26\nstring name = 9 [(validate.rules).string = {min_len: 1, max_len: 10}];\n// \u53c2\u6570\u6587\u672c\u4f7f\u7528\u6b63\u5219\u5339\u914d,\u5339\u914d\u5fc5\u987b\u662f\u975e\u7a7a\u7684\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\nstring card = 10 [(validate.rules).string.pattern = "(?i)^[0-9a-f]+$"];\n// \u53c2\u6570\u6587\u672c\u5fc5\u987b\u662f email \u683c\u5f0f\nstring email = 11 [(validate.rules).string.email = true];\n')),(0,o.kt)("h4",{id:"\u6d88\u606f\u4f53"},"\u6d88\u606f\u4f53"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// \u53c2\u6570\u4e3a\u5fc5\u586b\u9879\nInfo info = 11 [(validate.rules).message.required = true];\nmessage Info {\n    string address = 1;\n}\n")),(0,o.kt)("h3",{id:"\u751f\u6210\u4ee3\u7801"},"\u751f\u6210\u4ee3\u7801"),(0,o.kt)("p",null,"\u751f\u6210\u4ee3\u7801\u65f6\u53ef\u4ee5\u4f7f\u7528 kratos layout \u63d0\u4f9b\u7684 Makefile \u4e2d\u7684 make validate \u547d\u4ee4\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 protoc\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make validate\n# \u6216\u8005\nprotoc --proto_path=. \\\n           --proto_path=./third_party \\\n           --go_out=paths=source_relative:. \\\n           --validate_out=paths=source_relative,lang=go:. \\\n           xxxx.proto\n")),(0,o.kt)("h3",{id:"\u642d\u914d\u4e2d\u95f4\u4ef6\u4f7f\u7528"},"\u642d\u914d\u4e2d\u95f4\u4ef6\u4f7f\u7528"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06 validate \u4e2d\u95f4\u4ef6\u6ce8\u5165\u5230 http \u6216\u8005 grpc \u4e2d\uff0c\u5728\u6709\u8bf7\u6c42\u8fdb\u5165\u65f6 validate \u4e2d\u95f4\u4ef6\u4f1a\u81ea\u52a8\u5bf9\u53c2\u6570\u6839\u636e proto \u4e2d\u7f16\u5199\u7684\u89c4\u5219\u8fdb\u884c\u6821\u9a8c\u3002"),(0,o.kt)("h4",{id:"http"},"http"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'httpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        validate.Validator(),\n    ))\n')),(0,o.kt)("h4",{id:"grpc"},"grpc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        validate.Validator(),\n    ))\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/examples/validate"},"https://github.com/go-kratos/kratos/tree/main/examples/validate"))))}s.isMDXComponent=!0}}]);