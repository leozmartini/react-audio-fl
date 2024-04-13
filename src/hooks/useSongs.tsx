import { useContext } from "react"
import { SongsContext } from "../contexts/SongsContext"

export const useSongs = () => {

    const context = useContext(SongsContext)

    if (!context) {
        throw new Error(
            'SongsProvider must be used within a SongsProvider',
        )
    }

    function playMusic(audioIndex: number) {
        stopCurrentMusic().then(() => {
            // Espera o audio atual terminar para tocar o próximo            
            if (context?.songs[context?.currentSong] !== undefined) {
                context?.songs[context?.currentSong].addEventListener('ended', () => {
                    if (context?.currentSong === context?.songs.length - 1) {
                        context?.setCurrentSong(0)
                    } else {
                        context?.setCurrentSong(context?.currentSong + 1)
                    }
                })
            }
            context?.setIsPlaying(true)
            context?.songs[audioIndex].play();
        })
    }

    async function stopCurrentMusic() {
        context?.setIsPlaying(false)
        context?.songs.forEach((song) => {
            song.currentTime = 0;
            song.pause();
        });
    }

    function pauseMusic() {
        context?.setIsPlaying(false)
        context?.songs[context?.currentSong].pause();
    }

    function toggleMusic() {
        if (context?.isPlaying) {
            context?.setIsPlaying(false)
            pauseMusic();
        } else {
            context?.setIsPlaying(true)
            context?.songs[context?.currentSong].play();
        }
    }

    return {
        ...context,
        playMusic,
        stopCurrentMusic,
        pauseMusic,
        toggleMusic
    }
}