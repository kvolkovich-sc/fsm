import { Record, List, fromJS } from 'immutable';

const DEFAULTS = {
  panX: 0,
  panY: 0,
  scale: 100,
  sizeV: 1000,
  sizeH: 1000,
  allowPanning: true,
  allowScaling: true
};

export default
class Selection extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Selection) return properties;

    let elements = properties.elements || new List();
    let selection = new Selection({ elements });
    
    return selection;
  }

}
