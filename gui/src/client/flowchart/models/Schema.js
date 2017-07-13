import { Record, Map } from 'immutable';
import Node from './Node';
import Link from './Link';

const DEFAULTS = {
  nodes: new Map(),
  links: new Map()
};

export default
class Schema extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Schema) return properties;

    let nodes = properties.nodes || new Map();
    let links = properties.links || new Map();

    return new Schema({ nodes, links });
  }
}
