import { Record } from 'immutable';

const DEFAULTS = {
  panX: 0,
  panY: 0,
  scale: 100,
  size: 1000,
  allowPanning: true,
  allowScaling: true
};

export default
class Viewport extends Record(DEFAULTS) {
  
}
