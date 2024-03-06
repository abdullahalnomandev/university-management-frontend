import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const ManageFacultyPage = () => {
    return (
      <div>
        <h1>Faculty List</h1>
        <Link href="/super_admin/manage-faculty/create">
          <Button type="primary">Create </Button>
        </Link>
      </div>
    );
};

export default ManageFacultyPage;