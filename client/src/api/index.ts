import axios from "axios"

axios.defaults.baseURL = "http://localhost:3000"
export async function fetchRecipes(){
    try{
      const response = await axios.get('/recipes')
      return response
    } catch (error: any){
      return error.response
    }
  }

export async function fetchCategories(){
  try{
    const response = await axios.get('/category')
    return response
  } catch (error: any){
    return error.response
  }
  }