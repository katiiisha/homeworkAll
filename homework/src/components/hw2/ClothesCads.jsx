import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import s from './ClothesCads.module.css'
function ClothesCads() {
    const clothes = [
        { id: 0, type: 'T-shirt', price: '1000', content: 'lorem lorem lorem', text: 'buy' },
        { id: 1, type: 'Dress', price: '200', content: 'lorem lorem lorem', text: 'buy' },
        { id: 1, type: 'Skirt', price: '1500', content: 'lorem lorem lorem', text: 'buy'},
    ]
  return (
      <>
          <div className={s.ClothesCads}>
            {clothes.map((elem) => (
                <Card styles='mb-4 box-shadow' className={s.mine} >
                    <div class="card-header">        
                        <h4 class="my-0 font-weight-normal">{elem.type}</h4>
                    </div>

                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">{elem.price }<small class="text-muted">/ rub</small></h1>
                    <div class="mt-3 mb-4">{ elem.content}</div>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">{elem.text}</button>
                    </div   >
              </Card>
            ))}
          </div>
        
          <button><Link to="/">Back</Link></button>
          
    </>
  )
}

export default ClothesCads