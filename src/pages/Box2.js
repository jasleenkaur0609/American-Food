import React from 'react'

export default function Box2() {
  return (
    <div>

        <div className="box2">
          <div>
        <h1>AMERICAN FOOD</h1>
    <h2>The Best Taste Food</h2>
    <hr />
    <p>
    Begin with a warm and inviting welcome message
      <br />
      to visitors. Set the tone for your website by 
      <br />
      American culinary delights.
    </p>
    <input className="order" type="button" defaultValue="order now" />
    <input className="arrow" type="button" defaultValue="" />
    </div>
    <img src="assets/images/foods.png" alt="" className="food" />
  </div>
    </div>
  )
}
