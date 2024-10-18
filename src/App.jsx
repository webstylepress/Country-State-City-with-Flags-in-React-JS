import { useState } from 'react';
import {
	CitySelect,
	CountrySelect,
	StateSelect,
} from 'react-country-state-city';
import 'react-country-state-city/dist/react-country-state-city.css';
import './App.css';

function App() {
	const [countryid, setCountryid] = useState(0);
	const [stateid, setstateid] = useState(0);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h6>Country</h6>
					<CountrySelect
						onChange={(e) => {
							setCountryid(e.id);
							console.log(e);
						}}
						placeHolder='Select Country'
					/>
				</div>
				<div className='col'>
					<h6>State</h6>
					<StateSelect
						disabled={!countryid}
						countryid={countryid}
						onChange={(e) => {
							setstateid(e.id);
							console.log(e);
						}}
						placeHolder='Select State'
					/>
				</div>
				<div className='col'>
					<h6>City</h6>
					<CitySelect
						disabled={!stateid}
						countryid={countryid}
						stateid={stateid}
						onChange={(e) => {
							console.log(e);
						}}
						placeHolder='Select City'
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
