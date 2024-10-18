import React from 'react'
import "../dogEventPage/DogEventsPage.css"


const DogEventsPage = () => {
  return (
    <div className="container">
      <div className="header">Paw-Community Events</div>
        <div className="boxcontainer">
          <div className="ad-box1">
            <div className="ad-placeholder"><img src="../../../images/fakeadvert1.png" alt = "dog walk event ad" height= "350px" width = "auto"></img> </div>
          </div>
          <div className="ad-box2">
            <div className="ad-placeholder"><img src="../../../images/fakeadvert2.png" alt = "dog market event ad" height= "350px" width="auto"></img> </div>
          </div>
          <div className="ad-box3">
            <div className="ad-placeholder"><img src="../../../images/fakeadvert3.png" alt = "puppy training event ad" height= "350px" width="auto"></img></div>
          </div>
        </div>
      <div className="description">
        <p>Our community events bring everyone together by fostering relationships, sharing resources, and creating a sense of belonging. Whether you're participating in fun activities or simply enjoying the company of others, we strive to make everyone feel welcome and connected.</p>
      </div>
    </div>
  )
}

export default DogEventsPage;