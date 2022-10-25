import React from "react";

const Loading = ({marginTop,marginBottom}) => {
  return (
    <div style={{display:'grid', placeContent:'center', marginTop:marginTop, marginBottom:marginBottom}}>
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
