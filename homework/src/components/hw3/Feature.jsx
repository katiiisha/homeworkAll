import React from 'react'
import image from './image.jpg'
import s from './InputForm.module.css'
import { Row } from 'react-bootstrap'
function Feature() {
    const [places, setPlaces] = React.useState('col-md-7');
    function  swapPlaces() {
        places === 'col-md-7' ? setPlaces('col-md-7 order-1') : setPlaces('col-md-7')
    }
    return (
      <div className={s.feature}>
        <Row className={s.row_feature} >
         <div  className={places}  >
            <h2>Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
         </div>
            <div className='col-md-5'>
                <img src={image} alt="" class="img-fluid mx-auto"/>
                
        </div>
        </Row>
            <button className={s.btn_swap} onClick={swapPlaces}>Swap places</button>
        </div>
   
  )
}

export default Feature