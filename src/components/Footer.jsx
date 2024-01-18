
import { Typography } from '@material-ui/core'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a target="_blank" rel="noreferrer" href="https://aldizh.github.io/e_commerce">
        Commerce Shop&nbsp;
      </a>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => (
  <footer style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
    <Typography variant="h6" align="center" gutterBottom>
      Thank you for visiting
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      * Sample items for sale. This is just a mock store.    </Typography>
    <Copyright />
  </footer>
)

export default Footer