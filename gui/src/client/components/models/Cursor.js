import { Record } from 'immutable';

const DEFAULTS = {
  x: 0,
  y: 0,
  lastUpOnElement: null,
  lastDownOnElement: null
};

export default
class Cursor extends Record(DEFAULTS) {
  
}
