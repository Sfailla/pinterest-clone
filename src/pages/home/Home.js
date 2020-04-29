import React from 'react';
import GridContainer from '../../components/grid/GridContainer';
import GridBox from '../../components/grid/GridBox';

function Home({ data }) {
	const [ collection, setCollection ] = React.useState(null);
	const [ loading, setLoading ] = React.useState(false);

	return (
		<div className="home">
			<div className="text-wrapper">
				<h1 className="home__title">explore</h1>
				<p />
			</div>

			<GridContainer className="home__grid">
				{data &&
					data.map((res, i) => {
						return (
							<GridBox
								className="box"
								key={res.urls.regular}
								addStyle={{
									width: '236px',
									background: `url(${res.urls
										.regular}) no-repeat center top / cover`,
									gridRowEnd: i % 2 === 0 ? 'span 3' : 'span 4'
								}}
							/>
						);
					})}
			</GridContainer>
		</div>
	);
}

export default Home;
