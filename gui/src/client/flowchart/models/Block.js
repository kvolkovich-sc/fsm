import { Record, List } from 'immutable';
import generateKey from '../utils/generate-key';

const DEFAULTS = {
  key: null,
  type: null,
  kind: 'block',
  active: false,
  focused: false,
  hovered: false
};

export default
class Block extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Block) return properties;
    if (!properties.type) throw new Error('You must pass a block `type`.');

    properties.key = properties.key || generateKey();
    properties.active = !!properties.active;
    properties.focused = !!properties.focused;
    properties.hovered = !!properties.hovered;

    return new Block(properties);
  }

  static createList(elements = []) {
    if (List.isList(elements)) return elements;
    return new List(elements.map(Block.create));
  };

}
