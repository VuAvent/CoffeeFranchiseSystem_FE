import axios from "axios";
import { setAuthHeaders } from "../../utils/index";

const headers = setAuthHeaders();

export const loadEmployees = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_HOST}/employee/all`, setAuthHeaders())
      .then((res) => {
        dispatch({
          type: "GET_EMPLOYEES",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const loadEmployeeById = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_HOST}/employee/` + id, setAuthHeaders())
      .then((res) => {
        dispatch({
          type: "GET_EMPLOYEE_BY_ID",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const createEmployee = (
  username,
  name,
  gender,
  birth,
  phone,
  address,
  branchId,
  roleId,
  avatar
) => {
  return function (dispatch) {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/employee`,
        {
          username,
          name,
          gender,
          birth,
          phone,
          address,
          branchId,
          roleId,
          avatar,
        },
        headers
      )
      .then((res) => {
        dispatch({
          type: "CREATE_EMPLOYEE",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const updateEmployee = (
  id,
  username,
  name,
  gender,
  birth,
  phone,
  address,
  branchId,
  roleId,
  avatar
) => {
  return function (dispatch) {
    axios
      .put(
        `${process.env.REACT_APP_HOST}/employee/` + id,
        {
          username,
          name,
          gender,
          birth,
          phone,
          address,
          branchId,
          roleId,
          avatar,
        },
        headers
      )
      .then((res) => {
        dispatch({
          type: "UPDATE_EMPLOYEE",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const disableEmployees = (id) => {
  return function (dispatch) {
    axios
      .post(
        `${process.env.REACT_APP_HOST}/employee/disable/` + id,
        setAuthHeaders()
      )
      .then((res) => {
        dispatch({
          type: "DISABLE_EMPLOYEES",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};
