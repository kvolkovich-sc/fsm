import { assert } from 'chai';
import { List } from 'immutable';
import Selection from '../../models/Selection';
import Node from '../../models/Node';
import Link from '../../models/Link';

describe('Selection', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Selection(properties)` instance', () => {
      let selection = Selection.create({ });
      assert.instanceOf(selection, Selection);
    });

    it('should return `properties` if it is instance of `Selection`', () => {
      let schema1 = Selection.create({ prop1Key: 'prop1Value' });
      let schema2 = Selection.create(schema1);

      assert.strictEqual(schema1, schema2);
      assert.deepEqual(schema1.toJS(), schema2.toJS());
    });

    it('should take `properties.nodes` as is if specified', () => {
      let nodes = ['node1', 'node2', 'node3'];
      let selection = Selection.create({ nodes });

      assert.deepEqual(selection.nodes, nodes);
    });

    it('should create empty `immutable.List` as `properties.nodes` if not specified', () => {
      let nodes = List();
      let selection = Selection.create();

      assert.instanceOf(selection.nodes, List);
      assert.deepEqual(selection.nodes.toJS(), nodes.toJS());
    });

    it('should create empty `immutable.List` as `properties.links` if not specified', () => {
      let links = List();
      let selection = Selection.create();

      assert.instanceOf(selection.links, List);
      assert.deepEqual(selection.links.toJS(), links.toJS());
    });

  });

});
