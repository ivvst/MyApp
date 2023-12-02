import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For jest-dom assertions

import Delete from './Delete';

test('renders Delete component', () => {
  const { getByText } = render(<Delete onCancel={() => {}} onConfirm={() => {}} />);
  const deleteElement = getByText('Are you sure you want to delete this ship?');
  expect(deleteElement).toBeInTheDocument();
});

test('calls onCancel when Close button is clicked', () => {
  const onCancelMock = jest.fn();
  const { getByText } = render(<Delete onCancel={onCancelMock} onConfirm={() => {}} />);
  const closeButton = getByText('Close');
  fireEvent.click(closeButton);
  expect(onCancelMock).toHaveBeenCalled();
});

// Write similar tests for other interactions
