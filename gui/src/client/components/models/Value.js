import { Record, List } from 'immutable';
import Selection from './Selection';

const DEFAULTS = {
  selection: new Selection()
};

export default
class Value extends Record(DEFAULTS) {
  
}
