import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';

describe('Card', () => {
  const cardData = {
    id: 1,
    name: 'Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  it('should render the component onto the screen', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Card card={cardData} urlValue="" />
      </MemoryRouter>
    );

    expect(screen.getByText('Name: Rick')).toBeInTheDocument();
  });

  it('should change the url when click on it', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Card card={cardData} urlValue="" />
      </MemoryRouter>
    );
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    const m = new Promise((resolve) => setTimeout(resolve, 5000));
    m.then(() => {
      const { pathname } = window.location;
      expect(pathname).toBe('/detail=1');
    });
  });
});
