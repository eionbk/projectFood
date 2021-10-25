import axios from 'axios'

export const ALL_DIETS = 'ALL_DIETS'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const UPDATE_PAGE = 'UPDATE_PAGE';

const urls = {
    RECIPES: 'http://localhost:3001/recipes', //RUTA PARA OBTENER LAS RECETAS
    ALL_DIETS: 'http://localhost:3001/types'//RUTA DE LOS TYPOS DE DIETA
}


export const getData = (data, name)=>{
    return (dispatch)=>{
        const byname=  name?.length ? `?name=${name}`: '';
        axios.get( urls[data]+byname)
        .then(response => dispatch({type: data, payload: response.data}))
    }
}

export const updatePage = (page)=>{
    return (dispatch)=>{
        dispatch({type: 'UPDATE_PAGE', payload: parseInt(page)})
    }
}