import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

//you could pass the props as an object or define each individual props surrounded by {}
// ex... props could also be {children} using object destructuring to directly access the specific value

// add the special "open" attribute to the dialog element to make it visible
// if you add no value to the open attribute, it will be true
function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate to the parent route (the route above this route), making this modal more dynamic
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
