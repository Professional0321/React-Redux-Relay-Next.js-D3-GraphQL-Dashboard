import { withStyles } from "@material-ui/core/styles";
import { usersOperations, usersSelectors } from "./state";
import connectForm from "../app/forms/connectForm";
import EditUserModalComponent, { styles } from "./EditUserModal";

const mapStateToProps = state => {
  return {
    currentId: usersSelectors.getEditModalUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(usersOperations.hideEditModal()),
    onCreate: (name, email, password, isAdmin) =>
      dispatch(usersOperations.create({ name, email, password, isAdmin })),
    onEdit: (id, name, email, password, isAdmin) =>
      dispatch(
        usersOperations.edit({
          id,
          name,
          email,
          password,
          isAdmin
        })
      )
  };
};

const EditUserModal = withStyles(styles)(
  connectForm(EditUserModalComponent, mapStateToProps, mapDispatchToProps)
);

export default EditUserModal;
