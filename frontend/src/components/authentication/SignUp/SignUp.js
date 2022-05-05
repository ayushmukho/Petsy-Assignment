import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Box,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Modal,
} from '@material-ui/core'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Visibility, VisibilityOff } from '@material-ui/icons'

import useStyles from './styles'

import sally from '../../../images/sally.png'
import logo from '../../../images/logo.png'
import ellipse from '../../../images/ellipse.png'
import * as api from '../../../api/index'

const SignUp = ({ openSignUp, Close, setOpenSignUp }) => {
  const classes = useStyles()

  const [showPassword, setShowPassword] = useState(false)
  const [values, setValues] = useState({
    password: '',
    email: '',
    name: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await api.signup(values)
      //console.log("REGISTER", data.success);
      if (data.success === true) {
        toast('You have been register please login')
      }
    } catch (error) {
      toast(error.response.data.message)
    }
  }

  return (
    <>
      <Modal open={openSignUp} onClose={Close} className={classes.modal}>
        <Container className={classes.toplevel1}>
          <Grid container className={classes.toplevel2}>
            <Grid item md={5} className={classes.sublevel1}>
              <div className={classes.hide}>
                <img alt='logo' className={classes.logo} src={logo} />

                <Typography className={classes.text}>
                  Find all types of everyday items at your arms reach{' '}
                </Typography>

                <img className={classes.sally} alt='sally' src={sally} />
                <img className={classes.ellipse} alt='ellipse' src={ellipse} />
              </div>
            </Grid>

            <Grid item xs={12} md={7} className={classes.sublevel2}>
              <Box className={classes.boxExpand}>
                <Typography
                  component='h1'
                  variant='h5'
                  style={{ fontSize: '36px', fontWeight: 700 }}
                >
                  Create Account
                </Typography>

                <Box
                  component='form'
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{
                    px: 5,
                    mt: 3,
                  }}
                >
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='fullname'
                    label='Full Name'
                    variant='standard'
                    onChange={handleChange('name')}
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    variant='standard'
                    onChange={handleChange('email')}
                  />

                  <FormControl
                    required
                    fullWidth
                    margin='normal'
                    variant='standard'
                  >
                    <InputLabel htmlFor='adornment-password'>
                      Password
                    </InputLabel>
                    <Input
                      id='adornment-password'
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <Button
                    type='submit'
                    className={classes.submitButton}
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create Account
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </>
  )
}

export default SignUp
