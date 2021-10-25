import React from "react";
import { ErrorMessage, Field, FieldProps } from "formik";
import { Form } from "semantic-ui-react";
import { Gender, TypeOption, ConfirmOption } from "../types";

// structure of a single option
export type GenderOption = {
  value: Gender;
  label: string;
};

// props for select field component
type SelectFieldProps = {
  name: string;
  label: string;
  options: GenderOption[];
};

export const SelectField = ({ name, label, options }: SelectFieldProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field as="select" name={name} className="ui dropdown">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </Field>
  </Form.Field>
);

type TypeSelectFieldProps = {
  name: string;
  label: string;
  options: TypeOption[];
};

export const TypeSelectField = ({ name, label, options }: TypeSelectFieldProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field as="select" name={name} className="ui dropdown">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </Field>
  </Form.Field>
);

interface TextProps extends FieldProps {
  label: string;
  placeholder: string;
}

export const TextField = ({ field, label, placeholder }: TextProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field placeholder={placeholder} {...field} />
    <div style={{ color: "red" }}>
      <ErrorMessage name={field.name} />
    </div>
  </Form.Field>
);

/*
  for exercises 9.24.-
*/
interface NumberProps extends FieldProps {
  label: string;
  errorMessage?: string;
  min: number;
  max: number;
}

export const NumberField = ({ field, label, min, max }: NumberProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field {...field} type="number" min={min} max={max} />
    <div style={{ color: "red" }}>
      <ErrorMessage name={field.name} />
    </div>
  </Form.Field>
);

interface RadioProps extends FieldProps {
  label: string;
}

export const RadioField = ({ label }: RadioProps) => {
  <Form.Field>
    <label>{label}</label>
    <label>
      <Field type="radio" name="picked" /> Yes
    </label>
    <label>
      <Field type="radio" name="picked" /> No
    </label>
    <div style={{ color: "red" }}>
      <ErrorMessage name={"alive"} />
    </div>
  </Form.Field>;
};

type ConfirmSelectFieldProps = {
  name: string;
  label: string;
  options: ConfirmOption[];
};

export const ConfirmSelectField = ({ name, label, options }: ConfirmSelectFieldProps) => (
  <Form.Field>
    <label>{label}</label>
    <Field as="select" name={name} className="ui dropdown">
      {options.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label || option.value}
        </option>
      ))}
    </Field>
  </Form.Field>
);
