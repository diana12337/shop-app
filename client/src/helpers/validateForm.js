export const validateForm = (fields, state) => {
  const errors = {};

  fields.forEach((field) => {
    if (field.required) {
      if (state[field.name].length < 2) {
        errors[field.name] = 'Field invalid';
      } else {
        errors[field.name] = 'Field valid';
      }
    }

    if (field.pattern) {
      const { pattern } = field;
      if (!pattern.test(state[field.name])) {
        errors[field.name] = 'Field invalid';
      } else {
        errors[field.name] = 'Field valid';
      }
    }
  });

  return errors;
};
