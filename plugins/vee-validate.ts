import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('email', {
  ...email,
  message: 'Email address is not a valid email address',
});

extend('required', {
  ...required,
  message: (fieldName, placeholders) => {
    const field = fieldName === '{field}' ? 'Field' : fieldName;
    return `${field} cannot be blank`;
  },
});

extend('password', {
  validate(value) {
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters and one special symbol
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{3,20}$/;

    return passwordValidation.test(value);
  },
  message: 'Password must be at min 3 characters or 20 long, including uppercase, lowercase and number',
});

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
