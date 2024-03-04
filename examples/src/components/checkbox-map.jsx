/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import fetchData from '../taiwan.main';
import { CheckboxSVGMap } from '../../../src/';
import { getLocationName } from '../utils';

const CheckboxMap = () => {
	const [pointedLocation, setPointedLocation] = useState(null);
	const [focusedLocation, setFocusedLocation] = useState(null);
	const [selectedLocations, setSelectedLocations] = useState([]);
	const [mapData, setMapData] = useState(null);

	const handleLocationMouseOver = (event) => {
		const pointedLocation = getLocationName(event);
		setPointedLocation(pointedLocation);
	};

	const handleLocationMouseOut = () => {
		setPointedLocation(null);
	};

	const handleLocationFocus = (event) => {
		const focusedLocation = getLocationName(event);
		setFocusedLocation(focusedLocation);
	};

	const handleLocationBlur = () => {
		setFocusedLocation(null);
	};

	/*
	const handleOnChange = (selectedNodes) => {
		setSelectedLocations(selectedNodes.map(node => node.attributes.name.value));
	};
	*/

	const handleOnChangeX = (selectedNodes) => {
		// Extract the names from the selected nodes
		const selectedLocationsNames = selectedNodes.map((node) => node.attributes.name.value);

		// Check for duplicates
		const uniqueSelectedLocations = Array.from(new Set([...selectedLocations, ...selectedLocationsNames]));

		// Update the state
		setSelectedLocations(uniqueSelectedLocations);
	};

	const handleOnChange = (selectedNodes) => {
		// Extract the names from the selected nodes
		const selectedLocationsNames = selectedNodes.map((node) => node.attributes.name.value);

		// Toggle selection
		const updatedSelectedLocations = selectedLocationsNames.reduce((acc, name) => {
			if (selectedLocations.includes(name)) {
				// Location is already selected, remove it
				return acc.filter((selected) => selected !== name);
			} else {
				// Location is not selected, add it
				return [...acc, name];
			}
		}, selectedLocations);

		// Update the state
		setSelectedLocations(updatedSelectedLocations);
	};

	useEffect(() => {
		// Inside the effect, we can use async/await syntax
		const fetchDataAsync = async () => {
			try {
				const data = await fetchData();
				setMapData(data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		// Call the asynchronous function
		fetchDataAsync();
	}, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

	return (
		<article className="examples__block">
			<h2 className="examples__block__title">
				SVG Checkbox
			</h2>
			<div className="examples__block__info">
				<div className="examples__block__info__item">
					Pointed: {pointedLocation}
				</div>
				<div className="examples__block__info__item">
					Focused: {focusedLocation}
				</div>
				<div className="examples__block__info__item">
					Selected:
					<ul>
						{selectedLocations.map(location => (<li key={location}>{location}</li>))}
					</ul>
				</div>
			</div>
			<div className="examples__block__map">
				{mapData && (
					<CheckboxSVGMap
						map={mapData}
						onLocationMouseOver={handleLocationMouseOver}
						onLocationMouseOut={handleLocationMouseOut}
						onLocationFocus={handleLocationFocus}
						onLocationBlur={handleLocationBlur}
						onChange={handleOnChange}
					/>
				)}
			</div>
		</article>
	);
};

export default CheckboxMap;
