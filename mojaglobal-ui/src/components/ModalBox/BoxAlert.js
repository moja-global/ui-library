import store from "../store/store";
import { v4 as uuid } from "uuid";
import success from "../assets/success.gif";
import error from "../assets/error.gif";
import info from "../assets/info.gif";
import warning from "../assets/warning.gif";

export function useBoxAlert(passed) {
  passed.id = uuid();
  if (passed.type == "success") {
    passed.color = "green";
    passed.src = success;
  } else if (passed.type == "error") {
    passed.color = "red";
    passed.src = error;
  } else if (passed.type == "info") {
    passed.color = "blue";
    passed.src = info;
  } else if (passed.type == "warning") {
    passed.color = "yellow";
    passed.src = warning;
  }

  store.commit("addAlert", passed);
}
