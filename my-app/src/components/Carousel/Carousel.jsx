import React , {useState} from 'react'
import { Carousel } from 'antd';
//import { LeftCircleTwoTone , RightCircleTwoTone } from '@ant-design/icons'
import gardenImages from './GardenImages'
//import armadoImages from './ArmadoImages'
import './Carousel.css'
import RadioGalery from '../Radio/Radio'
import MyDropDown from '../DropDown/DropDown'

function onChange(a, b, c) {
  // console.log('carousel onchange=>',a, b, c);
}

const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#fff ',
};

const imageStyle ={
  width:'420px' ,  
  height:'420px' , 
  marginTop:'10px' , 
  marginLeft:'auto', 
  marginRight:'auto', 
  padding:'2px' 
}

const MyCarousel = () => {
    const [galeryImages , setGaleryImages]= useState(gardenImages)
      
  return (
  <div>
    <MyDropDown  galeryImages={galeryImages} setGaleryImages={setGaleryImages} />
    <Carousel afterChange={onChange} 
      effect="fade" //esto hace que pase como apagandose...
      autoplay 
      dotPosition="bottom"
      //arrows nextArrow={<RightCircleTwoTone  twoToneColor="#666600" />} 
      //prevArrow={<LeftCircleTwoTone twoToneColor="#666600" />}
      >
      {galeryImages.map( (imagen , index) => {
          //console.log('imagen',imagen , 'index', index)
          return(
          <div>
            <h3 style={contentStyle}> 
              <img  src={imagen} alt={""} style ={imageStyle}/>
            </h3>
          </div>
          )
      } )}
      </Carousel>
    </div>
  );
}

export default MyCarousel