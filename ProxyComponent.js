/**
 * Proxy Component Framework
 */
let ProxyComponent = (elmId, customRenderFn, name) => {
    let elm = document.getElementById(elmId);
    let ViewProxy = {
      customRender: customRenderFn,
      element: elm,
      set: function(obj, prop, value) {
        if (obj[prop] == value) {
          console.log("They are the same!!");
          return;
        }
        obj[prop] = value;
        this.render(value);
      },
      render: function(value) {
        if (this.customRender && typeof this.customRender == 'function') {
          this.element.innerHTML = this.customRender(value);
        } else {
          this.element.textContent = value;
        }
      }
    };
    return new Proxy({}, ViewProxy);
}
