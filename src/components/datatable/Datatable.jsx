import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: 'none' }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        sx={{
          '.MuiTablePagination-displayedRows': {
            color: 'gray',
          },
          '.MuiButtonBase-root': { color: 'gray' },
        }}
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
