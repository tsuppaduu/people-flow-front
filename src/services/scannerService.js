import axios from "axios"

const apiUrl = "/scanners"

const getScanners = async () => {
    const { data } = await axios.get(apiUrl)
    console.log("saatu",data) 
    return data
}

export default { getScanners }