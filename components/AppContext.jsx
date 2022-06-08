import React, {createContext, useReducer} from 'react'

export const AppContext = createContext();


const allTunes = [
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FTales%20Of%20Pharaohs%2C%20Balloonists%2C%20Lovers%20And%20Yogis.mp3?alt=media&token=77f54d1f-f9eb-4fd8-88f8-658999051a3d",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FResonate.mp3?alt=media&token=68389111-be75-453f-b19a-76fdc57ab5fb",
    "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FMist%20After%20Smoke.mp3?alt=media&token=5614749f-e69e-452e-9212-e461eeacd959"
    // "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2FFragile.mp3?alt=media&token=18f8f833-c159-4539-b765-ab3bdb458975",
    // "https://firebasestorage.googleapis.com/v0/b/lexyom-site.appspot.com/o/mp3s%2F2pm%20Seems%20Like%20an%20Hour%20Ago.mp3?alt=media&token=bdd23806-5a32-4504-a37b-22b9df736f58"
  ]

const initialState = {
    playlist: allTunes,
    tuneIndex: 0,
    currTune: allTunes[0]
};

const reducer = (state, action) => {
    return {...state, ...action}
};

const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
};


export default AppContextProvider