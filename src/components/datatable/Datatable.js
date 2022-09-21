import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../request";
import { Visibility } from "@material-ui/icons";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
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

  const [ users, setUsers] = useState([]);

  useEffect(()=> {
    const fetchUsers = async() => {
      try {
      const res = await userRequest.get("users/all")
      setUsers(res.data)
    } catch {}
    };
    fetchUsers();
  }, []);



  console.log(users);

  return (
    <div className="usersContainer">
      <span className="usersTitle"> Registered Users </span>
      <div className="usersGrid">
        {users.map((user) => (
          <div className="usersFlex">
          <div className="usersInformations" key={user._id}>
            <p> {user._id.substring(1,8)} </p>
            <img
              src={
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              className="usersImg"
            />
            <div className="usersName">
              <span className="username">{user.username}</span>
            </div>
            <div className="usersButtons">
            <Button className="usersShow" variant="outlined" startIcon={<Visibility />}>
              Show
            </Button>
            <Button className="usersDelete" variant="contained" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datatable;
