import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../features/userRedux";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logoutSuccess())
      window.location.replace('/login');
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> CitiBike</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div className="space1"> 
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span> Analytics</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <MarkEmailUnreadIcon className="icon" />
            <span>Messages</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          </div>
      
          </ul>
          <div className="bottom">
          <ul>
            <li>
          <ExitToAppIcon className="icon" onClick={handleLogout} />
            <span>Logout</span>
            </li>
          </ul>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
