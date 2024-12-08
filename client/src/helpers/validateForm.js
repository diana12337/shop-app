/* import { fields } from '../data/fields.js'; */
export const validateForm = (fields, state) => {
  const errors = {};
  /*     const { fieldType, state } = this.props; */
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

export const clearFormFields = (state, setState) => {
  /* const { setState } = this.props; */
  const fieldsData = getFieldsData(state);
  console.log(fieldsData, 'dd');
  for (const prop in fieldsData) {
    fieldsData[prop] = '';
  }

  setState(fieldsData);
};
const getFieldsData = (state) => {
  /*  const { state } = this.props; */
  const fieldsData = { ...state };

  delete fieldsData.errors;

  return fieldsData;
};

export const isFieldNameCorrect = (name, state) => {
  const fieldsData = getFieldsData(state);

  return typeof fieldsData[name] !== 'undefined';
};
