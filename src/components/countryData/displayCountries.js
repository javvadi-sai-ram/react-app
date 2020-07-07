import React from 'react'
import './countries.css'

import EachDisplayComponent from './EachDisplayComponent'
let list
class DisplayCountriesAll extends React.Component {
   fecthingData = () => {
      list = this.props.countriesData.map((item, i) => {
         return (
            <EachDisplayComponent
               key={item.name}
               item={item}
               data={this.props.countriesData}
            />
         )
      })

      return list
   }
   render() {
      return <div className='flexing'>{this.fecthingData()}</div>
   }
}
export default DisplayCountriesAll
