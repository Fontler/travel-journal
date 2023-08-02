import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Card.scss'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} />
            <div className="card-info">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#f55a5a"}} />
                <span className="card-location">{props.location}</span>
                <a href={props.googleMapsUrl} className="maps-link">
                    View on Google Maps
                </a>
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-date">
                    {props.startDate} - {props.endDate}
                </h3>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}