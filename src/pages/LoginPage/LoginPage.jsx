/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button, Paper, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'
// import { styled, css } from '@mui/material/styles'

import './LoginPage.css'
import Page from '../../components/Page'
import api from '../../api'
import FormikTextField from '../../components/FormikTextField'

// const StyledDiv = styled(Paper)`
//   ${({ theme }) => css`
//     margin-top: ${theme.spacing(2)};
//     display: 'grid';
//     grid-template-columns: '1fr';
//     gap: 16px;
//     padding: 32px;
//     margin-top: 4px;
//     ${'' /* background: ${theme.palette.secondary.main}; */}
//   `}
// `

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values

    const { data } = await api.post(`/users/signin`, { email, password })

    sessionStorage.token = data.token
    sessionStorage.email = data.email

    api.setup(data.token)

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
        <FormikTextField
          label="Email Address"
          type="email"
          name="email"
          formik={formik}
        />
        <FormikTextField
          label="Password"
          name="password"
          type="password"
          formik={formik}
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
