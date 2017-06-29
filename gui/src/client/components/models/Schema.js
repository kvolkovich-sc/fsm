import { Record, Map } from 'immutable';

const DEFAULTS = {
  blocks: new Map({}),
  links: new Map({})
};

export default
class Schema extends Record(DEFAULTS) {
  
}
