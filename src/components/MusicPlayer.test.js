import { fireEvent, render, screen } from '@testing-library/react';
import MusicPlayer from './MusicPlayer';

beforeAll(() => {
  jest.spyOn(window.HTMLMediaElement.prototype, 'load').mockImplementation(() => {});
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue();
  jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('shows the selected recording in the bottom player', () => {
  const onClose = jest.fn();
  const { container } = render(
    <MusicPlayer
      track={{
        title: 'Washerwoman (2025)',
        src: 'https://example.com/washerwoman.mp3',
        type: 'audio/mpeg',
      }}
      onClose={onClose}
    />
  );

  expect(screen.getByText('Washerwoman (2025)')).toBeInTheDocument();
  expect(container.querySelector('audio source')).toHaveAttribute(
    'src',
    'https://example.com/washerwoman.mp3'
  );

  fireEvent.click(screen.getByRole('button', { name: 'Close player' }));
  expect(onClose).toHaveBeenCalledTimes(1);
});
