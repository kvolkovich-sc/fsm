import { Record, Map, List } from 'immutable';
import generateKey from '../utils/generate-key';

const DEFAULTS = {
  key: null,
  type: 'fsm-node',
  disabled: false,
  selected: false,
  hovered: false
};

export default
class Node extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Node) return properties;
    if (!properties.type) throw new Error('You must pass a node `type`.');

    properties.key = properties.key || generateKey();
    properties.disabled = !!properties.disabled;
    properties.selected = !!properties.selected;
    properties.hovered = !!properties.hovered;

    return new Node(properties);
  }

  static createMap(elements = []) {
    if (Map.isMap(elements)) return elements;
    
    const reduceArrayToObject = (obj, element) => Object.assign({}, obj, { [element.key]: Node.create(element) });
    return new Map(elements.reduce(reduceArrayToObject, {}));
  };

}
