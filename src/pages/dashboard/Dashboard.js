import React from 'react';
import firebase from '../../firebase/firebase';
import { useStyles } from './DashboardStyles';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Search from '../search/Search';
import Boards from '../boards/Boards';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Header from '../../components/header/Header';
import { useGridItems } from './useGridItems';
import CardContext from './cardContext';
import validateSearch from '../../utils/form-validation/validateSearch';
import { SlideTransition } from '../../animations/SlideTransition';

export default function Dashboard() {
  const classes = useStyles();
  const [paginate, setPaginate] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('guns');
  const [singleViewData, setSingleViewData] = React.useState(null);
  const [page, setPage] = React.useState('search');
  const [state, setState] = React.useState({
    open: false,
    message: '',
    transition: SlideTransition,
  });

  const {
    handleOnChange,
    handleOnSubmit,
    values,
    formErrors,
    setFormErrors,
  } = useForm({ search: '' }, validateSearch, authorize);

  const params = {
    query: values.search || searchTerm,
    page: paginate,
    per_page: 30,
    client_id: process.env.UNSPLASH_ACCESS_KEY,
  };

  const { data, updateParams, fetchErrors, setFetchErrors } = useFetch(
    'https://api.unsplash.com/search/photos?',
    params
  );

  const addPinToBoard = async () => {
    if (singleViewData) {
      await firebase.db.collection('boards').add(singleViewData);
      setState({
        ...state,
        open: true,
        message: 'added to boards collection',
      });
    }
  };

  // handles closing the snackbar
  const handleClose = React.useCallback(
    (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setState({
        ...state,
        open: false,
      });
    },
    [setState]
  );

  function authorize() {
    setFetchErrors(null);
    setFormErrors(null);
    setPaginate(1);
    setSearchTerm(values?.search);
    updateParams(params);
  }

  React.useEffect(() => {
    addPinToBoard();
  }, [singleViewData]);

  const items = useGridItems(data.results);

  return (
    <React.Fragment>
      <CardContext.Provider value={{ setSingleViewData, addPinToBoard }}>
        {fetchErrors && (
          <Alert
            className={classes.alert}
            variant="filled"
            severity="error"
            onClose={() => setFetchErrors(null)}
          >
            {fetchErrors}
          </Alert>
        )}
        {formErrors?.search && (
          <Alert
            className={classes.alert}
            variant="filled"
            severity="error"
            onClose={() => setFormErrors(null)}
          >
            {formErrors?.search}
          </Alert>
        )}
        <Header
          page={page}
          setPage={setPage}
          search={values?.search}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
        />
        <div className={classes.dashboard}>
          {page === 'search' && data.results?.length > 0 && (
            <Search
              totalPages={data.total_pages}
              paginate={paginate}
              // handleChange={handleChangePagination}
              searchTerm={searchTerm}
              items={items}
              setPaginate={setPaginate}
              updateParams={updateParams}
              params={params}
            />
          )}

          {page === 'boards' && <Boards />}

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={state.open}
            onClose={handleClose}
            autoHideDuration={3000}
            message={state.message}
            TransitionComponent={state.transition}
          />
        </div>
      </CardContext.Provider>
    </React.Fragment>
  );
}
