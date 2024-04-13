import songsData from '../config/configdata';
import OffBtn from './OffBtn';
import PlayerItem from './playeritem';

const Body = () => {
  return (
    <>
      {songsData.map((song: { title: string; src: string; id: number }) => {
        return (
          <PlayerItem title={song.title} src={song.src} id={song.id} key={song.id} /> // Key serve pro react indetificar o elemento de forma única 
        );
      })}
      <OffBtn />
    </>
  );
}

export default Body;
