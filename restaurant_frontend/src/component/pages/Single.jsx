import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
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
            <Link to={`/write?edit=2`}>  <img src={Edit} /></Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea et soluta, possimus, ab officia voluptates nisi natus rem unde quia. Impedit, officia.
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ut in reiciendis cupiditate rem laborum similique doloribus voluptate voluptas quis enim, atque molestiae. Ipsam magni labore vero assumenda amet dolore aliquid voluptate asperiores incidunt ea accusantium, commodi vitae voluptas nam voluptatum perspiciatis nemo omnis quam consectetur dolores, obcaecati repellat aliquam.<br />
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus magnam quis assumenda asperiores? Perferendis sed autem, voluptatibus veritatis sint iure optio placeat officia, cum fuga illum commodi inventore? Quidem, quos nulla eaque tempora tempore nihil!</p></p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
