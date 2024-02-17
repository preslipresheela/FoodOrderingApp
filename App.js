import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));
const resList=[{
  resName:"ABC",
  cuisine:["Biriyani","SouthIndian","NorthIndian"],
  ratings:4
},
  {
    resName:"DEF",
  cuisine:["Biriyani","SouthIndian","NorthIndian"],
  ratings:4.1
  },
  {
    resName:"GHI",
  cuisine:["Idly","Dosa","Vada"],
  ratings:4.5
  }
];
//root.render(parent);
const Header=()=>{
  return(
    <div className="header">
      <div className="logo">
        <img className="logoImg" src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};
const RestaurentCard=(props)=>{
  const {resData}=props;
  const {resName,cuisine,ratings}=resData;
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
       <img alt="res-logo" className="res-logo" src="https://media-cdn.tripadvisor.com/media/photo-s/15/ef/7f/90/daryabadi-biryani.jpg"></img>
       <h3>{resName}</h3>
       <h3>{cuisine.join(",")}</h3>
       <h4>{ratings+" stars"}</h4>
    </div>
  )
}

const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {/* <RestaurentCard resData={resList[0]}></RestaurentCard>
        <RestaurentCard resData={resList[1]}></RestaurentCard>
        <RestaurentCard resData={resList[2]}></RestaurentCard>
  */}
  {
    resList.map((res,index)=>(
      <RestaurentCard resData={res} key={index}></RestaurentCard>
    ))
  }
      </div>
    </div>
  )
}
const AppLayout=()=>{
  return(
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  )
}

root.render(<AppLayout/>);