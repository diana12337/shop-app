export const fields = {
  loginForm: [
    {
      name: 'loginEmail',
      type: 'text',
      placeholder: '',
      label: 'loginEmail',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      name: 'loginPassword',
      type: 'password',
      placeholder: '',
      label: 'loginPassword',

      required: true,
    },
  ],

  registerForm: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: '',
      label: 'Imię',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: '',
      label: 'Nazwisko',
      required: true,
    },
    {
      name: 'email',
      type: 'text',

      placeholder: '',
      label: 'Email',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '',
      label: 'password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
  ],
  userPanel: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: '',
      label: 'Imię',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: '',
      label: 'Nazwisko',
      required: true,
    },
    {
      name: 'email',
      type: 'text',

      placeholder: '',
      label: 'Email',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '',
      label: 'enter current password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
  ],
  passwordForm: [
    {
      name: 'newPassword',
      type: 'password',
      placeholder: '',
      label: 'new password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: '',
      label: 'confirm password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
    {
      name: 'currentPassword',
      type: 'password',
      placeholder: '',
      label: 'enter current password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
  ],
  addressForm: [
    {
      name: 'firstName',
      type: 'text',
      placeholder: '',
      label: 'Imię',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      placeholder: '',
      label: 'Nazwisko',
      required: true,
    },
    {
      name: 'street',
      type: 'text',
      placeholder: '',
      label: 'street',

      required: true,
    },
    {
      name: 'streetNumber',
      type: 'text',
      placeholder: '',
      label: 'streetNumber',
      pattern: /^\d+[a-zA-Z]?(?:[-/]\d*[a-zA-Z]?)?$/,
      required: true,
    },
    {
      name: 'zipCode',
      type: '',
      placeholder: '00-205',
      label: 'zipcode',
      pattern: /\d{2}-\d{3}/,
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      placeholder: 'Kraków',
      label: 'city',

      required: true,
    },
  ],
};
