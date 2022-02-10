interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

interface ContentHeaderProps{
    selectedGenre: GenreResponseProps;
}

export function ContentHeader({ selectedGenre } : ContentHeaderProps) {
    return (
        <>
            <header>
                <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
            </header>
        </>
    )
}