import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
const Single = () => {
  return (
    <div className="SingleTop">
      <div className="content">
        <img src='https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>  <img src={Edit}/></Link>
            <img src={Delete}/>
          </div>
        </div>
      </div>
      <div className="menu">

      </div>
    </div>
  )
}

export default Single
