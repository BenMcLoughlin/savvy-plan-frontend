
import React from "react"

/**
 * recieves an object called components that has all components available in the app. Data refers to an object that has a component type to display and a handle function. 
 *  */


export const matchThenShowComponent = (components, data, query) => {
  if (query === "chart" || query === "null") return null

  const Component = components[query] //each page renders a unique chart, its name is provided by the props in string format. connectRedux_HOC holds all components so here it finds the chart to be rendered
  return <Component {...data} />
} 