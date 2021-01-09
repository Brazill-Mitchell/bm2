import React, { useRef, useEffect } from "react";

function Test() {
  const refTest = useRef(null);
    useEffect(()=>{
      console.log(refTest.current)
    })

  return <div ref={refTest}>Test</div>;
}

export default Test