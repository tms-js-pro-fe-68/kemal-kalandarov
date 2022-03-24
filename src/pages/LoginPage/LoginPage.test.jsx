/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;

    const response = await fetch(
      'https://tms-js-pro-back-end.herokuapp.com/api/users/signin',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await response.json();

    // if (data.errors) {
    //   const errorMessage = JSON.stringify(data.errors);
    //   // setErrors([errorMessage]);
    //   return;
    // }

    sessionStorage.token = data.token;
    sessionStorage.email = data.email;
    navigate('/', { replace: true });

    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
      email: string().email().required(),
      password: string().min(6).required(),
    }),
    validateOnMount: true,
  });

  console.log(formik);

  return (
    <Box
      style={{ margin: '16px', marginTop: '8px', width: '50%' }}
      sx={{ width: 1234, m: { xs: 1, sm: 2, md: 3, lg: 6 } }}
      m={4}
      mt={1}
      mb={2}
      my={3}
      mx={2}
      mr={2}
      ml={2}
    >
      <div
        component="form"
        // classes={{ root: 'class1' }}
        className="class1"
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 2,
          p: 4,
          mt: 0.5,
        }}
        elevation={4}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          helperText={
            formik.touched.email && !!formik.errors.email && formik.errors.email
          }
        />
        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && !!formik.errors.password}
          helperText={
            formik.touched.password &&
            !!formik.errors.password &&
            formik.errors.password
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formik.isValid && !formik.isSubmitting}
        >
          sign in
        </Button>
      </div>
    </Box>
  );
}
