import Somewhere from 'somewhere';
let store = new Somewhere('./database.json');

const KEY = 'tweets';

module.exports = (item) => {
  if (item) {
    store.save(KEY, item);
  }
  return store.find(KEY);
}
