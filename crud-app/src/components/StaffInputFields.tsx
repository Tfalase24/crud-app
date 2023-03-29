import React, { FC } from 'react';
import { useState } from 'react';
import { DisplayEmail } from './DisplayEmail';

const StaffInputFields: FC = () => {
  const [staff, setStaff] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
  });

  function onChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    setStaff({ ...staff, firstName: e.target.value });
  }

  function onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    setStaff({ ...staff, lastName: e.target.value });
  }
  return (
    <div>
      <input
        value={staff.firstName}
        onChange={onChangeFirstName}
        placeholder="Enter your first name"
      ></input>
      <input
        value={staff.lastName}
        onChange={onChangeLastName}
        placeholder="Enter your last name"
      ></input>
      <DisplayEmail firstName={staff.firstName} lastName={staff.lastName} />
    </div>
  );
};

export default StaffInputFields;
