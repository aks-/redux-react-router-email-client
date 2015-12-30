import Promise from 'bluebird';
import Nano from 'nano';
import config from '../config/dbConfig';

const url = `http://${config.user}:${config.pass}@${config.host}:${config.port}`;
const nano = Nano(url);
const dbName = config.name;
const db = Promise.promisifyAll(nano.db.use(dbName));

export const createDb = () => (
  Promise.promisify(nano.db.create)(dbName)
);

export const destroyDb = () => (
  Promise.promisify(nano.db.destroy)(dbName)
);

export const reset = () => (
  destroyDb()
  .then(function() {
    return createDb();
  })
  .catch(function(error) {
    if (error && error.reason == 'missing')
      return createDb(dbName);
  })
);

export const getDb = () => (
  db
);

export const get = (key, revs_info) => (
  db.getAsync(key, revs_info_obj)
);

export const findBy = (design, view, params) => (
  db.viewAsync(design, view, params)
);

export const save = (doc) => (
  db.insertAsync(doc)
);

export const update = (key, updatedDoc) => (
  get(key, {
    revs_info: true
  })
  .then(function() {
    return updatedDoc;
  })
  .then(function(updatedDoc) {
    return save(updatedDoc);
  })
);

export const destroy = (id, rev) => (
  db.destroyAsync(id, rev)
);

export const prepareView = (view, viewName) => (
  db.insertAsync(view, viewName)
);
