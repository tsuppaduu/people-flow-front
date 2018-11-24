import axios from "axios"

const apiUrl = "/scanners"

const getScanners = async () => {
    const { data } = await axios.get(apiUrl)
    return data
}

export default { getScanners }