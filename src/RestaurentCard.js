import {CMN_RESTRNT_URL} from "./utils/constants"
const RestaurentCard=(props)=>{
    const {resData}=props;
    const {resName,cuisine,ratings}=resData;
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
         <img alt="res-logo" className="res-logo" src={CMN_RESTRNT_URL}></img>
         <h3>{resName}</h3>
         <h3>{cuisine.join(",")}</h3>
         <h4>{ratings+" stars"}</h4>
      </div>
    )
  };
  export default RestaurentCard;