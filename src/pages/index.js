import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return <div style={{color: `red`, fontSize: `50px`}}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
  </div>
}
