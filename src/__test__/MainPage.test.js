/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { useTranslation } from 'react-i18next';
import Header from '../components/mainPage/header/Header.jsx';

// Mocking the i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

// Define a mock initial state
const initialState = {
  auth: {
    user: {
      name: 'Test User',
      email: 'test@example.com',
    },
  },
  // Add other slices of state your components might use
};

// Create a mock reducer that returns the initial state
const mockReducer = (state = initialState, action) => state;

// Create the mock store with the initial state and reducer
const mockStore = createStore(mockReducer);

it('renders correctly', () => {
  const component = renderer.create(
    <Provider store={mockStore}>
      <Header toggleModal={() => {}} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
