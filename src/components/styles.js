import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  productsContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 56,
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    flexGrow: 1,
  },
}));