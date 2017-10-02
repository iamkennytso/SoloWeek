import React from 'react';

const Blink = (props) => {
  var type = props.type  
  console.log(type)
  return (
      <div id="blink" style = {{ 'animationName': type }}
      ></div>
  )
}

export default Blink;