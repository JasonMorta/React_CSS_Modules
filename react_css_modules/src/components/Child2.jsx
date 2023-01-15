import React from 'react'
import css from './Child2.module.css'

export default function Child2() {
  return (
    <div>    
     <container class={css.box_container}>
        <div class={css.box_container_inner}>
          <h1>Child 2</h1>
          <p>A CSS Module is <b>a CSS file in which all class names and animation names are scoped locally by default</b>. CSS Modules let you write styles in CSS files but consume them as JavaScript objects for additional processing and safety. CSS Modules are very popular because they automatically make class and animation names unique so you don't have to worry about selector name collisions.
          </p>
          <a href="https://www.gatsbyjs.com/docs/how-to/styling/css-modules/#:~:text=A%20CSS%20Module%20is%20a,for%20additional%20processing%20and%20safety." target="_blank" rel="noreferrer">Source: Read more</a>
        </div>
      </container></div>
  )
}
