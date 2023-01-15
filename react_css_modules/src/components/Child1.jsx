import React from 'react'
import css from  './Child1.module.css'

//Add .module to the CSS fileName.

export default function Child1() {
  return (
    <div>    
     <container class={css.box_container}>
        <div class={css.box_container_inner}>
          <h1>Child 1</h1>
          <h2>Adding CSS modules:</h2>

          <ol>
            <li>Rename the CSS file from <b>myStyles.css</b> to <b>myStyles.module.css</b></li>
            <li>Change the CSS import to: <b>import css(<i>any name</i>) from  './myStyles.module.css'</b></li>
            <br />
            <li>Change all classNames from: <b>className="btn"</b> to <b>className={'{css.btn}'}</b></li>
            <li>If CSS names had dashes(-) / is not allowed, change them to underscores(_)</li>
          </ol>
        </div>
      </container>
    </div>
  )
}
