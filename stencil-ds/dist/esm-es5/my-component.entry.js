import{r as registerInstance,h}from"./index-8c67e0df.js";function format(t,n,e){return(t||"")+(n?" "+n:"")+(e?" "+e:"")}var myComponentCss=":host{display:block;border:1px solid red}";var MyComponent=function(){function t(t){registerInstance(this,t)}t.prototype.getText=function(){return format(this.first,this.middle,this.last)};t.prototype.render=function(){return h("div",null,"Hello, World! I'm ",this.getText())};return t}();MyComponent.style=myComponentCss;export{MyComponent as my_component};