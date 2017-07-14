import { assert } from 'chai';
import { Map } from 'immutable';
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

    it('should convert `properties.disabled` to boolean', () => {
      let node1 = Node.create({ type: 'fsm-node', disabled: 'str' });
      assert.strictEqual(node1.disabled, true);

      let node2 = Node.create({ type: 'fsm-node', disabled: null });
      assert.strictEqual(node2.disabled, false);
    });

    it('should convert `properties.selected` to boolean', () => {
      let node1 = Node.create({ type: 'fsm-node', selected: 'str' });
      assert.strictEqual(node1.selected, true);

      let node2 = Node.create({ type: 'fsm-node', selected: null });
      assert.strictEqual(node2.selected, false);
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

  describe('.createMap(elements) (static)', () => {

    it('should return `elements` as is if an instance of `immutable.Map`', () => {
      let elementsList = Map({
        'node-1': { key: 'node-1', type: 'fsm-node' },
        'node-2': { key: 'node-2', type: 'fsm-node' },
        'node-3': { key: 'node-3', type: 'fsm-node' }
      });
      let createdMap = Node.createMap(elementsList);

      assert.deepEqual(elementsList, createdMap);
    });

    it('should return `immutable.Map` of `Node`s if `elements` is an instance of `Array`', () => {
      let elementsList = [
        { key: 'node-1', type: 'fsm-node' },
        { key: 'node-2', type: 'fsm-node' },
        { key: 'node-3', type: 'fsm-node' }
      ];
      let expectedElementsMap = {
        'node-1': {
          key: 'node-1', type: 'fsm-node', disabled: false, selected: false, hovered: false
        },
        'node-2': {
          key: 'node-2', type: 'fsm-node', disabled: false, selected: false, hovered: false
        },
        'node-3': {
          key: 'node-3', type: 'fsm-node', disabled: false, selected: false, hovered: false
        }
      };
      let createdMap = Node.createMap(elementsList);

      assert.instanceOf(createdMap, Map);
      assert.deepEqual(createdMap.toJS(), expectedElementsMap);
    });

  });

});
