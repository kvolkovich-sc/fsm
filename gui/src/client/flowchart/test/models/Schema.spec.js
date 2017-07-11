import { assert } from 'chai';
import { Map } from 'immutable';
import Schema from '../../models/Schema';
import Block from '../../models/Block';
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

    it('should take `properties.blocks` as is if specified', () => {
      let blocks = ['block1', 'block2', 'block3'];
      let schema = Schema.create({ blocks });

      assert.deepEqual(schema.blocks, blocks);
    });

    it('should create empty `immutable.Map` as `properties.blocks` if not specified', () => {
      let blocks = Map();
      let schema = Schema.create();

      assert.instanceOf(schema.blocks, Map);
      assert.deepEqual(schema.blocks.toJS(), blocks.toJS());
    });

    it('should create empty `immutable.Map` as `properties.links` if not specified', () => {
      let links = Map();
      let schema = Schema.create();

      assert.instanceOf(schema.links, Map);
      assert.deepEqual(schema.links.toJS(), links.toJS());
    });

  });

});
