// import { assert } from 'chai';
// import { List } from 'immutable';
// import Block from './Block';

// describe('Block', () => {

//   describe('.create(properties) (static)', () => {

//     it('should return new `Block(properties)` instance', () => {
//       let block = Block.create({ type: 'fsm-node' });
//       assert.instanceOf(block, Block);
//     });

//     it('should take `properties.key` as is if specified', () => {
//       let block = Block.create({ type: 'fsm-node', key: 'key-1' });
//       assert.strictEqual(block.key, 'key-1');
//     });

//     it('should generate `properties.key` if no specified', () => {
//       let block = Block.create({ type: 'fsm-node' });
//       assert.typeOf(block.key, 'string');
//     });

//     it('should convert `properties.active` to boolean', () => {
//       let block1 = Block.create({ type: 'fsm-node', active: 'str' });
//       assert.strictEqual(block1.active, true);

//       let block2 = Block.create({ type: 'fsm-node', active: null });
//       assert.strictEqual(block2.active, false);
//     });

//     it('should convert `properties.focused` to boolean', () => {
//       let block1 = Block.create({ type: 'fsm-node', focused: 'str' });
//       assert.strictEqual(block1.focused, true);

//       let block2 = Block.create({ type: 'fsm-node', focused: null });
//       assert.strictEqual(block2.focused, false);
//     });


//     it('should convert `properties.hovered` to boolean', () => {
//       let block1 = Block.create({ type: 'fsm-node', hovered: 'str' });
//       assert.strictEqual(block1.hovered, true);

//       let block2 = Block.create({ type: 'fsm-node', hovered: null });
//       assert.strictEqual(block2.hovered, false);
//     });

//     it('should throw error if `properties.type` is falsy', () => {
//       let createBlock = () => Block.create({});
//       assert.throws(createBlock, Error);
//     });

//   });

//   describe('.createList(elements) (static)', () => {

//     it('should return `elements` as is an instance of `List`', () => {
//       let elementsList = List([
//         { key: 'block-1', type: 'fsm-node' },
//         { key: 'block-2', type: 'fsm-node' },
//         { key: 'block-3', type: 'fsm-node' }
//       ]);
//       let createdList = Block.createList(elementsList);

//       assert.deepEqual(elementsList, createdList);
//     });

//     it('should return `List` of `Block`s if `elements` not an instance of `List`', () => {
//       let elements = [
//         { key: 'block-1', type: 'fsm-node' },
//         { key: 'block-2', type: 'fsm-node' },
//         { key: 'block-3', type: 'fsm-node' }
//       ];
//       let createdList = Block.createList(elements);

//       assert.instanceOf(createdList, List);
//     });

//   });

// });
