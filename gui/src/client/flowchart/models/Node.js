import { Record, List } from 'immutable';
import generateKey from '../utils/generate-key';

const DEFAULTS = {
  key: null,
  type: 'fsm-node',
  active: false,
  focused: false,
  hovered: false
};

export default
class Node extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Node) return properties;
    if (!properties.type) throw new Error('You must pass a node `type`.');

    properties.key = properties.key || generateKey();
    properties.active = !!properties.active;
    properties.focused = !!properties.focused;
    properties.hovered = !!properties.hovered;

    return new Node(properties);
  }

  static createList(elements = []) {
    if (List.isList(elements)) return elements;
    return new List(elements.map(Node.create));
  };

}
