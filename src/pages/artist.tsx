import { useLocation } from 'react-router-dom';
import { iArtist } from '../interfaces/iArtist';

export function Artist() {
    const location = useLocation();
    const props = location.state as { artist: iArtist };
    return (
        <div>
            <h1>{props.artist.name}</h1>
        </div>
    );
}

export default Artist;
