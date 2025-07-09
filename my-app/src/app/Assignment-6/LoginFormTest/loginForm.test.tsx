import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './loginForm';

describe('LoginForm', () => {
  it('should accept user input in username and password fields', () => {
    render(<LoginForm onSubmit={jest.fn()} />);

    const usernameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('1234');
  });

  it('should call onSubmit with correct data when form is submitted', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'john' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'secret' },
    });

    fireEvent.click(screen.getByText('Login'));

    expect(mockSubmit).toHaveBeenCalledWith({
      username: 'john',
      password: 'secret',
    });
  });
});
