import NextLink from 'next/link';
import { Text, Spacer, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Navbar = () => {
	const router = useRouter();
	const { theme } = useTheme();

	const onClick = () => {
		router.push('/');
	};

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				padding: '0px 20px',
				alignItems: 'center',
				justifyContent: 'start',
				flexDirection: 'row',
				backgroundColor: theme?.colors.gray100.value
			}}
		>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
				alt="Pokemon"
				width={70}
				height={70}
				style={{
					cursor: 'pointer'
				}}
				onClick={onClick}
			/>
			<NextLink href="/" passHref>
				<Link>
					<Text color="white" h2 style={{ cursor: 'pointer' }}>
						P
					</Text>
					<Text color="white" h3 style={{ cursor: 'pointer' }}>
						okémon
					</Text>
				</Link>
			</NextLink>

			<Spacer css={{ flex: '1' }} />

			<NextLink href="/favorites" passHref>
				<Link css={{ marginRight: '10px' }}>
					<Text color="white">Favorites</Text>
				</Link>
			</NextLink>
		</div>
	);
};
