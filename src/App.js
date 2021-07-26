import React, {useState} from 'react';
import logo from './images/logo.png'

export default function App() {

  function handleChange(e) {
    setDaily((e.target.value / 100 * 0.714).toFixed(2));
  }
  const [dailyProfit, setDaily] = useState(0.00);
  return (
    <>
    <div className="wrapper">
      <div className="main">
        <img className="logo" src={logo} alt="logo"/>
        <input type="number" name="profits" min="0" onChange={handleChange} />
        <p>€{dailyProfit} daily</p>
        <p>~€{(dailyProfit * 30).toFixed(2)} per month</p>
        <p>€{(dailyProfit * 365).toFixed(2)} per year</p>
        <small>based on 0.714% daily interest</small>
        <small>made by <a href="https://github.com/gabacode" target="_blank" rel="noreferrer">@gabacode</a></small>
      </div>
    </div>
    </>
  );
}