import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('Task Manager', () => {
  it('navigates to tasks and adds a new task', async () => {
    render(<App />);
    
    // Test Routing
    const launchButton = await screen.findByText(/Launch Dashboard/i);
    fireEvent.click(launchButton);

    // Test Adding
    const input = await screen.findByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    await userEvent.type(input, 'Finish Capstone');
    fireEvent.click(addButton);

    expect(screen.getByText('Finish Capstone')).toBeInTheDocument();
  });
});