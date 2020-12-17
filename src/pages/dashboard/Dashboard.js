import React from "react";
import firebase from "../../firebase/firebase";
import { useStyles } from "./DashboardStyles";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

import Search from "../search/Search";
import Boards from "../boards/Boards";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Header from "../../components/header/Header";
import { useGridItems } from "./useGridItems";
import CardContext from "./cardContext";
import validateSearch from "../../utils/form-validation/validateSearch";

const SlideTransition = props => {
  return <Slide {...props} direction="up" />;
};

export default function Dashboard() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
    message: "",
    transition: SlideTransition,
  });

  // handles opening the snackbar
  const handleOpen = React.useCallback(
    transition => {
      setState({
        open: true,
        transition,
      });
    },
    [setState]
  );

  // handles closing the snackbar
  const handleClose = React.useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setState({
        ...state,
        open: false,
      });
    },
    [setState]
  );

  // const addPinToBoard = async () => {
  // 	if (singleViewData) {
  // 		await firebase.db.collection('boards').add(singleViewData);
  // 		setPage('home');
  // 	}
  // };

  const {
    handleOnChange,
    handleOnSubmit,
    values,
    formErrors,
    setFormErrors,
  } = useForm({ search: "" }, validateSearch, authorize);
  const [paginate, setPaginate] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState("guns");

  const params = {
    query: values.search || searchTerm,
    page: paginate,
    per_page: 30,
    client_id: process.env.UNSPLASH_ACCESS_KEY,
  };

  const handleChangePagination = (event, value) => {
    setPaginate(value);
    updateParams(params);
  };

  const { data, updateParams, fetchErrors, setFetchErrors } = useFetch(
    "https://api.unsplash.com/search/photos?",
    params
  );

  const [singleViewData, setSingleViewData] = React.useState(null);
  const [page, setPage] = React.useState("search");

  function authorize() {
    setFetchErrors(null);
    setFormErrors(null);
    setSearchTerm(values?.search);
    updateParams(params);
  }

  const items = useGridItems(data.results);

  return (
    <React.Fragment>
      <CardContext.Provider value={{ setSingleViewData }}>
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
          {page === "search" && data.results?.length > 0 && (
            <Search
              totalPages={data.total_pages}
              paginate={paginate}
              handleChange={handleChangePagination}
              searchTerm={searchTerm}
              items={items}
            />
          )}

          {page === "boards" && <Boards />}

          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={state.open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={state.message}
            TransitionComponent={state.transition}
          />
        </div>
      </CardContext.Provider>
    </React.Fragment>
  );
}
