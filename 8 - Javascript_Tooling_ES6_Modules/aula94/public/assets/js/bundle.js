(()=>{"use strict";class t{constructor(t,e){this.firstName=t,this.lastName=e}fetchData(){return new Promise((t=>setTimeout((()=>t(this)),2e3)))}}function e(t,e,n,o,i,r,s){try{var c=t[r](s),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,i)}function n(t){return function(){var n=this,o=arguments;return new Promise((function(i,r){var s=t.apply(n,o);function c(t){e(s,i,r,c,u,"next",t)}function u(t){e(s,i,r,c,u,"throw",t)}c(void 0)}))}}var o=new class{constructor(t,e){this.nome=t,this.sobrenome=e}}("Levi","Alves");function i(){return(i=n((function*(){yield new t("Levi","Alves").fetchData()}))).apply(this,arguments)}console.log(o),console.log("Joãozinho Oliveira"),new t("Levi","Junior"),function(){i.apply(this,arguments)}()})();
//# sourceMappingURL=bundle.js.map