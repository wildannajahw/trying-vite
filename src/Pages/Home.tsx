import {useState} from 'react';
import {useInfQueryPokemons} from '../queries/Pokemons';

function Home() {
	const initialState = {name: '', generationId: 0, typeId: 0};
	const [filter, setFilter] = useState(initialState);
	const {data, isFetching, isFetchingNextPage, isPreviousData, fetchNextPage} =
		useInfQueryPokemons(filter);
	return (
		<div>
			<div>asd</div>
		</div>
	);
}

export default Home;
