import React from "react"

import Container from "../components/container"
import * as styles from "../components/about-css-modules.module.css"
import vettel6 from "../components/vettel6.jpg"


const User = props => (
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Scott J"
        avatar={vettel6}
        excerpt="Developer at Chattanooga Market Solutions"
      />
    </Container>
  )
}

