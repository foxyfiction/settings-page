import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['role'],
  classNames: ['alert'],
  classNameBindings: ['alertClasses'],
  role: 'alert',
  alertClasses: Ember.computed('type', function() {
    const type = this.get('type');
    return `alert-${type}`;
  }),
  type: 'info',
});
