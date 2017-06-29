import { Record, Map } from 'immutable';
import Block from './Block';
import Link from './Link';

const DEFAULTS = {
  blocks: new Map(),
  links: new Map()
};

export default
class Schema extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Schema) return properties;

    let blocks = properties.blocks || new Map();
    let links = properties.links || new Map();

    return new Schema({ blocks, links });
  }
}
