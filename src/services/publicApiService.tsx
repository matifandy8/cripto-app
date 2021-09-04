import axios from "axios"
import { Currency } from "../types/types"

const baseURL = "https://api-cripto.herokuapp.com"
const axiosIntance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	}
})

export const Get = async(path:string, id = null) => {
	const finalPath = id ? `${path}/${id}` : path
	try {
		const resp = await axiosIntance.get<Currency[]>(finalPath)
		return resp
	} catch (error) {
		return error
	}
}
