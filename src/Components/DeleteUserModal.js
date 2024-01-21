import React from "react";
import "./DeleteUserModal.css";
const DeleteUserModal = () => {
  return (
    <div classname="delete-user-modal-container">
      <div classname="delete-user-modal">
        <h3>Are you sure you want to delete this Expense?</h3>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default DeleteUserModal;
