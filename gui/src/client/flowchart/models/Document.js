import generateKey from '../utils/generate-key';

import Block from './Block';
import Link from './Link';
import { Record, List, Map } from 'immutable';

const DEFAULTS = {
  blocks: new List(),
  links: new List()
};

export default
class Document extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Document) return properties;

    properties.blocks = properties.blocks || Block.createList();
    properties.links = properties.links || Link.createList();

    return new Document(properties);
  }
}
