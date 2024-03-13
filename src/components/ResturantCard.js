import { CARD_URL } from "../utils/constants";

const ResturantCard = ({resData})=>{
    return(
        <div className="card h-[330px] w-72 bg-gray-100" >
            <img className="card-image w-72 h-40 rounded-md" src={CARD_URL + resData.info.cloudinaryImageId} alt="PizzaHut" />
            <h3 className="font-bold text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
}


export const promotedCard = (ResturantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-[5px] w-[75px]">Promoted</label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;