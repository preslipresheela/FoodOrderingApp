import RestaurentCard from "./RestaurentCard";
import {resList} from "./utils/mockData";
import { useState } from "react";
const Body=()=>{
    const [restrntList,setRestrntList]=useState(resList);
    return(
      <div className="body">
        <div className="btn">
            <button id="filter_btn" className="filter_btn" onClick={()=>{
                let restrnts=resList.filter((res)=>(res.ratings>=4));
               setRestrntList(restrnts);
            }
            }>Top Rated Restaurents</button>
        
            <button id="all_btn" className="all_btn" onClick={()=>{
               setRestrntList(resList);
            }
            }>All</button>
        </div>
        <div className="res-container">
         {/* <RestaurentCard resData={resList[0]}></RestaurentCard>
          <RestaurentCard resData={resList[1]}></RestaurentCard>
          <RestaurentCard resData={resList[2]}></RestaurentCard>
    */}
    {
      restrntList.map((res,index)=>(
        <RestaurentCard resData={res} key={index}></RestaurentCard>
      ))
    }
        </div>
      </div>
    )
  };
  export default Body;