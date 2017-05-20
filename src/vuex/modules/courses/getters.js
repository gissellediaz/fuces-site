export const getAllCourses = state => {
  console.log('all courses', state.courses)
  return state.courses
}
export const getCourseBySlug = (state, getters) => (slug) => {
  console.log(slug)
  console.log(state.courses)
  return state.courses.find(course => course.slug === slug)
}
