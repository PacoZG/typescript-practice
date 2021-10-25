import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Formik, Form, Field } from "formik";

import { TextField, NumberField, TypeSelectField, GenderOption, SelectField, ConfirmSelectField } from "../FormField";
import { TypeOption, Gender, ConfirmOption, CelebrityTypes, Alive } from "../../types";

interface Props {
  onSubmit: (values: CelebrityTypes) => void;
  onCancel: () => void;
}

const genderOptions: GenderOption[] = [
  { value: Gender.Male, label: "Male" },
  { value: Gender.Female, label: "Female" },
];

const typeOptions: TypeOption[] = [
  { value: "athlete", label: "Athlete" },
  { value: "singer", label: "Singer" },
  { value: "musician", label: "Musician" },
  { value: "polititian", label: "Polititian" },
];

const confirmOptions: ConfirmOption[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const isDate = (date: string): boolean => {
  if (date.length === 0) {
    return true;
  }
  return Boolean(Date.parse(date));
};

export const AddEntryForm = ({ onSubmit, onCancel }: Props) => {
  const style = {
    padding: 5,
    borderStyle: "solid",
    borderWidth: "thin",
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#DCDCDC",
  };
  return (
    <Formik
      initialValues={{
        id: "",
        type: "athlete",
        full_name: "",
        birthday: "",
        country: "",
        alive: Alive.Yes,
        gender: Gender.Female,
        sport: "",
        team: "",
        active: "",
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        const requiredError = "Field is required";
        const dateError = "Malformatted date";
        const errors: { [field: string]: string } = {};

        if (!values.full_name || values.full_name.length === 0) {
          errors.full_name = requiredError;
        }

        if (!values.country || values.country.length === 0) {
          errors.country = requiredError;
        }

        if (!values.alive || values.alive.length === 0) {
          errors.country = requiredError;
        }

        if (!values.birthday || values.birthday.length === 0) {
          errors.date = requiredError;
        }

        if (values.birthday && !isDate(values.birthday)) {
          errors.date = dateError;
        }
        return errors;
      }}
    >
      {({ isValid, dirty, values }) => {
        return (
          <Form className="form ui">
            <TypeSelectField label="Type" name="type" options={typeOptions} />
            <Field label="Full name" placeholder="full name" name="full_name" component={TextField} />
            <Field label="Country" placeholder="country" name="country" component={TextField} />
            <Field label="Birthday" placeholder="YYYY-MM-DD" name="birthday" component={TextField} />
            <SelectField label="Gender" name="gender" options={genderOptions} />
            <ConfirmSelectField label="Alive" name="alive" options={confirmOptions} />

            {values.type === "athlete" && (
              <div style={style}>
                <h4>Sport life</h4>
                <Field label="Sport" placeholder="Playing Sport" name="sport" component={TextField} />
                <Field label="Team" placeholder="Current team" name="team" component={TextField} />
                <div style={{ color: "red", marginBottom: 5 }}>{}</div>
                <ConfirmSelectField label="Active" name="active" options={confirmOptions} />
              </div>
            )}

            {values.type === "singer" && (
              <div style={style}>
                <Field label="Band" placeholder="Playing band" name="band" component={TextField} />
                <Field label="Famous Song" placeholder="Famous Song" name="famous_song" component={TextField} />
                <Field label="Albums recorded" placeholder="0" name="albums_recorded" component={NumberField} />
                <Field label="Instrument" placeholder="Instrument" name="instrument" component={TextField} />
              </div>
            )}
            {values.type === "musician" && (
              <div style={style}>
                <Field label="Band" placeholder="Playing band" name="band" component={TextField} />
                <Field label="Famous Song" placeholder="Famous Song" name="famous_song" component={TextField} />
                <Field label="Albums recorded" placeholder="0" name="albums_recorded" component={NumberField} />
                <Field label="Instrument" placeholder="Instrument" name="instrument" component={TextField} />
              </div>
            )}
            {values.type === "polititian" && (
              <div style={style}>
                <Field label="Position" placeholder="Position" name="position" component={TextField} />
                <Field label="Years in power" placeholder="0" name="years_in_power" component={NumberField} />
              </div>
            )}
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button type="submit" floated="right" color="green" disabled={!dirty || !isValid}>
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
