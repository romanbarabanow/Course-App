const defaultStore = {
  register: false,
  user: {},
  admin: false,
}

const SET_USER = "SET_USER"
const SET_ADMIN = "SET_ADMIN"

export function userReducer(state = defaultStore, action) {
  switch (action.type) {
    case SET_USER:
      return {
        register: true,
        user: action.payload,
      }
    case SET_ADMIN:
      return {
        register: true,
        admin: true,
      }
    default:
      return state
  }
}

export const setUser = (data) => ({ type: SET_USER, payload: data })
export const setAdmin = (data) => ({ type: SET_ADMIN })
