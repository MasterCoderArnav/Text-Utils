import React from "react";

export default function Alert(props) {
  return (
    props.alert&&<div style={{height: '50px'}}>
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.mode?`Beware of the dark side the dark mode is enabled`:`Light is weak learn to know the dark side and the dark mode will be enabled`}</strong>
      </div>
    </div>
  );
}
