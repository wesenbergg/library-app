import React from "react";
import PropTypes from "prop-types";

import map from "lodash/map";
import join from "lodash/join";
import values from "lodash/values";
import isArray from "lodash/isArray";

import { ErrorMessage } from "formik";

import FormHelperText from "@material-ui/core/FormHelperText";

function FormErrorMessage(props) {
  const { name } = props;

  return (
    <ErrorMessage name={name}>
      {(messages) => {
        if (isArray(messages)) {
          return map(messages, (message, index) => {
            return (
              <FormHelperText key={index}>
                {join(values(message), ", ")}
              </FormHelperText>
            );
          });
        }
        return <FormHelperText>{messages}</FormHelperText>;
      }}
    </ErrorMessage>
  );
}

FormErrorMessage.propTypes = {
  name: PropTypes.string,
};

FormErrorMessage.defaultProps = {
  name: null,
};

export default FormErrorMessage;
