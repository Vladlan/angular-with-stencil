import { r as registerInstance, h } from './index-f49c6db6.js';

function format(first, middle, last) {
  return ((first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block;border:1px solid red}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
