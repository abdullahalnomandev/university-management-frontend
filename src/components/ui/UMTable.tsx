"use client";
import { Table } from "antd";
import React from "react";

interface UMTableProps {
  columns: any;
  loading?: boolean;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  onPaginationChange?: (page: number, pageSize: number) => void;
  showPagination?: boolean;
}
const UMTable: React.FC<UMTableProps> = ({
  columns,
  loading = false,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger,
  onTableChange,
  onPaginationChange,
  showPagination = true
}) => {
  const paginationConfig = showPagination
    ? {
        pageSize,
        total: totalPages,
        // pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange
      }
    : false;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
