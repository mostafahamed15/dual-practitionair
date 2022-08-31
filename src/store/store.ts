import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const Store = configureStore({ reducer: reducer });
