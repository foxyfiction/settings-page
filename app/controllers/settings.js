import Ember from 'ember';
import SettingValidations from '../validations/setting';

export default Ember.Controller.extend({
  SettingValidations,
  actions: {
    save(changeset) {
      changeset.validate()
        .then(() => {
        if (changeset.get('isValid')) {
          return changeset.save()
            .then(() => this.setProperties({
              isResultMessageVisible: true,
              resultMessageTitle: 'Success!',
              resultMessage: 'Settings have been saved.',
              resultMessageType: 'success',
            }))
            .catch(() => this.setProperties({
              isResultMessageVisible: true,
              resultMessageTitle: 'Oops!',
              resultMessage: 'Failed to save settings.',
              resultMessageType: 'danger',
            }));
        }
        });
    }
  }
});
