import { assert } from 'chai';
import { List } from 'immutable';
import Selection from './Selection';
import Block from './Block';
import Link from './Link';

describe('Selection', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Selection(properties)` instance', () => {
      let schema = Selection.create({ });
      assert.instanceOf(schema, Selection);
    });

    it('should return `properties` if it is instance of `Selection`', () => {
      let schema1 = Selection.create({ prop1Key: 'prop1Value' });
      let schema2 = Selection.create(schema1);

      assert.strictEqual(schema1, schema2);
      assert.deepEqual(schema1.toJS(), schema2.toJS());
    });

    it('should take `properties.elements` as is if specified', () => {
      let elements = ['block1', 'block2', 'block3'];
      let schema = Selection.create({ elements });

      assert.deepEqual(schema.elements, elements);
    });

    it('should create empty `immutable.List` as `properties.elements` if not specified', () => {
      let elements = List();
      let schema = Selection.create();

      assert.instanceOf(schema.elements, List);
      assert.deepEqual(schema.elements.toJS(), elements.toJS());
    });

  });

});
