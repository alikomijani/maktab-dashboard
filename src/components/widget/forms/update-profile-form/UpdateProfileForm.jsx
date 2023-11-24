import React, { useContext } from "react";
import { Button, Card, CircularProgress, Grid, TextField } from "@mui/material";
import FormCard from "../from-card/FormCard";
import { useFormik } from "formik";
import { useCreateCustomer } from "../../../../api";
import { SnackAlertContext } from "../../../../providers";

const initialValue = {
  email: "",
  name: "",
  username: "",
  country: "",
  phone: "",
  website: "",
};

export function UpdateProfileForm({ defaultValue = initialValue }) {
  const {
    mutate: createUser,
    data,
    isLoading,
    isError,
    error,
  } = useCreateCustomer({
    onSuccess: () => {
      showAlert({
        title: "Success",
        message: "customer added successful",
      });
    },
  });
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (values) => {
      createUser(values);
    },
  });
  const { showAlert } = useContext(SnackAlertContext);

  return (
    <form onSubmit={handleSubmit}>
      <FormCard
        title="Update Profile"
        cardAction={
          <Button
            type="submit"
            disabled={isLoading}
            variant="contained"
            color="primary"
          >
            {isLoading ? <CircularProgress size={20} /> : null}
            {isLoading ? "...loading" : "Save Details"}
          </Button>
        }
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              value={values.name}
              onChange={handleChange}
              name="name"
              label={"Full Name"}
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
              value={values.phone}
              onChange={handleChange}
              name="phone"
              label={"Phone"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.username}
              onChange={handleChange}
              name="username"
              label={"Username"}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={values.website}
              onChange={handleChange}
              name="website"
              label={"Website"}
              fullWidth
            />
          </Grid>
        </Grid>
      </FormCard>
    </form>
  );
}
