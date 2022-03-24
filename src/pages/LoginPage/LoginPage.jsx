/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { Form, Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'
import { styled, css } from '@mui/material/styles'

import './LoginPage.css'
import Page from '../../components/page'

const StyledDiv = styled(Paper)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(2)};
    display: 'grid';
    grid-template-columns: '1fr';
    gap: 16px;
    padding: 32px;
    margin-top: 4px;
    ${'' /* background: ${theme.palette.secondary.main}; */}
  `}
`

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values

    const response = await fetch(
      `https://tms-js-pro-back-end.herokuapp.com/api/users/signin`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    )

    const data = await response.json()

    // if (data.errors) {
    //   const errorMessage = JSON.stringify(data.errors);
    //   // setErrors([errorMessage]);
    //   return;
    // }

    sessionStorage.token = data.token
    sessionStorage.email = data.email
    navigate('/', { replace: true })

    setSubmitting(false)
  }

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
  })

  return (
    <Page className="justify-center items-center">
      <Paper
        className="grid grid-cols-1 gap-4 p-4 w-1/2"
        component="form"
        elevation={4}
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h5" textAlign="center">
          Please sign in
        </Typography>
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
          size="large"
          disabled={!formik.isValid && !formik.isSubmitting}
        >
          sign in
        </Button>
      </Paper>
    </Page>
  )
}
