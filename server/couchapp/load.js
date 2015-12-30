import loadDocs from './loadDocs';
import loadViews from './loadViews';

loadDocs()
.then(loadViews)
.catch((error) => {
  process.stderr.write(error.stack);
  process.exit(1);
})

