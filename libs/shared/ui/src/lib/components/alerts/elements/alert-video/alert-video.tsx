import { Pixels } from '@streali/shared/types';
import { useRef } from 'react';
import { useEffect } from 'react';

export interface AlertVideoProps {
  src: string;
  play: boolean;
  loop: boolean;
  width: Pixels;
  height: Pixels;
  posX: Pixels;
  posY: Pixels;
}

export function AlertVideo(props: AlertVideoProps) {
  const { src, play, loop, width, height, posX, posY } = props;
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video.current) {
      if (play) {
        video.current.play();
      } else {
        video.current.pause();
      }
    }
  }, [play, loop]);

  return (
    <video
      src={src}
      ref={video}
      loop={loop}
      muted
      className="draggable-alert hover:outline hover:outline-1 hover:outline-white/30 transition-colors absolute"
      style={{
        width: width,
        height: height,
        transform: `translate(${posX}px, ${posY}px)`,
      }}
      data-x={posX}
      data-y={posY}
    ></video>
  );
}

export default AlertVideo;
