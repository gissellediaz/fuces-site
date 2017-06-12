export const getAllCourses = state => {
  return state.courses
}

export const getCourseBySlug = (state, getters) => (slug) => {
  return state.courses.find(course => course.slug === slug)
}
