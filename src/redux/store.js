// import { combineReducers } from "redux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit"
import logger from "redux-logger"

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: "filter",
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "contacts/add":
      return [...state, payload]
    case "contacts/delete":
      return state.filter((item) => item.id !== payload)

    default:
      return state
  }
}

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "contacts/filter":
      return payload

    default:
      return state
  }
}

const reducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
})

const persistor = persistStore(store)

const exportobject = { store, persistor }

export default exportobject
