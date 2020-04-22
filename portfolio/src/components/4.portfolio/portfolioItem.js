import React from 'react'

function Portfolio(props) {
    return (
                <div className="col s12 m4">
                    <div id='card_port' className="card blue-grey lighten-4 center-align">
                        <div className="card-image">
                            <a href={props.link} target='_blank' rel="noopener noreferrer" ><img alt={props.title} src={props.img}></img></a> 
                        </div>
                        <div className="card-content card_text">
                            <h4>{props.title}</h4>
                            <p>{props.techs}</p>
                        </div>
                    </div>
                </div>
    )
}

export default Portfolio