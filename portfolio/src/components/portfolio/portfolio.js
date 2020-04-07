import React from 'react'

function Portfolio(props) {
    return (
                <div className="col s12 m4">
                    <div id='card_port' className="card blue-grey lighten-4">
                        <div className="card-image center-align">
                            <a target='_blank' rel="noopener noreferrer" href={props.link}><img alt={props.title} src={props.img}></img></a> 
                        </div>
                        <div className="card-content">
                            <h4>{props.title}</h4>
                            <p>{props.techs}</p>
                        </div>
                    </div>
                </div>
    )
}

export default Portfolio