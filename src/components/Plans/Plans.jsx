import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

export default function Plans() {
  return (
    <div className="plans-container">
      <div className="blur blur-plan-1"></div>
      <div className="blur blur-plan-2"></div>
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
                {plan.features.map((feature, i)=>(
                    <div className="feature">
                        <img src={whiteTick} alt="" />
                        <span key={i}>{feature}</span>
                    </div>
                ))}
            </div>

            <div>
                <span>See more benefits -> </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
