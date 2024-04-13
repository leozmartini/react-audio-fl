import { useSongs } from '../hooks/useSongs';


const OffBtn = () => {
  const { pauseMusic } = useSongs();

  return (
    <>
      <button className="off__btn" onClick={() => {
        pauseMusic()
      }}>Desligar Áudio</button>
    </>
  );
}

export default OffBtn;
