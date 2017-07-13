import generateKey from '../utils/generate-key';

import Node from './Node';
import Link from './Link';
import { Record, List, Map } from 'immutable';

const DEFAULTS = {
  nodes: new List(),
  links: new List()
};

export default
class Document extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Document) return properties;

    properties.nodes = Node.createList(properties.nodes);
    properties.links = Link.createList(properties.nodes);

    return new Document(properties);
  }
}
