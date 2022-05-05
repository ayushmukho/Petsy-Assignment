import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  all: {
    overflow: 'hidden',
    marginBottom: '-150px',
  },
  top: {
    marginTop: '100px',
  },
  middle1: {
    marginTop: '250px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '-200px',
      height: '100%',
      marginLeft: '-50px',
    },
  },
  middle2: {
    marginTop: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1000px',
      marginLeft: '-500px',
    },
  },
  pot: {
    marginTop: '300px',
    marginLeft: '-100px'
  },

  pott:{
    marginLeft: '100px'
  },
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0px',
    marginLeft: '-500px',
  },
}))
