import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { LazyGroup } from 'react-lazy'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import DisplayMoreDetails from './DisplayMoreDetails'

@observer
class EachDisplayComponent extends Component {
   @observable isDetailsAvaliable = false
   @observable isShowMoreDetails = false
   countryCard = event => {
      this.props.history.push({
         pathname: '/goToCountryCard',
         state: event,
         countries: this.props.countriesData
      })
   }

   setDetails = () => {
      if (this.isDetailsAvaliable === false) {
         this.isDetailsAvaliable = true
      } else {
         this.isDetailsAvaliable = false
      }
   }

   showMoreDetails = () => {
      if (this.isShowMoreDetails === false) {
         this.isShowMoreDetails = true
      } else {
         this.isShowMoreDetails = false
      }
   }

   render() {
      const { item } = this.props

      return (
         <div>
            <div
               className='each-country'
               onMouseEnter={this.setDetails}
               onMouseLeave={this.setDetails}
            >
               <div
                  id={item.name}
                  value={item.name}
                  onClick={() => this.countryCard(item)}
               >
                  <LazyGroup>
                     <img src={item.flag} alt='hddj' className='sizing-Width' />
                  </LazyGroup>
                  <div className='country-details'>
                     <h6 className='letter-sizing-country'>
                        <b>{item.name}</b>
                     </h6>
                     <p>
                        <b>Population:</b> {item.population}
                     </p>
                     <p>
                        <b>Region:</b> {item.region}
                     </p>
                     <p>
                        <b>Capital:</b> {item.capital}
                     </p>
                  </div>
               </div>
               <button
                  style={{ border: '1px solid gray' }}
                  onClick={this.showMoreDetails}
               >
                  {this.isDetailsAvaliable ? 'Details' : null}
               </button>
            </div>
            <div className={this.isShowMoreDetails ? 'play' : null}>
               {this.isShowMoreDetails ? <DisplayMoreDetails /> : null}
            </div>
         </div>
      )
   }
}

export default withRouter(EachDisplayComponent)
