import { fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('renders a recording in an inline audio player', () => {
  const { container } = render(
    <ProjectCard
      title="Washerwoman (2025)"
      audioUrl="https://example.com/washerwoman.mp3"
      audioType="audio/mpeg"
    />
  );

  const player = screen.getByLabelText('Washerwoman (2025) recording');
  const source = container.querySelector('audio source');

  expect(player).toHaveAttribute('controls');
  expect(player).toHaveAttribute('preload', 'metadata');
  expect(source).toHaveAttribute('src', 'https://example.com/washerwoman.mp3');
  expect(source).toHaveAttribute('type', 'audio/mpeg');
  expect(container.querySelector('a[target="_blank"]')).not.toBeInTheDocument();
});

test('pauses other recordings when playback starts', () => {
  const { container } = render(
    <>
      <ProjectCard title="First" audioUrl="https://example.com/first.mp3" />
      <ProjectCard title="Second" audioUrl="https://example.com/second.mp3" />
    </>
  );

  const [firstPlayer, secondPlayer] = container.querySelectorAll('audio');
  const pauseFirst = jest.spyOn(firstPlayer, 'pause').mockImplementation(() => {});
  const pauseSecond = jest.spyOn(secondPlayer, 'pause').mockImplementation(() => {});

  fireEvent.play(secondPlayer);

  expect(pauseFirst).toHaveBeenCalledTimes(1);
  expect(pauseSecond).not.toHaveBeenCalled();
});
