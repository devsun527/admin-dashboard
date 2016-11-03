import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('../FormField.scss');
require('./FormFieldCheckbox.scss');

const FormField = ({ input, label, id, onChangeTest, meta: { touched, error } }) => {
  const isError = touched && error;
  const fieldClass = classnames('checkbox', { 'is-error': isError });
  const labelClass = classnames('label', { 'is-active': input.value });

  return (
    <div className="checkbox-container">
      <label
        className={labelClass}
        htmlFor={id}
      >
        {label}
      </label>

      <div className="input-container">
        <input
          {...input}
          className={fieldClass}
          type="checkbox"
          id={id}
          onChange={(event) => {
            input.onChange(event);
            onChangeTest(event.target.value);
          }}
        />
        <label htmlFor={id} />
        {
          isError &&
            <div className="field__error">{error}</div>
        }
      </div>
    </div>
  );
};

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
};

export default FormField;