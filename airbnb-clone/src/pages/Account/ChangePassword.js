import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';

function ChangePassword(props) {
  const url = `${window.apiHost}/change-password`;
  const data = {
    token: props.token,
  };
  console.log(data);
  const changePassword = async () => {
    const resp = await axios.post(url, data.token);
  };

  return (
    <div>
      <h1>change password</h1>
    </div>
  );
}

export default ChangePassword;
