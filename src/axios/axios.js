import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-afde2-default-rtdb.firebaseio.com'
})