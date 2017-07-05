import { assert } from 'chai';
import { List } from 'immutable';
import Link from '../../models/Link';

describe('Link', () => {

  describe('.create(properties) (static)', () => {

    it('should return new `Link(properties)` instance', () => {
      let link = Link.create({ type: 'bezier-link' });
      assert.instanceOf(link, Link);
    });

    it('should return `properties` if it\'s an instance of `Link`', () => {
      let link1 = Link.create({ type: 'bezier-link' });
      let link2 = Link.create(link1);

      assert.strictEqual(link1, link2);
      assert.deepEqual(link1.toJS(), link2.toJS());
    });

    it('should take `properties.key` as is if specified', () => {
      let link = Link.create({ type: 'bezier-link', key: 'key-1' });
      assert.strictEqual(link.key, 'key-1');
    });

    it('should generate `properties.key` if no specified', () => {
      let link = Link.create({ type: 'bezier-link' });
      assert.typeOf(link.key, 'string');
    });

    it('should convert `properties.active` to boolean', () => {
      let link1 = Link.create({ type: 'bezier-link', active: 'str' });
      assert.strictEqual(link1.active, true);

      let link2 = Link.create({ type: 'bezier-link', active: null });
      assert.strictEqual(link2.active, false);
    });

    it('should convert `properties.focused` to boolean', () => {
      let link1 = Link.create({ type: 'bezier-link', focused: 'str' });
      assert.strictEqual(link1.focused, true);

      let link2 = Link.create({ type: 'bezier-link', focused: null });
      assert.strictEqual(link2.focused, false);
    });

    it('should convert `properties.hovered` to boolean', () => {
      let link1 = Link.create({ type: 'bezier-link', hovered: 'str' });
      assert.strictEqual(link1.hovered, true);

      let link2 = Link.create({ type: 'bezier-link', hovered: null });
      assert.strictEqual(link2.hovered, false);
    });

    it('should throw error if `properties.type` is falsy', () => {
      let createLink = () => Link.create({});
      assert.throws(createLink, Error);
    });

  });

  describe('.createList(elements) (static)', () => {

    it('should return `elements` as is an instance of `immutable.List`', () => {
      let elementsList = List([
        { key: 'link-1', type: 'bezier-link' },
        { key: 'link-2', type: 'bezier-link' },
        { key: 'link-3', type: 'bezier-link' }
      ]);
      let createdList = Link.createList(elementsList);

      assert.deepEqual(elementsList, createdList);
    });

    it('should return `List` of `Link`s if `elements` not an instance of `immutable.List`', () => {
      let elements = [
        { key: 'link-1', type: 'bezier-link' },
        { key: 'link-2', type: 'bezier-link' },
        { key: 'link-3', type: 'bezier-link' }
      ];
      let createdList = Link.createList(elements);

      assert.instanceOf(createdList, List);
    });

  });

});
