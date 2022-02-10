import '../styles/content.scss';
import { ContentHeader } from './ContentHeader';
import { MoviesListing } from './MoviesListing';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}

export function Content({ selectedGenreId, selectedGenre }: ContentProps) {

  return (
    <>
      <div className="container">
        <ContentHeader selectedGenre={selectedGenre}/>
        <MoviesListing selectedGenreId={selectedGenreId}/>
      </div>
    </>
  )
}