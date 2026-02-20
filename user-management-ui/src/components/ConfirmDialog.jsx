import React from "react";

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <p>{message}</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}