export const fields = {
  loginForm: [
    {
      id: 'loginEmail',
      name: 'loginEmail',
      type: 'text',
      placeholder: '',
      label: 'email',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      id: 'loginPassword',
      name: 'loginPassword',
      type: 'password',
      placeholder: '',
      label: 'password',

      required: true,
    },
  ],

  registerForm: [
    {
      id: 'registerName',
      name: 'firstName',
      type: 'text',
      placeholder: 'Jan',
      label: 'name',
      required: true,
    },
    {
      id: 'registerlastName',
      name: 'lastName',
      type: 'text',
      placeholder: 'Kowal',
      label: 'surname',
      required: true,
    },
    {
      id: 'registerEmail',
      name: 'email',
      type: 'text',

      placeholder: 'jan@gmail.com',
      label: 'email',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      id: 'registerPassword',
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
      id: 'panelName',
      name: 'firstName',
      type: 'text',
      placeholder: '',
      label: 'name',
      required: true,
    },
    {
      id: 'panellastName',
      name: 'lastName',
      type: 'text',
      placeholder: '',
      label: 'surname',
      required: true,
    },
    {
      id: 'panelEmail',
      name: 'email',
      type: 'text',

      placeholder: '',
      label: 'email',
      pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
      required: true,
    },
    {
      id: 'panelPassword',
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
      id: 'passwordNew',
      name: 'newPassword',
      type: 'password',
      placeholder: '',
      label: 'new password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
    {
      id: 'passwordConfirm',
      name: 'confirmPassword',
      type: 'password',
      placeholder: '',
      label: 'confirm password',
      pattern:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      required: true,
    },
    {
      id: 'passwordCurrent',
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
      id: 'addressName',
      name: 'firstName',
      type: 'text',
      placeholder: 'Jan',
      label: 'name',
      required: true,
    },
    {
      id: 'addresslastName',
      name: 'lastName',
      type: 'text',
      placeholder: 'Kowalski',
      label: 'surname',
      required: true,
    },
    {
      id: 'addressStreet',
      name: 'street',
      type: 'text',
      placeholder: 'Ogrodowa',
      label: 'street',

      required: true,
    },
    {
      id: 'addressNumber',
      name: 'streetNumber',
      type: 'text',
      placeholder: '4a',
      label: 'street number',
      pattern: /^\d+[a-zA-Z]?(?:[-/]\d*[a-zA-Z]?)?$/,
      required: true,
    },
    {
      id: 'addressZipcode',
      name: 'zipCode',
      type: '',
      placeholder: '00-205',
      label: 'zip-code',
      pattern: /\d{2}-\d{3}/,
      required: true,
    },
    {
      id: 'addressCity',
      name: 'city',
      type: 'text',
      placeholder: 'Kraków',
      label: 'city',

      required: true,
    },
  ],
};
