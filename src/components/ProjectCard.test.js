import { fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('opens a recording from the Listen button', () => {
  const onListen = jest.fn();

  render(
    <ProjectCard
      title="Washerwoman (2025)"
      audioUrl="https://example.com/washerwoman.mp3"
      onListen={onListen}
    />
  );

  const listenButton = screen.getByRole('button', { name: 'Listen' });
  fireEvent.click(listenButton);

  expect(onListen).toHaveBeenCalledTimes(1);
  expect(screen.queryByRole('audio')).not.toBeInTheDocument();
});

test('marks the button for the active recording', () => {
  render(
    <ProjectCard
      title="AIWS (2024)"
      audioUrl="https://example.com/aiws.wav"
      onListen={() => {}}
      isAudioActive
    />
  );

  expect(screen.getByRole('button', { name: 'Listen' })).toHaveAttribute('aria-pressed', 'true');
});

test('keeps video compact until Watch is clicked', () => {
  render(
    <ProjectCard
      title="There, Blurred (2025)"
      link="https://youtu.be/xzfFH4jBfHk"
      linkLabel="Watch on YouTube"
    />
  );

  const watchButton = screen.getByRole('button', { name: 'Watch' });
  expect(watchButton).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByTitle('There, Blurred (2025)')).not.toBeInTheDocument();

  fireEvent.click(watchButton);

  const closeButton = screen.getByRole('button', { name: 'Close' });
  expect(closeButton).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByTitle('There, Blurred (2025)')).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(screen.queryByTitle('There, Blurred (2025)')).not.toBeInTheDocument();
});
