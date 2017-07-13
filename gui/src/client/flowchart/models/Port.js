import { Record, List } from 'immutable';
import generateKey from '../utils/generate-key';

const DEFAULTS = {
  key: null,
  type: 'basic-port'
};

export default
class Port extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Port) return properties;
    if (!properties.type) throw new Error('You must pass a port `type`.');

    properties.key = properties.key || generateKey();

    return new Port(properties);
  }

  static createList(elements = []) {
    if (List.isList(elements)) return elements;
    return new List(elements.map(Port.create));
  };

}
