import React from 'react';
import { FcGoogle } from "react-icons/fc";
function Button(props) {
    console.log(props);
  return (

      <button className='btn btn-warning text-white'>
        <FcGoogle />
      Login with Google</button>

  );
}
export default Button;
