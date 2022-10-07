import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { FavoriteCardPokemon } from './';

interface Props {
	pokemons: number[];
}

export const FavoritesPokemon: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemons.map((id) => (
				<FavoriteCardPokemon key={id} pokemonId={id} />
			))}
		</Grid.Container>
	);
};
