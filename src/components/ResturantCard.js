import { CARD_URL } from "../utils/constants";

const ResturantCard = ({resData})=>{
    return(
        <div className="card" >
            <img className="card-image" src={CARD_URL + resData.info.cloudinaryImageId} alt="PizzaHut" />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}

export default ResturantCard;