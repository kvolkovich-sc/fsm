import { Record, List } from 'immutable';

const DEFAULTS = {
  nodes: new List(),
  links: new List()
};

export default
class Selection extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Selection) return properties;

    let nodes = properties.nodes || new List();
    let links = properties.links || new List();
    let selection = new Selection({ nodes, links });

    return selection;
  }

}
