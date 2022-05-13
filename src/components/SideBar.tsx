import { Button } from './Button';
import '../styles/sidebar.scss';
import { useMemo } from 'react';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar({genres , selectedGenreId, handleClickButton}: SideBarProps) {

  const genreSelected = useMemo(() => {
    return genres;
  }, [selectedGenreId])

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genreSelected.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>

    </>
  )
}