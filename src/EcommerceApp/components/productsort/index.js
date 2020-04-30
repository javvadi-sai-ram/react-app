import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";



      

class ProductSort extends React.Component{
    render(){
        return (
  <select onChange={this.props.ProductSortSize}>
    <option value="Select">Select</option>
    <option value="Ascending">Lowest to highest</option>
    <option value="Decending">Highest to lowest</option>
  </select>
      );
    }
}


export default ProductSort;