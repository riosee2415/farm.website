import { all, fork } from "redux-saga/effects";
import testSaga from "./test";
//
import axios from "axios";
// import backURL from "../config/config";

// axios.defaults.baseURL = backURL;
// axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(testSaga)]);
}
