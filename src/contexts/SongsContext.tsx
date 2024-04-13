import { createContext, useEffect, useState } from "react";
import songsData from '../config/configdata';

type SongsContextType = {
    songs: HTMLAudioElement[];
    currentSong: any;
    setCurrentSong: any;
    isPlaying: boolean;
    setIsPlaying: any;
}

export const SongsContext = createContext<SongsContextType | undefined>(undefined);

interface SongsProviderProps {
    children: React.ReactNode;
}

export const SongsProvider: React.FC<SongsProviderProps> = ({ children }) => {
    const [songs, setSongs] = useState<HTMLAudioElement[]>([]);
    const [currentSong, setCurrentSong] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        const songsList: Array<HTMLAudioElement> = [];
        songsData.forEach((song: { src: string }) => {
            const audio = new Audio(song.src)
            songsList.push(audio)
        })
        setSongs(songsList)
    }, [])


    return (
        <SongsContext.Provider value={{ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying }}> {children} </SongsContext.Provider>
    )
}

