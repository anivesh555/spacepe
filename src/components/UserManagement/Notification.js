import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (props) => {
  const dispatch = useDispatch();
  const { status } = props;
  const { title } = props;
  const { message } = props;

  if (status === "success") {
    if(title){
      toast.success(
      <>
      <div>{title}</div>
      <div>{message}</div>
    </>, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    else
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  useEffect(() => {
    let isCancelled = false;
    const handleChange = async () => {
      if (!isCancelled) {
        dispatch(uiActions.closeNotification());
      }
    };
    setTimeout(handleChange, 5000);
    return () => {
      isCancelled = true;
    };
  }, [dispatch]);

  return (
    <div>
      <ToastContainer autoClose={3000} limit={1} hideProgressBar />
    </div>
  );
};

export default Notification;
