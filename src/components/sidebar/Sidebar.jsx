import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/">
        <span className="logo">Store</span>
      </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>
          <DashboardIcon className="icon"/>
          <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/users">
          <li>
            <AccountBoxIcon className="icon"/>
            <span>Users</span>
          </li>
        </Link>
        <Link to="/products">
          <li>
            <Inventory2Icon className="icon"/>
            <span>Products</span>
          </li>
        </Link>
        <li>
          <ShoppingCartCheckoutIcon className="icon"/>
          <span>Orders</span>
        </li>
        <p className="title">USER</p>
        <li>
          <InsertEmoticonIcon className="icon"/>
          <span>Profile</span>
        </li>
        <li>
          <LogoutIcon className="icon"/>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div>
  </div>
    
  )
}

export default Sidebar