import './CardProduct.css'
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const CardProduct = (props) => {
  const profile = props.profile
  const { Meta } = Card;

  return (

    <Card className="cardStyle"
      hoverable
      style={{ width: 180 }}
      cover={<img src={profile.photo_url} alt=""></img>}
    >
      <Meta classeName="title" title= {profile.product} />
      <Meta title= {profile.brand} />
      <Meta title= {profile.category} />
      
    </Card>

    /*<div className="github-profile">
      <img src={profile.avatar_url} alt=""></img>
      <div className="info">
        <div className="name">Name: {profile.name}</div>
        <div className="userName">User: {profile.login}</div>
        <div className="company">Company: {profile.company}</div>
      </div>
    </div>*/
  );
}

export default CardProduct