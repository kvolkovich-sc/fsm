import { Record, List } from 'immutable';

const DEFAULTS = {
  elements: new List()
};

export default
class Selection extends Record(DEFAULTS) {
  static create(properties = {}, options = {}) {
    if (properties instanceof Selection) return properties;

    let elements = properties.elements || new List();
    let selection = new Selection({ elements });
    
    return selection;
  }

}
