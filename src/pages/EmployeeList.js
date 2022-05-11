import React, {Suspense} from 'react';


const EmployeeTable = React.lazy(() => import('../components/employeeTable/EmployeeTable'));

export const EmployeeList = () => {
  return (

<Suspense fallback={<div>LOADING ...</div>}>
      <EmployeeTable /> 
</Suspense> 
  );
};