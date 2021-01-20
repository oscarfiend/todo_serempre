import React from "react"
import MapComponent from "../components/map/mapComponent"
import { useSelector } from "react-redux"

import Layout from "../components/ui/layout"

export const SecondPage = () => {
  const { tasks } = useSelector(state => state.todos)
  return(
  <Layout>
    <MapComponent tasks={tasks}/>
  </Layout>
  )
  }

export default SecondPage
