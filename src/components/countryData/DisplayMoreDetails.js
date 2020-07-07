import React, { Component } from 'react'

class DisplayMoreDetails extends Component {
   render() {
      return (
         <div>
            <video width='80%' height='50%' controls autoPlay>
               <source
                  src='https://cdn.bitdegree.org/learn/Pexels%20Videos%203373.mp4?raw=true'
                  type='video/mp4'
               ></source>
               <source
                  src='https://cdn.bitdegree.org/learn/Pexels%20Videos%204754.ogg?raw=true'
                  type='video/ogg'
               ></source>
            </video>
         </div>
      )
   }
}

export default DisplayMoreDetails
