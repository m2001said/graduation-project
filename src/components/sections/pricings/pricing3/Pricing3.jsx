import React from 'react'
import "./pricing3.css";
import whiteTick from "../../../../assets/images/images3/whiteTick.png";
import {plansData} from "../../projects/project3/data/plansData";
const Pricing3 = () => {
  return (
    <div className='plans-container3'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className='plans-header3' style={{gap:"2rem"}}>
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITHUS</span>
      </div>

          {/* plans-card */}
          <div className='plans3'>
            {
              plansData.map((plan,i)=>(
                <div className='plan3' key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span>$ {plan.price}</span>

                  <div className='features3'>
                    {plan.features.map((feature,i)=>(
                      <div className='feature3'>
                        <img src={whiteTick} alt=''/>
                        <span key={i}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <span>See more benefits</span>
                    </div>
                    <button className='btn'>Join now</button> 
                </div>
              ))}
          </div>
      
    </div>
  )
}
export default Pricing3