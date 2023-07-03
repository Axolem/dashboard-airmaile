import { configureStore } from '@reduxjs/toolkit';

import appsReducer from './reducers/apps';
import profileReducer from './reducers/profile';

const store = configureStore({
    reducer: {
        apps: appsReducer,
        profile: profileReducer
    },
});

export default store;