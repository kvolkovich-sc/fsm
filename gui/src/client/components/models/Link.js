import { Record, List } from 'immutable';
import generateKey from '../utils/generate-key';

const DEFAULTS = {
  key: null,
  type: null,
  kind: 'link',
  active: false,
  focused: false,
  hovered: false,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};

export default
class Link extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (!properties.type) throw new Error('You must pass a link `type`.');

    properties.key = properties.key || generateKey();
    properties.active = !!properties.active;
    properties.focused = !!properties.focused;
    properties.hovered = !!properties.hovered;

    return new Link(properties);
  }
  
  static createList(elements = []) {
    if (List.isList(elements)) return elements;
    return new List(elements.map(Link.create));
  };
}
