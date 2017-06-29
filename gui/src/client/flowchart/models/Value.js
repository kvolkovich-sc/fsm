import { Record, List } from 'immutable';
import Selection from './Selection';
import Document from './Document';

const DEFAULTS = {
  document: new Document(),
  selection: new Selection()
};

export default
class Value extends Record(DEFAULTS) {
  static create(properties = {}, options = {}) {
    if (properties instanceof Value) return properties;

    let document = Document.create(properties.document);
    let selection = Selection.create(properties.selection);

    let value = new Value({ document, selection });

    return value;
  }
}
