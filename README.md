# Settings page

It is a simple settings page example on [Ember.js](http://emberjs.com).

## Description

![Image](https://preview.ibb.co/nxK1BG/Selection_001.png)

The project contains one setting model, two routes (index and settings), and some ember components. 

In application I use [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) and [bootstrap-sass](https://github.com/twbs/bootstrap-sass). They provide sass-powered version of [Bootstrap 3](https://getbootstrap.com/docs/3.3/) for ember-cli project.

Navigation components contain main horizontal bar and sidebar with application navigation routes. The active route is highlighted.

A setting form component contains some custom input components that wrap HTML form tags and bootstrap styles. It helps to avoid excess boilerplates and to apply form value validations in a form template.

[ember-changeset](https://github.com/DockYard/ember-changeset) and [ember-changeset-validation](https://github.com/DockYard/ember-changeset-validations/) are used for check setting form values. Setting validation has been created and it applies validators to "notification email", "proxy URL", and "max error count" fields. This fields should be presented and be of the appropriate type. If a field value is not valid, then you will see a special message.

Save operation result is appear on an alert-message component that is may set up depending on the result. It is enough to send a header, a message, and alert type.

If a setting model hasn't loaded from a server a notification message will appear. [ember-cli-notifications](https://github.com/stonecircle/ember-cli-notifications) is used for it.

[ember-cli-mirage](http://www.ember-cli-mirage.com/) provide HTTP request stubs. Factory generate fake setting model object using faker.js.

## Installation

* `git clone https://github.com/foxyfiction/settings-page.git`
* `cd settings-page`
* `npm install && bower install`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
