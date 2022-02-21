import { fireEvent, render, screen } from '@testing-library/react';

import Button, { IButtonProps } from './Button';

const onClickHandler = jest.fn();

const renderButton = (overrideProps: IButtonProps = {}) =>
  render(
    <Button buttonStyle="dark" onClick={onClickHandler} {...overrideProps}>
      Test Button
    </Button>
  );

describe('Button', () => {
  test('renders dark button', () => {
    renderButton();
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(onClickHandler).toBeCalled();
  });
});