import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import React from 'react';

const CreateDepartmentPage = () => {
    return (
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `super_admin`,
              link: `/super_admin`
            },
            {
              label: `department`,
              link: `/super_admin/management/department`
            }
          ]}
        />
        <h1>Create User</h1>
      </div>
    );
};

export default CreateDepartmentPage;