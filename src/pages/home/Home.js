import React from 'react';
import GridContainer from '../../components/grid/GridContainer';
import GridBox from '../../components/grid/GridBox';

function Home({ data, setPage, setSingleViewData }) {
	return (
		<div className="home">
			<div className="text-wrapper">
				<h1 className="home__title">explore</h1>
				<p />
			</div>

			<GridContainer className="home__grid">
				{data &&
					data.map(res => {
						const height = Math.round(
							(200 + Math.ceil(Math.random() * 300)) / 100
						);
						const viewData = {
							id: res.id,
							img: res.urls.regular,
							author: res.user.name,
							authorLink: res.links.self,
							description: res.description
						};
						return (
							<GridBox
								key={res.urls.regular}
								addStyle={{
									width: '236px',
									background: `url(${res.urls
										.regular}) no-repeat center top / cover`,
									gridRowEnd: `span ${height}`
								}}
								className="box home__grid-box"
								onClick={() => {
									setSingleViewData(viewData);
									setPage('view-pin');
								}}
							/>
						);
					})}
			</GridContainer>
		</div>
	);
}

export default Home;
