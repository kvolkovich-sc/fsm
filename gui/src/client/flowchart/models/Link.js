import { Record, Map } from 'immutable';
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
    if (properties instanceof Link) return properties;
    if (!properties.type) throw new Error('You must pass a link `type`.');

    properties.key = properties.key || generateKey();
    properties.active = !!properties.active;
    properties.focused = !!properties.focused;
    properties.hovered = !!properties.hovered;

    return new Link(properties);
  }

  static createMap(elements = []) {
    if (Map.isList(elements)) return elements;
    return new Map(elements.map(Link.create));
  };
}
