/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Paper, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'
// import { styled, css } from '@mui/material/styles'

import './LoginPage.css'
import Page from '../../components/Page'
import api from '../../api'
import FormikTextField from '../../components/FormikTextField'
import { useAppContext } from '../../components/AppContext'
import { useDispatch } from 'react-redux'
import { initializeAction } from '../../actions/isInitialized'

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

  const dispatch = useDispatch()

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values

    const { data } = await api.post(`/users/signin`, { email, password })

    sessionStorage.token = data.token
    sessionStorage.email = data.email

    api.setup(data.token)
    dispatch(initializeAction())

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
    <Page
      className="justify-center items-center"
      sx={{
        background: `url('./images/login-bg.jpeg')`,
        backgroundSize: '100% 100%',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
      }}
    >
      <Box
        className="grid grid-cols-1 gap-4 p-4 w-1/4"
        component="form"
        // elevation={4}
        onSubmit={formik.handleSubmit}
      >
        <Typography variant="h5" textAlign="center" sx={{ color: 'white' }}>
          Please sign in
        </Typography>
        <FormikTextField
          label="Email Address"
          type="email"
          name="email"
          formik={formik}
          sx={{ bgcolor: 'gray' }}
        />
        <FormikTextField
          label="Password"
          name="password"
          type="password"
          formik={formik}
          sx={{ bgcolor: 'gray' }}
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
      </Box>
    </Page>
  )
}
