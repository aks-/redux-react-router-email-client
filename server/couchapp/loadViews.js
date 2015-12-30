import Promise from 'bluebird';
import * as db from '../lib/db';
import fs from 'fs';
import path from 'path';
import readFile from 'fs-readfile-promise';

const designDocPath = __dirname + '/design/doc.json';

module.exports = () => {
  return readFile(designDocPath)
  .then(JSON.parse)
  .then(function(val) {
    var designName = '_design/emails';
    db.prepareView(val, designName);
  })
};
