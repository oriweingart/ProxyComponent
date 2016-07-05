/**
 * ProxyComponent Usage Number 1
 */
 let obj = ProxyComponent("one");
 obj.text = 'enter text';

/**
 * ProxyComponent Usage Number 2
 * With custome render function
 */
 let obj2 = ProxyComponent("two", (val) => {
   let className = val % 2 == 0 ? 'blue' : 'red';
   let value = val % 2 == 0 ? `Even number ${val} is blue` : `Odd number ${val} is red`
   return `<div class="${className}">${value}</div>`;
 });
 obj2.number = 100;
