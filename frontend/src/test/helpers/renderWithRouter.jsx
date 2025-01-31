import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export default function renderWithRouter(component) {
  render(
    <BrowserRouter
      future={
        {
          v7_startTransition: true,
          v7_relativeSplatPath: true }
      }
    >
      {component}
    </BrowserRouter>,
  );
}
