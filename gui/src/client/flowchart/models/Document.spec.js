import { assert } from 'chai';
import { List } from 'immutable';
import Document from './Document';
import Block from './Block';
import Link from './Link';

describe('Document', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Document(properties)` instance', () => {
      let document = Document.create({ });
      assert.instanceOf(document, Document);
    });

    it('should return `properties` if it\'s an instance of `Document`', () => {
      let document1 = Document.create({ prop1Key: 'prop1Value' });
      let document2 = Document.create(document1);

      assert.strictEqual(document1, document2);
      assert.deepEqual(document1.toJS(), document2.toJS());
    });

    it('should create `Block`s list from `properties.blocks`', () => {
      let blocks = [
        { type: 'fsm-node', key: '0' },
        { type: 'fsm-node', key: '1' },
        { type: 'fsm-node', key: '2' },
      ];
      let blocksList = Block.createList(blocks);
      let document = Document.create({ blocks });

      assert.deepEqual(document.blocks.toJS(), blocksList.toJS());
    });

    it('should create `Link`s list as `properties.links` if not specified', () => {
      let links = Block.createList();
      let document = Document.create();

      assert.deepEqual(document.links.toJS(), links.toJS());
    });

  });

});
