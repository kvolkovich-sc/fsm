import generateKey from '../utils/generate-key';

import Node from './Node';
import Link from './Link';
import Port from './Port';
import { Record, Map } from 'immutable';

const DEFAULTS = {
  nodes: new Map(),
  links: new Map(),
  ports: new Map()
};

export default
class Document extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Document) return properties;

    properties.nodes = Node.createMap(properties.nodes);
    properties.links = Link.createMap(properties.links);
    properties.links = Port.createMap(properties.ports);

    return new Document(properties);
  }
}
