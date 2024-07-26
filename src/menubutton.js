import React from 'react';

function MenuButton({onclick, children }) {
    console.log(onclick,childern)
  return (
    <select class="form-select form-select-lg mb-3" aria-label="Large select example">
      {children}
    </select>
  );
}

export default MenuButton;