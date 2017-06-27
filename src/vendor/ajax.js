import 'es6-promise/auto'
import axios from 'axios'

axios.defaults.baseURL = process.HOST
axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
