import { getType } from '../js'

// 寻找子组件 - 数组
export function findComponentsDownward (context, componentName) {
  return context.$children.reduce((components, child) => {
      if (child.$options.name === componentName) components.push(child);
      const foundChilds = findComponentsDownward(child, componentName);
      return components.concat(foundChilds);
  }, []);
}

// 寻找父组件 - 单个
export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

// 判断vue是否有某个prop属性
export function hasProp(data) {
  switch(getType(data)) {
    case 'Undefined': return false;
    case 'String': return data==='false' ? false : true;
    case 'Boolean': return data;
    default: return false;
  }
}