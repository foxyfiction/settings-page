import Ember from 'ember';
import SettingValidations from '../validations/setting';

export default Ember.Controller.extend({
  SettingValidations,
  actions: {
    save(changeset) {
      changeset.validate()
        .then(() => {
        if (changeset.get('isValid')) {
          return changeset.save();
        }
        });
    }
  }
});
