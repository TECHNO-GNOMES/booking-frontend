import axios from "axios";
import { PlaceFormData } from "../model/type";

const API_URL = ''

export const submitPlaceBackend = async (
    formData: Partial<PlaceFormData>
) => {
    const data = new FormData()

    Object.entries(formData).forEach((key, value) => {
        if (value !== null && value !== undefined) {
            if (Array.isArray(value)) {
                data.append(key, JSON.stringify(value))
            } else {
                data.append(key, String(value))
            }
        }
    })

    const response = await axios.post(API_URL, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    return response.data
}
