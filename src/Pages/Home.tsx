import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useInfQueryPokemons} from '../queries/Pokemons';

function Home() {
	const initialState = {name: '', generationId: 0, typeId: 0};
	const [filter, setFilter] = useState(initialState);
	const {data, isFetching, isFetchingNextPage, isPreviousData, fetchNextPage} =
		useInfQueryPokemons(filter);

	const pokemons = data?.pages.flat();
	console.log(isPreviousData);
	return (
		<div className='m-10'>
			{pokemons?.map(({name, id}) => (
				<Link to={`/${name}`} key={id}>
					<div>{name}</div>
				</Link>
			))}
			<button onClick={async () => fetchNextPage()}>load more</button>
		</div>
	);
}

export default Home;
