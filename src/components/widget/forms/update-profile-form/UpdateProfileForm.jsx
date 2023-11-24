import React from "react";
import { Button, Card, Grid, TextField } from "@mui/material";
import FormCard from "../from-card/FormCard";
import { useFormik } from "formik";

const initialValue = {
  email: "",
  first_name: "",
  last_name: "",
  country: "",
  state: "",
};

export function UpdateProfileForm({ defaultValue = initialValue, onSubmit }) {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <FormCard
        title="Update Profile"
        cardAction={
          <Button type="submit" variant="contained" color="primary">
            Save Details
          </Button>
        }
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              value={values.first_name}
              onChange={handleChange}
              name="first_name"
              label={"First Name"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.last_name}
              onChange={handleChange}
              name="last_name"
              label={"Last Name"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.email}
              onChange={handleChange}
              name="email"
              label={"Email"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.country}
              onChange={handleChange}
              name="country"
              label={"Country"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.state}
              onChange={handleChange}
              name="state"
              label={"State"}
              fullWidth
            />
          </Grid>
        </Grid>
      </FormCard>
    </form>
  );
}
