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
