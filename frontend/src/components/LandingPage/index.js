import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Background from './Background/Background'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import './styles.css'

const useStyles = makeStyles({
  cat: {
    fontSize: '42px',
    marginTop: '100px',
  },

  title: {
    marginLeft: '50px',
  },

  title2: {
    fontSize: '16px',
    marginBottom: '60px',
    marginLeft: '50px',
  },
})
export default function Index() {
  const classes = useStyles()
  const history = useHistory();

  return (
    <div>
      <Navbar />
      <Background />
      <Typography
        className={classes.title2}
        variant='body2'
        color='textSecondary'
        component='p'
      >
        <Button onClick={() => history.push('/categories')} class="button-36">
          {' '}
          CLICK HERE TO VIEW ALL THE PETS AVAILABLE{' '}
        </Button>
      </Typography>
      <Footer />
    </div>
  )
}
