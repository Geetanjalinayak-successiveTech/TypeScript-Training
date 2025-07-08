"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function MUIForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validate = () => {
    let tempErrors = { name: "", email: "" };
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }
    setErrors(tempErrors);
    return !tempErrors.name && !tempErrors.email;
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
      setFormData({ name: "", email: "" });
    } else {
      alert("Error in the form");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#fafafa",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={(e:ChangeEvent<HTMLInputElement>) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
      />

      <TextField
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={(e:ChangeEvent<HTMLInputElement>) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
