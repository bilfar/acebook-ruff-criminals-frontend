import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Returns and parses data received from API', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({"json": () => {
      return {"id": 1}
    }}));
  let app = new App();
  app.handleLogin().then(response => {
    expect(response.id).toBe(1);
  });
});
