import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['role'],
  classNameBindings: ['alertClasses'],
  role: 'alert',
  alertClasses: Ember.computed('type', function() {
    const type = this.get('type');
    return `alert alert-${type}`;
  }),
  type: 'info',
});
