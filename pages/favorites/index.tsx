import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritesPokemon } from '../../components/pokemon';

const FavoritesPage = () => {
	const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemon(localFavorites.pokemons());
	}, []);

	return (
		<Layout title="Favorites - Pokedex">
			{favoritePokemon.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritesPokemon pokemons={favoritePokemon} />
			)}
		</Layout>
	);
};

export default FavoritesPage;
