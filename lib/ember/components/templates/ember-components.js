//= require_tree ./ember-components

const EmberComponents = {
  registerAll(application) {
    const inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
    const filterRegexp = new RegExp('^ember-components/');
    const types = ['component'];
    const entries = requirejs.entries;

    Object.keys(entries).filter(key => key.match(filterRegexp)).forEach(key => {
      const parsedName = key.split('/');
      if (parsedName.length !== 3) {
        return;
      }

      const type   = inflector.singularize(parsedName[1]);
      const name   = parsedName[2];
      const klass  = require(key).default;

      if (!types.includes(type)) {
        return;
      }

      application.register(`${type}:${name}`, klass);
    });
  }
}

export default EmberComponents
