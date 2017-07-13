import { assert } from 'chai';
import { List } from 'immutable';
import Port from '../../models/Port';

describe('Port', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Port(properties)` instance', () => {
      let node = Port.create({ type: 'basic-port' });
      assert.instanceOf(node, Port);
    });

    it('should return `properties` if it\'s an instance of `Port`', () => {
      let node1 = Port.create({ type: 'basic-port' });
      let node2 = Port.create(node1);

      assert.strictEqual(node1, node2);
      assert.deepEqual(node1.toJS(), node2.toJS());
    });

    it('should take `properties.key` as is if specified', () => {
      let node = Port.create({ type: 'basic-port', key: 'key-1' });
      assert.strictEqual(node.key, 'key-1');
    });

    it('should generate `properties.key` if no specified', () => {
      let node = Port.create({ type: 'basic-port' });
      assert.typeOf(node.key, 'string');
    });

    it('should throw error if `properties.type` is falsy', () => {
      let createNode = () => Port.create({});
      assert.throws(createNode, Error);
    });

  });

  describe('.createList(elements) (static)', () => {

    it('should return `elements` as is an instance of `immutable.List`', () => {
      let elementsList = List([
        { key: 'node-1', type: 'basic-port' },
        { key: 'node-2', type: 'basic-port' },
        { key: 'node-3', type: 'basic-port' }
      ]);
      let createdList = Port.createList(elementsList);

      assert.deepEqual(elementsList, createdList);
    });

    it('should return `immutable.List` of `Port`s if `elements` not an instance of `immutable.List`', () => {
      let elements = [
        { key: 'node-1', type: 'basic-port' },
        { key: 'node-2', type: 'basic-port' },
        { key: 'node-3', type: 'basic-port' }
      ];
      let createdList = Port.createList(elements);

      assert.instanceOf(createdList, List);
    });

  });

});
