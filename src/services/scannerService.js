import axios from "axios"

let baseUrl = ''
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://people-flow-back.herokuapp.com'
}
baseUrl = `${baseUrl}/scanners`


const getScanners = async () => {
    const { data } = await axios.get(baseUrl)
    return data
}

export default { getScanners }