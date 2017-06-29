import { Record, List } from 'immutable';
import Selection from './Selection';
import Document from './Document';
import Viewport from './Viewport';

const DEFAULTS = {
  document: new Document(),
  selection: new Selection(),
  viewport: new Viewport()
};

export default
class Value extends Record(DEFAULTS) {
  static create(properties = {}) {
    if (properties instanceof Value) return properties;

    let document = Document.create(properties.document);
    let selection = Selection.create(properties.selection);
    let viewport = Viewport.create(properties.viewport);

    let value = new Value({ document, selection });

    return value;
  }
}
