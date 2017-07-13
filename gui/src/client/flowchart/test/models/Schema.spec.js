import { assert } from 'chai';
import { Map } from 'immutable';
import Schema from '../../models/Schema';
import Node from '../../models/Node';
import Link from '../../models/Link';

describe('Schema', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Schema(properties)` instance', () => {
      let schema = Schema.create({ });
      assert.instanceOf(schema, Schema);
    });

    it('should return `properties` if it is instance of `Schema`', () => {
      let schema1 = Schema.create({ prop1Key: 'prop1Value' });
      let schema2 = Schema.create(schema1);

      assert.strictEqual(schema1, schema2);
      assert.deepEqual(schema1.toJS(), schema2.toJS());
    });

    it('should take `properties.nodes` as is if specified', () => {
      let nodes = ['node1', 'node2', 'node3'];
      let schema = Schema.create({ nodes });

      assert.deepEqual(schema.nodes, nodes);
    });

    it('should create empty `immutable.Map` as `properties.nodes` if not specified', () => {
      let nodes = Map();
      let schema = Schema.create();

      assert.instanceOf(schema.nodes, Map);
      assert.deepEqual(schema.nodes.toJS(), nodes.toJS());
    });

    it('should create empty `immutable.Map` as `properties.links` if not specified', () => {
      let links = Map();
      let schema = Schema.create();

      assert.instanceOf(schema.links, Map);
      assert.deepEqual(schema.links.toJS(), links.toJS());
    });

  });

});
