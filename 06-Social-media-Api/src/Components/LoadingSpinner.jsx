import React from "react";

export const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center mt-5">
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
