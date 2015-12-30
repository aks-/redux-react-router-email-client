import * as db from '../lib/db';
import docs from '../fixtures/documents';

const bulkInsert = db.getDb().bulk;

module.exports = () => {
  return db.reset()
  .then(() => {
    return bulkInsert(docs)
  })
};
