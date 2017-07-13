import { assert } from 'chai';
import { List } from 'immutable';
import Node from '../../models/Node';

describe('Node', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Node(properties)` instance', () => {
      let node = Node.create({ type: 'fsm-node' });
      assert.instanceOf(node, Node);
    });

    it('should return `properties` if it\'s an instance of `Node`', () => {
      let node1 = Node.create({ type: 'fsm-node' });
      let node2 = Node.create(node1);

      assert.strictEqual(node1, node2);
      assert.deepEqual(node1.toJS(), node2.toJS());
    });

    it('should take `properties.key` as is if specified', () => {
      let node = Node.create({ type: 'fsm-node', key: 'key-1' });
      assert.strictEqual(node.key, 'key-1');
    });

    it('should generate `properties.key` if no specified', () => {
      let node = Node.create({ type: 'fsm-node' });
      assert.typeOf(node.key, 'string');
    });

    it('should convert `properties.active` to boolean', () => {
      let node1 = Node.create({ type: 'fsm-node', active: 'str' });
      assert.strictEqual(node1.active, true);

      let node2 = Node.create({ type: 'fsm-node', active: null });
      assert.strictEqual(node2.active, false);
    });

    it('should convert `properties.focused` to boolean', () => {
      let node1 = Node.create({ type: 'fsm-node', focused: 'str' });
      assert.strictEqual(node1.focused, true);

      let node2 = Node.create({ type: 'fsm-node', focused: null });
      assert.strictEqual(node2.focused, false);
    });


    it('should convert `properties.hovered` to boolean', () => {
      let node1 = Node.create({ type: 'fsm-node', hovered: 'str' });
      assert.strictEqual(node1.hovered, true);

      let node2 = Node.create({ type: 'fsm-node', hovered: null });
      assert.strictEqual(node2.hovered, false);
    });

    it('should throw error if `properties.type` is falsy', () => {
      let createNode = () => Node.create({});
      assert.throws(createNode, Error);
    });

  });

  describe('.createList(elements) (static)', () => {

    it('should return `elements` as is an instance of `immutable.List`', () => {
      let elementsList = List([
        { key: 'node-1', type: 'fsm-node' },
        { key: 'node-2', type: 'fsm-node' },
        { key: 'node-3', type: 'fsm-node' }
      ]);
      let createdList = Node.createList(elementsList);

      assert.deepEqual(elementsList, createdList);
    });

    it('should return `immutable.List` of `Node`s if `elements` not an instance of `immutable.List`', () => {
      let elements = [
        { key: 'node-1', type: 'fsm-node' },
        { key: 'node-2', type: 'fsm-node' },
        { key: 'node-3', type: 'fsm-node' }
      ];
      let createdList = Node.createList(elements);

      assert.instanceOf(createdList, List);
    });

  });

});
