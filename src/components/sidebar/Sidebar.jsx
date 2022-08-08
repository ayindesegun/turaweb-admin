import React from 'react'
import './sidebar.scss'
import logo from '../../assets/images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import FilterFramesIcon from '@mui/icons-material/FilterFrames'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/'>
          <img className='logo' src={logo} alt="Tura's Logo" />
          {''}
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/product' style={{ textDecoration: 'none' }}>
            <li>
              <Inventory2Icon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <FilterFramesIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICES</p>
          <li>
            <HealthAndSafetyIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USERS</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colourOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colourOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
