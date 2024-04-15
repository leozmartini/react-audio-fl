import { useEffect } from 'react';
import { useSongs } from '../hooks/useSongs';



const PlayerItem = ({ title, src, id }: { title: string, src: string, id: number }) => {
  const { currentSong, setCurrentSong, playMusic, toggleMusic, setIsPlaying } = useSongs();
  useEffect(() => {
    if (currentSong != null) {
      playMusic(currentSong);
    }
    // eslint-disable-next-line
  }, [currentSong]);



  return (
    <>
      <div className="player__item" onClick={() => {
        if (currentSong === id) {
          toggleMusic()
        } else {
          setIsPlaying(true)
          setCurrentSong(id)
        }
      }}>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8.57042"
            cy="8.4648"
            r="7.92958"
            fill="#D9D9D9"
            stroke="black"
          />
          <path
            d="M11.9878 8.69263L6.51998 11.8495L6.51998 5.53578L11.9878 8.69263Z"
            fill="black"
          />
        </svg>
        <div className="player__item__song">
          <p>{title}</p>
        </div>
      </div>
    </>
  )
}

export default PlayerItem
