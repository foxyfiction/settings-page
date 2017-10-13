import Ember from 'ember';

export default Ember.Route.extend({

  notifications: Ember.inject.service('notification-messages'),

  model() {
    return this.get('store').findRecord('setting', 1);
  },

  actions: {
    willTransition() {
      this.controller.setProperties({
        isResultMessageVisible: false,
        resultMessageTitle: null,
        resultMessage: null,
        resultMessageType: null,
      });
      const model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        model.rollbackAttributes();
      }
      return true;
    },
    error(error) {
      if (error) {
        this.get('notifications').error('Failed to load settings.', {
          autoClear: true,
          clearDuration: 1200,
          cssClasses: 'alert'
        });
        return true;
      }
    }
  }
});
