import axios from "axios"

const apiUrl = "/scanners"

const getScanners = async () => {
    const { data } = await axios.get(apiUrl)
    console.log(data) 
}

export default { getScanners }