import Modal from "@mui/material/Modal";

import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/Store";
import UserForm from "./UserForm";
import NetworkForm from "./NetworkForm";

const ModalBackdrop = ({ createForm = false, editForm = false, id = 0 }) => {
  const userForm = useSelector((state) => state.form.userForm);
  const networkForm = useSelector((state) => state.form.networkForm);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(formActions.closeUserForm());
    dispatch(formActions.closeNetworkForm());
  };

  return (
    <>
      {userForm && (
        <Modal open={userForm} onClose={handleClose}>
          <UserForm createForm={createForm} editForm={editForm} id={id} />
        </Modal>
      )}
      {networkForm && (
        <Modal open={networkForm} onClose={handleClose}>
          <NetworkForm createForm={createForm} editForm={editForm} id={id} />
        </Modal>
      )}
    </>
  );
};

export default ModalBackdrop;
