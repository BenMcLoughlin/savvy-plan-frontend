export const set = (id: string, reducer: string, value: any, childId?: any): any => {
  return {
    type: `${reducer}/SET_VALUE`,
    childId, // child id in the id value pair of the object nested within the parent object,
    id, // parent id is the id to the lower level child object
    value,
  }
}

export const remove = (id: string): any => {
  return {
    type: `main_reducer/remove`,
    id,
  }
}
