import { assert } from 'chai';
import { List } from 'immutable';
import Viewport from '../../models/Viewport';

describe('Viewport', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Viewport(properties)` instance', () => {
      let viewport = Viewport.create();
      assert.instanceOf(viewport, Viewport);
    });

    it('should return `properties` if it\'s an instance of `Viewport`', () => {
      let viewrport1 = Viewport.create();
      let viewport2 = Viewport.create(viewrport1);

      assert.strictEqual(viewrport1, viewport2);
      assert.deepEqual(viewrport1.toJS(), viewport2.toJS());
    });

  });

});
