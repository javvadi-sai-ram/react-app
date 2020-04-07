import React from "react"
import {
  
  Link
} from "react-router-dom";



class Home extends React.Component {        
    render() {
        return(
            <div>
                <nav>
          <ul>
            <li>
              <Link to="/Carlist">CarsList App</Link>
            </li>
            <li>
              <Link to="/todo">Todos App</Link>
            </li>
            <li>
              <Link to="/forms">forms App</Link>
            </li>
            <li>
              <Link to="/countrydashBoardApp">Country App</Link>
            </li>
          </ul>
        </nav>

            </div>
        )
    }
}

export {Home}