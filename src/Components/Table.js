import React from "react";
import "./Table.css";
import { useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
const Table = ({ userRows, userColumns }) => {
  const actionColumn = [
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 120,
    //   renderCell: () => {
    //     return (
    //       <div className="cellAction">
    //         <div className="viewButton">Edit</div>
    //         <div className="deleteButton">Delete</div>
    //       </div>
    //     );
    //   },
    // },
  ];
  // console.log(userRows);
  return (
    <DataGrid
      className="table-grid"
      rows={userRows}
      columns={userColumns.concat(actionColumn)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};

export default Table;
