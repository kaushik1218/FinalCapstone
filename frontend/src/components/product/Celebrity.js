import React from 'react'
import { Link } from 'react-router-dom'
const Celebrity = ({ homes }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                            <div className="card p-3 rounded">
                             <img
                                 className="card-img-top mx-auto"
                                 src={homes.images[0].url}
                             />
                             <div className="card-body d-flex flex-column">
                                 <h5 className="card-title">
                                     <Link to={`/celebrity/${homes.celebid}`}>{homes.name}</Link>
                                 </h5>
                             </div>
                         </div>
                     </div>
    )
}

export default Celebrity
