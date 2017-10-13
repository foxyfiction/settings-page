import { validatePresence, validateNumber, validateFormat } from 'ember-changeset-validations/validators';

export default {
  notificationEmail: [
    validatePresence(true),
    validateFormat({ type: 'email' }),
  ],
  proxyUrl: [
    validatePresence(true),
    validateFormat({ type: 'url' }),
  ],
  maxErrorCount: [
    validatePresence(true),
    validateNumber({integer: true})
  ]
}
