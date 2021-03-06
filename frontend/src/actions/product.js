import {
  END_LOADING,
  FETCH_SINGLE_PRODUCT,
  START_LOADING,
} from '../constants/actionTypes.js'
import * as api from '../api/index.js'

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING })

  const {
    data: { data },
  } = await api.fetchSingleProduct(id)
  console.log(data)
  dispatch({ type: FETCH_SINGLE_PRODUCT, payload: data });

  dispatch({ type: END_LOADING })
}
