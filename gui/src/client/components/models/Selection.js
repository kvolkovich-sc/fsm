import { Record, List } from 'immutable';

const DEFAULTS = {
  elements: new List([])
};

export default
class Selection extends Record(DEFAULTS) {
  
}
