import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findRecord('setting', 1);
  },
  actions: {
    willTransition() {
      const model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        model.rollbackAttributes();
      }
      return true;
    }
  }
});
