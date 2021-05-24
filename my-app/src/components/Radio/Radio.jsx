import React , {useState} from 'react'
import { Radio } from 'antd';
import gardenImages from '../Carousel/GardenImages'
import armadoImages from '../Carousel/ArmadoImages'
import './Radio.css'

const RadioGalery = ({galeryImages, setGaleryImages}) => {
  const [value, setValue] = useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    if (e.target.value === 1 ) {
        setGaleryImages(gardenImages)
    } else {setGaleryImages(armadoImages)}
    
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Jardines</Radio>
      <Radio value={2}>Armado</Radio>
    </Radio.Group>
  );
};

export default RadioGalery