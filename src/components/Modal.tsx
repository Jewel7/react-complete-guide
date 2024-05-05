import classes from "./Modal.module.css";

//you could pass the props as an object or define each individual props surrounded by {}
// ex... props could also be {children} using object destructuring to directly access the specific value

// add the special "open" attribute to the dialog element to make it visible
// if you add no value to the open attribute, it will be true
function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}

export default Modal;
