import { assert } from 'chai';
import { List } from 'immutable';
import Value from './Value';
import Selection from './Selection';
import Document from './Document';
import Viewport from './Viewport';

describe('Value', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Value(properties)` instance', () => {
      let value = Selection.create({ });
      assert.instanceOf(value, Selection);
    });

    it('should return `properties` if it\'s an instance of `Value`', () => {
      let value1 = Value.create({ });
      let value2 = Value.create(value1);

      assert.strictEqual(value1, value2);
      assert.deepEqual(value1.toJS(), value2.toJS());
    });

    it('should create instance of `Document` from `properties.document`', () => {
      let blocks = ['block1', 'block2', 'block3'];
      let document = Document.create({ blocks });
      let value = Value.create({ document });

      assert.instanceOf(value.document, Document);
      assert.deepEqual(value.document.toJS(), document.toJS());
    });


    it('should create instance of `Selection` from `properties.selection`', () => {
      let elements = ['block1', 'block2', 'block3'];
      let selection = Selection.create({ elements });
      let value = Value.create({ selection });

      assert.instanceOf(value.selection, Selection);
      assert.deepEqual(value.selection.toJS(), selection.toJS());
    });


    it('should create instance of `Viewport` from `properties.viewport`', () => {
      let properties = { panX: 10, panY: 20 };
      let viewport = Viewport.create(properties);
      let value = Value.create({ viewport });

      assert.instanceOf(value.viewport, Viewport);
      assert.deepEqual(value.viewport.toJS(), viewport.toJS());
    });

  });

});
