"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),

  Password: Yup.string()
    .min(4, "Your Password should be  more than 4 characters!")
    .max(50, "Your Password should be less than 50 characters!")
    .required("Required"),
});

type initialValuesType={
  email:string,
  Password:string
}

export default function ComplexForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<initialValuesType>({
    initialValues: {
      email: "",
      Password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        p: 3,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fdfdfd",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Signup Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={values.email}          
          onChange={handleChange}        
          onBlur={handleBlur}            
          error={touched.email && Boolean(errors.email)}  
          helperText={touched.email && errors.email}     
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          margin="normal"
          value={values.Password}      
          onChange={handleChange}       
          onBlur={handleBlur}          
          error={touched.Password && Boolean(errors.Password)}  
          helperText={touched.Password && errors.Password}      
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}