import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { recipesActions } from "../store/recipes.slice"

const actions = {
    ...recipesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}