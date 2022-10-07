import React, { FC } from 'react';

import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
	const router = useRouter();
	const onClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid xs={6} sm={3} xl={1} key={id}>
			<Card isPressable isHoverable onClick={onClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={img} width="100%" height={140} alt={name} />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>
							#{id}
						</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
