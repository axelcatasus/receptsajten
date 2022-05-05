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

  export async function fetchRecipesByCategory(category: any){
    try{
      const response = await axios.get(`/category/${category}`)
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

export async function postRating(recipeId: any, rating: any){
    try{
      const response = await axios.put(`/recipes/${recipeId}`, {rating: rating})
      return response
    } catch (error: any){
      return error.response
    }
  }