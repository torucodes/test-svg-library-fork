/* eslint-disable no-console */
/* eslint-disable semi */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';

//import Fetch from '../TestFolder/apicall.js';
//import FetchData from '../TestFolder/calltest.js';
//import {nameArray} from '../TestFolder/database-con.js'import Fetch from '../TestFolder/apicall.js'

//const fetchedData = Fetch();

//const dataWithIndex = fetchedData.map((value, index) => ({ value, index }));

//console.log(dataWithIndex);*/

//var test = 'BOB';


/* const fetchData = async () => {
	try {
		const data = await Fetch();
		console.log('Data:', data);
		// Use the data variable as needed
	} catch (error) {
		console.error('Error:', error);
	}
};

console.log('This is the fetch data:' + fetchData); */

/* const FetchData = () => {
	// eslint-disable-next-line no-unused-vars
	const [users, setUsers] = useState([]);

	const fetchUserData = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				return response.json();
			})
			.then(data => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	// Now, 'users' contains the fetched data as a variable

	return null; // No HTML rendering, you can use 'users' variable as needed
};

const userData = FetchData();

console.log(userData); */

console.log('BEFORE');
var myVar = 'hold';
var taiwanMapData;



const fetchUserData = async () => {
	try {
		const response = await fetch('https://localhost:7038/api/user');
		const data = await response.json();
		return data;

	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const testExport = () => {
	fetch('https://localhost:7038/api/user')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			taiwanMapData = {
				'label': 'Map of Taiwan main island',
				'viewBox': '312 322 688 973',
				'locations': [{
					'name':data[0].name,
					'id': data[0].id,
					'path': 'M647.2 689.6l0.1 3.6-4.3 1.6-1.2 2.9 0.5 4-2 4.6-1.6 5.4-0.1 5.7-1.2 6.6-0.9 13.4 2.1 6.3 3.6 3.3 3.9 1.4 5.6 2.9-1 3.5-3.8 1.5-2.5 2.3-2.4 1.6-1 0.7-12-2.4-5.8 0.1-12.2-6-19.7-2.3-11.6-4.4-6.6-1.8-7.6-0.4-22 2.6-7.6-4.4 0.8-1.4 1.6-7.1 1.2-3 7.1-6.8 2-2.8 2.7-7.8 4.2-7.7 5.7-16.1 2.7-4.7 3-3 2.5-1.7 2.2-1.1 1.6-1.4 0.6-3 1.2-2.8 5.1-4 1.2-3 0.6-10.1 0.9-2.8 2.7-2.6 11.3-13.2 5.8 1.9 4 3.5 2.7 6.3 1 7.6 4.5 5.4 11.9 3.5 4.3 3.6 3.2 5 2 4 0.1 4 1.2 3.3 4.3 0.8 5.4 3.5 0 1.4z'
				}, {
					'name': 'Trender 2',
					'id': 'chiayi-city',
					'path': 'M573.8 836.5l9.3-1.6 7.8-0.7 5.6 2.1 4.1 2.2 2.5 4 2.5 6.8-3 2.2-4.5 0.6-6.8 2.7-7.3-1.7-7-4.5-6.1-2.4-0.9-5.6 3.8-4.1z'
				}, {
					'name': 'Trender 3',
					'id': 'chiayi-county',
					'path': 'M499.6 893.2l-1.8 1.4-0.4-1.1 2.4-3.1 0.9-2.4 1.1-1.5 0.6 0.5 0.1 1.1-1.4 2-1.5 3.1z m2.2-12.6l-0.7-0.7 2-3.8 0.9-0.4-0.5 1.9-1.7 3z m4.9-9l-0.1-4.4 0.5 0.4 0.1 2.9-0.5 1.1z m1.4-9.7l-0.8 1.6-0.5-2 1.3 0.4z m-1.3-6.1l-0.5 1.3-1.3-2.1 1.8 0.8z m-29.8 1l-3.2 1.6 3.8-5.4 13.9-14.1 10.6-13.5 2.5-0.8-9 14.7-4.5 4.5-2.9 3.5-3.8 3.8-3 2.1-4.4 3.6z m189.5-51.1l6.1 0.7 6.8 2.6 4.1 1.2 5.1 2.8-0.3 5.3-3 5.1 1.2 4.8 2.7 6.5 0.4 5.9 1.1 3.8 7.6 1.4 25.6 0.2 0.9 0.2-18.5 9.4-8.5 6.8-3.6 6.8-4.2 5-7.7 4.3-7.9 6.1-4.5 5.4-12.3 7.3-5.8 0.6-6.9-0.7-3.6 3.5-0.1 5 1.4 4.5 1 6.7-8.4-1-3.7-1.1-5 0.6-5.3 2.4-3.8 0-4.5-3.5-1.6-4.6 1.8-14.2-1-7.5-9.9-10.1-1.7-5.1-2.1-4.2-4-2.4-7.2-2.4-8.5 0.5-15.2 2.8-7.8 3.5-6.1 4.6-4.7 4.8-6.6 5.1-5.8 3.6-2.5 4.9-6.2 2.8-7.2-1.8-8.9-1.3-5.2-2 3.8-0.3 3.3-1.4 1.4 0.5-0.9-3.2-2.2 1.6-1.8-0.5-2.5-0.1 0-3.3 2.4-5.6 3.7-0.3 5.4 0.1-3.7-10.5-4.1-8 1.9-3.7 0-1.9-3.1-1.5 0.4-1.8 1.8-2 0.9-2.6 4-5.2-8.5 0.5-0.2-8.7 11.6-1.4 8.3 4.7 6.1 0.1 3.9-3.2 1.7-4.9 2.1-3 5.3-0.8 7-5.7 4.4-2.4 3.8-3.8 16.3-9.4 7.2-2 12.6-2.3 6.9-0.4 5.3 4.6 5 5.9 12.6 4.6 3.7-0.5 8.3-2.4 4.7 3.4 2.4 3.9 6.3-0.6 11.7-2.4 4-1.3 0-3.4 0.3-5 0.5 0z m-92.7 30.8l-3.8 4.1 0.9 5.6 6.1 2.4 7 4.5 7.3 1.7 6.8-2.7 4.5-0.6 3-2.2-2.5-6.8-2.5-4-4.1-2.2-5.6-2.1-7.8 0.7-9.3 1.6z'
				}, {
					'name': 'Trender 4',
					'id': 'hualien-county',
					'path': 'M935.4 601.5l0.6 0.8 1.6 2.9 0.2 1.1-1.4 2.4-5.8 5.7-6.2 8.6-4.7 3.7-1.4 2 0.7 2.1-0.9 1.5-6.6 5.1-2.5 2.4-2.8 6-2.9 12.2-7.4 10.9-1.5 4.4 0.2 4.7 1.8 5.2 1.5 2.3 1.3 1 0.8 1.4 0.1 3.2-1.1 3.6-3.7 5.8-0.7 3.5-0.4 6.4-3.2 16.3-6.4 17-8 40.1-4.8 9.8-11 64.1-3.5-1-10.8 5.2-3.9 5.4 1.7 6.9 0.6 6.9-3.6 6.9-3.4 5.2-2.7 6.6-2.4 8.4-3.7 7.7-4.8 13.2-3.1 6.1 0.1 6.7-0.9 6.2-6.5 3.7-8.2-1.1-11.7-9.7-9.2-16-5.7-1.5-6.3-0.9-5-4.8-6.1-2.9-7.8-2.8-5-8.1-1.2-7.4-0.3-2.5-2.8-7.6-6.3-5.2-5.6-3.6-1-4 1.4-3.2 5.6-2.4 3-5-1.9-5.8 6-3.5 3.1-2.8-1.7-6.2 1.5-2.7 1.5-4 5.2-3.9 7.4-1.6 7.4-0.3 5.3-4.7 1.3-8.5 4-5.2 7.6-2.8 4.5-3.1 1.6-5.1 3.2-12.6 1.2-8.4-0.9-7.2-1.2-5.4-3.2-4.1-2.1-4 5.7-9.4 0.2-3.7 2.5-7 3.9-8.5 3-8.8 1.6-9.9 0.6-7.6-1.8-4.5-2-3.3 2.3-7.6 5.1-10.7 8-10.4 0.3-3.9-1.5-4.5-5.2-3.4-2.9-3.1-0.2-9.9 3.7-2.9 6.6-2.2 5.2-2.4-0.2-3.7-1.4-6.2 2.8-2 1.2-2.1 3.4-1.7 3.1-3.8 1.3-5.1 3-5 7.5-4.7 2.4-6.2 0.4-4.2 4.7-4.9 2.5 2.1 6.5 3.1 15 3.8 8.3 3.2 6.5 0 4.9-4.5 2.4-6 3.8-0.9 18.5 11.1 11.1 1.7 1.1 0z'
				}, {
					'name': 'Trender 5',
					'id': 'hsinchu-city',
					'path': 'M724.3 489l-0.2 0.2-4.6 1.1-4.4-1.7-2.7-3.8-4.3-2.6-6.9-2.7 1.2-4.1 5.5-11.4 2.2-3 0.7-1.5 0-1.7-0.7-1.9-1.1-2.2 1.5-3 1.8-1.8 8.3 3.6 15.1 4.8 5.4 2.8 3.8 3.9 1.9 3.7-1 3.6-2.4 1.4-5.1 0.9-5.9 2.4-3.4 4.3-2.3 5.6-2.4 3.1z'
				}, {
					'name': 'Trender 6',
					'id': 'yunlin-county',
					'path': 'M642 760.2l1.9 7.2-2 4.7-1 7.2 1 7.7-1.9 5.2-0.9 5.7 4 4.7 5.8 2.5 6.8-2 8.2-0.9 2.6 3.5-0.5 0-0.3 5 0 3.4-4 1.3-11.7 2.4-6.3 0.6-2.4-3.9-4.7-3.4-8.3 2.4-3.7 0.5-12.6-4.6-5-5.9-5.3-4.6-6.9 0.4-12.6 2.3-7.2 2-16.3 9.4-3.8 3.8-4.4 2.4-7 5.7-5.3 0.8-2.1 3-1.7 4.9-3.9 3.2-6.1-0.1-8.3-4.7-11.6 1.4 4.6-5.2-0.2-16.4 0.7-12.3 2.8-9.8 4.3-7.7 1.3-10 2.3-8.8 1.3-3 6.1-8.1 1.1-2.8 0.7-1.5 5.6-4.3 0.8-1.6 7.6 4.4 22-2.6 7.6 0.4 6.6 1.8 11.6 4.4 19.7 2.3 12.2 6 5.8-0.1 12 2.4 1-0.7z'
				}]

			}


		})
		.catch(error => console.error('Error:', error));

}

const iComponent = () => {
	const [Output, setOutput] = useState (null);
	useEffect(() => {
		fetch('https://localhost:7038/api/user')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				taiwanMapData = {
					'label': 'Map of Taiwan main island',
					'viewBox': '312 322 688 973',
					'locations': [{
						'name':myVar[0].name,
						'id': myVar[0].id,
						'path': 'M647.2 689.6l0.1 3.6-4.3 1.6-1.2 2.9 0.5 4-2 4.6-1.6 5.4-0.1 5.7-1.2 6.6-0.9 13.4 2.1 6.3 3.6 3.3 3.9 1.4 5.6 2.9-1 3.5-3.8 1.5-2.5 2.3-2.4 1.6-1 0.7-12-2.4-5.8 0.1-12.2-6-19.7-2.3-11.6-4.4-6.6-1.8-7.6-0.4-22 2.6-7.6-4.4 0.8-1.4 1.6-7.1 1.2-3 7.1-6.8 2-2.8 2.7-7.8 4.2-7.7 5.7-16.1 2.7-4.7 3-3 2.5-1.7 2.2-1.1 1.6-1.4 0.6-3 1.2-2.8 5.1-4 1.2-3 0.6-10.1 0.9-2.8 2.7-2.6 11.3-13.2 5.8 1.9 4 3.5 2.7 6.3 1 7.6 4.5 5.4 11.9 3.5 4.3 3.6 3.2 5 2 4 0.1 4 1.2 3.3 4.3 0.8 5.4 3.5 0 1.4z'
					}, {
						'name': 'Trender 2',
						'id': 'chiayi-city',
						'path': 'M573.8 836.5l9.3-1.6 7.8-0.7 5.6 2.1 4.1 2.2 2.5 4 2.5 6.8-3 2.2-4.5 0.6-6.8 2.7-7.3-1.7-7-4.5-6.1-2.4-0.9-5.6 3.8-4.1z'
					}, {
						'name': 'Trender 3',
						'id': 'chiayi-county',
						'path': 'M499.6 893.2l-1.8 1.4-0.4-1.1 2.4-3.1 0.9-2.4 1.1-1.5 0.6 0.5 0.1 1.1-1.4 2-1.5 3.1z m2.2-12.6l-0.7-0.7 2-3.8 0.9-0.4-0.5 1.9-1.7 3z m4.9-9l-0.1-4.4 0.5 0.4 0.1 2.9-0.5 1.1z m1.4-9.7l-0.8 1.6-0.5-2 1.3 0.4z m-1.3-6.1l-0.5 1.3-1.3-2.1 1.8 0.8z m-29.8 1l-3.2 1.6 3.8-5.4 13.9-14.1 10.6-13.5 2.5-0.8-9 14.7-4.5 4.5-2.9 3.5-3.8 3.8-3 2.1-4.4 3.6z m189.5-51.1l6.1 0.7 6.8 2.6 4.1 1.2 5.1 2.8-0.3 5.3-3 5.1 1.2 4.8 2.7 6.5 0.4 5.9 1.1 3.8 7.6 1.4 25.6 0.2 0.9 0.2-18.5 9.4-8.5 6.8-3.6 6.8-4.2 5-7.7 4.3-7.9 6.1-4.5 5.4-12.3 7.3-5.8 0.6-6.9-0.7-3.6 3.5-0.1 5 1.4 4.5 1 6.7-8.4-1-3.7-1.1-5 0.6-5.3 2.4-3.8 0-4.5-3.5-1.6-4.6 1.8-14.2-1-7.5-9.9-10.1-1.7-5.1-2.1-4.2-4-2.4-7.2-2.4-8.5 0.5-15.2 2.8-7.8 3.5-6.1 4.6-4.7 4.8-6.6 5.1-5.8 3.6-2.5 4.9-6.2 2.8-7.2-1.8-8.9-1.3-5.2-2 3.8-0.3 3.3-1.4 1.4 0.5-0.9-3.2-2.2 1.6-1.8-0.5-2.5-0.1 0-3.3 2.4-5.6 3.7-0.3 5.4 0.1-3.7-10.5-4.1-8 1.9-3.7 0-1.9-3.1-1.5 0.4-1.8 1.8-2 0.9-2.6 4-5.2-8.5 0.5-0.2-8.7 11.6-1.4 8.3 4.7 6.1 0.1 3.9-3.2 1.7-4.9 2.1-3 5.3-0.8 7-5.7 4.4-2.4 3.8-3.8 16.3-9.4 7.2-2 12.6-2.3 6.9-0.4 5.3 4.6 5 5.9 12.6 4.6 3.7-0.5 8.3-2.4 4.7 3.4 2.4 3.9 6.3-0.6 11.7-2.4 4-1.3 0-3.4 0.3-5 0.5 0z m-92.7 30.8l-3.8 4.1 0.9 5.6 6.1 2.4 7 4.5 7.3 1.7 6.8-2.7 4.5-0.6 3-2.2-2.5-6.8-2.5-4-4.1-2.2-5.6-2.1-7.8 0.7-9.3 1.6z'
					}, {
						'name': 'Trender 20',
						'id': 'yunlin-county',
						'path': 'M642 760.2l1.9 7.2-2 4.7-1 7.2 1 7.7-1.9 5.2-0.9 5.7 4 4.7 5.8 2.5 6.8-2 8.2-0.9 2.6 3.5-0.5 0-0.3 5 0 3.4-4 1.3-11.7 2.4-6.3 0.6-2.4-3.9-4.7-3.4-8.3 2.4-3.7 0.5-12.6-4.6-5-5.9-5.3-4.6-6.9 0.4-12.6 2.3-7.2 2-16.3 9.4-3.8 3.8-4.4 2.4-7 5.7-5.3 0.8-2.1 3-1.7 4.9-3.9 3.2-6.1-0.1-8.3-4.7-11.6 1.4 4.6-5.2-0.2-16.4 0.7-12.3 2.8-9.8 4.3-7.7 1.3-10 2.3-8.8 1.3-3 6.1-8.1 1.1-2.8 0.7-1.5 5.6-4.3 0.8-1.6 7.6 4.4 22-2.6 7.6 0.4 6.6 1.8 11.6 4.4 19.7 2.3 12.2 6 5.8-0.1 12 2.4 1-0.7z'
					}]

				}
			});
	}, []);
	console.log(taiwanMapData);
	return taiwanMapData;
	
}


export default iComponent;










/*

taiwanMapData = {
			'label': 'Map of Taiwan main island',
			'viewBox': '312 322 688 973',
			'locations': [{
				'name':myVar[0].name,
				'id': myVar[0].id,
				'path': 'M647.2 689.6l0.1 3.6-4.3 1.6-1.2 2.9 0.5 4-2 4.6-1.6 5.4-0.1 5.7-1.2 6.6-0.9 13.4 2.1 6.3 3.6 3.3 3.9 1.4 5.6 2.9-1 3.5-3.8 1.5-2.5 2.3-2.4 1.6-1 0.7-12-2.4-5.8 0.1-12.2-6-19.7-2.3-11.6-4.4-6.6-1.8-7.6-0.4-22 2.6-7.6-4.4 0.8-1.4 1.6-7.1 1.2-3 7.1-6.8 2-2.8 2.7-7.8 4.2-7.7 5.7-16.1 2.7-4.7 3-3 2.5-1.7 2.2-1.1 1.6-1.4 0.6-3 1.2-2.8 5.1-4 1.2-3 0.6-10.1 0.9-2.8 2.7-2.6 11.3-13.2 5.8 1.9 4 3.5 2.7 6.3 1 7.6 4.5 5.4 11.9 3.5 4.3 3.6 3.2 5 2 4 0.1 4 1.2 3.3 4.3 0.8 5.4 3.5 0 1.4z'
			}, {
				'name': 'Trender 2',
				'id': 'chiayi-city',
				'path': 'M573.8 836.5l9.3-1.6 7.8-0.7 5.6 2.1 4.1 2.2 2.5 4 2.5 6.8-3 2.2-4.5 0.6-6.8 2.7-7.3-1.7-7-4.5-6.1-2.4-0.9-5.6 3.8-4.1z'
			}, {
				'name': 'Trender 3',
				'id': 'chiayi-county',
				'path': 'M499.6 893.2l-1.8 1.4-0.4-1.1 2.4-3.1 0.9-2.4 1.1-1.5 0.6 0.5 0.1 1.1-1.4 2-1.5 3.1z m2.2-12.6l-0.7-0.7 2-3.8 0.9-0.4-0.5 1.9-1.7 3z m4.9-9l-0.1-4.4 0.5 0.4 0.1 2.9-0.5 1.1z m1.4-9.7l-0.8 1.6-0.5-2 1.3 0.4z m-1.3-6.1l-0.5 1.3-1.3-2.1 1.8 0.8z m-29.8 1l-3.2 1.6 3.8-5.4 13.9-14.1 10.6-13.5 2.5-0.8-9 14.7-4.5 4.5-2.9 3.5-3.8 3.8-3 2.1-4.4 3.6z m189.5-51.1l6.1 0.7 6.8 2.6 4.1 1.2 5.1 2.8-0.3 5.3-3 5.1 1.2 4.8 2.7 6.5 0.4 5.9 1.1 3.8 7.6 1.4 25.6 0.2 0.9 0.2-18.5 9.4-8.5 6.8-3.6 6.8-4.2 5-7.7 4.3-7.9 6.1-4.5 5.4-12.3 7.3-5.8 0.6-6.9-0.7-3.6 3.5-0.1 5 1.4 4.5 1 6.7-8.4-1-3.7-1.1-5 0.6-5.3 2.4-3.8 0-4.5-3.5-1.6-4.6 1.8-14.2-1-7.5-9.9-10.1-1.7-5.1-2.1-4.2-4-2.4-7.2-2.4-8.5 0.5-15.2 2.8-7.8 3.5-6.1 4.6-4.7 4.8-6.6 5.1-5.8 3.6-2.5 4.9-6.2 2.8-7.2-1.8-8.9-1.3-5.2-2 3.8-0.3 3.3-1.4 1.4 0.5-0.9-3.2-2.2 1.6-1.8-0.5-2.5-0.1 0-3.3 2.4-5.6 3.7-0.3 5.4 0.1-3.7-10.5-4.1-8 1.9-3.7 0-1.9-3.1-1.5 0.4-1.8 1.8-2 0.9-2.6 4-5.2-8.5 0.5-0.2-8.7 11.6-1.4 8.3 4.7 6.1 0.1 3.9-3.2 1.7-4.9 2.1-3 5.3-0.8 7-5.7 4.4-2.4 3.8-3.8 16.3-9.4 7.2-2 12.6-2.3 6.9-0.4 5.3 4.6 5 5.9 12.6 4.6 3.7-0.5 8.3-2.4 4.7 3.4 2.4 3.9 6.3-0.6 11.7-2.4 4-1.3 0-3.4 0.3-5 0.5 0z m-92.7 30.8l-3.8 4.1 0.9 5.6 6.1 2.4 7 4.5 7.3 1.7 6.8-2.7 4.5-0.6 3-2.2-2.5-6.8-2.5-4-4.1-2.2-5.6-2.1-7.8 0.7-9.3 1.6z'
			}, {
				'name': 'Trender 4',
				'id': 'hualien-county',
				'path': 'M935.4 601.5l0.6 0.8 1.6 2.9 0.2 1.1-1.4 2.4-5.8 5.7-6.2 8.6-4.7 3.7-1.4 2 0.7 2.1-0.9 1.5-6.6 5.1-2.5 2.4-2.8 6-2.9 12.2-7.4 10.9-1.5 4.4 0.2 4.7 1.8 5.2 1.5 2.3 1.3 1 0.8 1.4 0.1 3.2-1.1 3.6-3.7 5.8-0.7 3.5-0.4 6.4-3.2 16.3-6.4 17-8 40.1-4.8 9.8-11 64.1-3.5-1-10.8 5.2-3.9 5.4 1.7 6.9 0.6 6.9-3.6 6.9-3.4 5.2-2.7 6.6-2.4 8.4-3.7 7.7-4.8 13.2-3.1 6.1 0.1 6.7-0.9 6.2-6.5 3.7-8.2-1.1-11.7-9.7-9.2-16-5.7-1.5-6.3-0.9-5-4.8-6.1-2.9-7.8-2.8-5-8.1-1.2-7.4-0.3-2.5-2.8-7.6-6.3-5.2-5.6-3.6-1-4 1.4-3.2 5.6-2.4 3-5-1.9-5.8 6-3.5 3.1-2.8-1.7-6.2 1.5-2.7 1.5-4 5.2-3.9 7.4-1.6 7.4-0.3 5.3-4.7 1.3-8.5 4-5.2 7.6-2.8 4.5-3.1 1.6-5.1 3.2-12.6 1.2-8.4-0.9-7.2-1.2-5.4-3.2-4.1-2.1-4 5.7-9.4 0.2-3.7 2.5-7 3.9-8.5 3-8.8 1.6-9.9 0.6-7.6-1.8-4.5-2-3.3 2.3-7.6 5.1-10.7 8-10.4 0.3-3.9-1.5-4.5-5.2-3.4-2.9-3.1-0.2-9.9 3.7-2.9 6.6-2.2 5.2-2.4-0.2-3.7-1.4-6.2 2.8-2 1.2-2.1 3.4-1.7 3.1-3.8 1.3-5.1 3-5 7.5-4.7 2.4-6.2 0.4-4.2 4.7-4.9 2.5 2.1 6.5 3.1 15 3.8 8.3 3.2 6.5 0 4.9-4.5 2.4-6 3.8-0.9 18.5 11.1 11.1 1.7 1.1 0z'
			}, {
				'name': 'Trender 5',
				'id': 'hsinchu-city',
				'path': 'M724.3 489l-0.2 0.2-4.6 1.1-4.4-1.7-2.7-3.8-4.3-2.6-6.9-2.7 1.2-4.1 5.5-11.4 2.2-3 0.7-1.5 0-1.7-0.7-1.9-1.1-2.2 1.5-3 1.8-1.8 8.3 3.6 15.1 4.8 5.4 2.8 3.8 3.9 1.9 3.7-1 3.6-2.4 1.4-5.1 0.9-5.9 2.4-3.4 4.3-2.3 5.6-2.4 3.1z'
			}, {
				'name': 'Trender 6',
				'id': 'hsinchu-county',
				'path': 'M843.1 523.6l-2.3 6.5-1.4 4.7 0.6 4.4-3.8 5.8-14 14.2-4.3 10.5-2.8-0.8-10.6 1-0.8 0.6-0.6-4.9-4.6-7.8-3.3-3.3-1.3-4.4-5-4-12.5 3.2-4.8-0.5-6.8 0.5-7.7 2.1-4.1-1 0.9-5.1 1.3-4.6-1-4-1-2.9 1-3.1 0.8-3.5 0.3-3.9-0.7-5.2-3.9-3.4-12.1-5.7-6-4.5-3.9-4.4-4.4-11.1 2.4-3.1 2.3-5.6 3.4-4.3 5.9-2.4 5.1-0.9 2.4-1.4 1-3.6-1.9-3.7-3.8-3.9-5.4-2.8-15.1-4.8-8.3-3.6 1.5-2.3 0.6-3.9 0.9-2.9 2-2.9 2.7-2.1 2.5-0.9-0.2-1.2 0.7-2.9 2.2-6.1 2.1-3.3 3.1 1.1 13.7-1 4.6 3.1 4 8.7 5 2 4.3 1.2 4.1 2 6.8 2.2 3.6\n\t\t\t4.2-1.1 5.8 3.5 3.7 6.5 2.1 4.2 3.1 3.1 3.1 3.8 0.7 3.9-0.3 3.4 3.5 2.6 4.5 4.3 2.2 3.4 2.6 0.4 5 1.6 7.3-1.9 7.8-4.6 6.5 0.5 4.3 5.2 3.9 6.2 3.8 5.5 0.9 4 2.9 7.3 4.1 4.8 2.2z'
			}, {
				'name': 'Trender 7',
				'id': 'kaohsiung-city',
				'path': 'M739.8 857.3l1.9 5.8-3 5-5.6 2.4-1.4 3.2 1 4 5.6 3.6 6.3 5.2 2.8 7.6 0.3 2.5-15.6 3.8-6.4 4.1-4 3.9-7.8 5.1-0.9 5.7 2.3 6-2.7 4.9-7.4 4-0.8 6.9 2.1 9.9-3 13.2-0.1 11.2-4.3 5.9-8.5 7.2-2.3 9.8 1.3 8.1 3 4.6 6.2 6.4 1.2 4.9-3.9 0.5-5.2-0.9-4.3 0.2-8.5 6.7-5.9-5.5-7.6-8.9-7.2 1.8-6.6 5.9-13.1-6.6-9.4 4.5-6.4 7.1-8 2.8-17.8-1.1-1.7 4.9-1.3 7.2-2.6 7.9 0.5 7-0.1 9.5-5.7 21.2-0.1 7.1 2.7 7.5 0.4 8.2-8.1 20.5-2.6-1.1-1.6 0.1-1.8 0.7-2.2 0-13-10.2-12.1-17.1 12.7 15.4-1.5-7.4-3.8-7.2-5.3-6-9-8.4-3.5-4.2-1.6-4.8 2.2-4.6 1.1-4.1-1.5-5.8-2.7-5.6-4.9-7.7-4.6-10.2-1-4.5 0.1-3 1.5-3.6 0.3-2.4-0.5-1.2-2.7-2.3-0.5-2.3-2.9-4.9-0.7-2-2.1-13.6 6.1-3.7 0.2 0.5 3.9 8.6 4.8 2.5 15.7 2.2 8.2-0.9 8.4 1 4.2-1.5 3.5-2.6 6.5-2.6 6.3-4.4 2.4-5.5 3-5.2 5.3-7.1 6.1-6.4 6.5-5.4 7.4-7.2 6.5-8.4 10-17 10.4-15.1 2.3-6.6-1-6.7-1.4-4.5 0.1-5 3.6-3.5 6.9 0.7 5.8-0.6 12.3-7.3 4.5-5.4 7.9-6.1 7.7-4.3 4.2-5 3.6-6.8 8.5-6.8 18.5-9.4 4.3 1 5.8 2.2 4.2 5.9 0.7 2z'
			}, {
				'name': 'Trender 8',
				'id': 'keelung-city',
				'path': 'M934.8 365l-0.3 11.9 0.2 3 3.7 3.9-0.4 2.5-2.5 1.8-4 1.5-5.1-0.6-10.6-4.4-3-2.2-3.7-3.4-2.8-3.5-1.7-3.5-2.9-3.7-0.6-2.9 3.2-2.2 7.2-3.1 4.4-2.9 1.4 0.9 2.4 2.7 3.9 1.4 11.2 2.8z'
			}, {
				'name': 'Trender 9',
				'id': 'miaoli-county',
				'path': 'M724.3 489l4.4 11.1 3.9 4.4 6 4.5 12.1 5.7 3.9 3.4 0.7 5.2-0.3 3.9-0.8 3.5-1 3.1 1 2.9 1 4-1.3 4.6-0.9 5.1 4.1 1 7.7-2.1 6.8-0.5 4.8 0.5 12.5-3.2 5 4 1.3 4.4 3.3 3.3 4.6 7.8 0.6 4.9-3.7 2.6-1.8 5.6-4.9 2-5.3-0.1-4.2 3-4.6 4.4-5.9 3.2-11.6 9.2-6.8 2.9-8.9 4.7-5.4-2.1-5-5.6-6-2.4-9.9-0.8-5.5 3.3-0.9 7.4-5.2 2.8-12.1 0.7-11.6-6.7-6.6-1.2-7.3-3.6-15.1-11.1-6.3-5.5-4.7-5-9.2-14.3 7.2-8.1 1.9-4 0.9-6.6 2.2-5.6 5.9-10.4 1.6-6.3 1.5-2.7 6.8-2 1.9-2.1 1.1-2.6 1.4-2.5 4.2-4.3 4.6-3.4 5.6-1.5 7.1 1.3-0.9-5.4 2.7-3.7 3.7-3.8 1.9-5.7 0.8-1.9 3.6-1.8 0.3-1.3 6.9 2.7 4.3 2.6 2.7 3.8 4.4 1.7 4.6-1.1 0.2-0.2z'
			}, {
				'name': 'Trender 10',
				'id': 'nantou-county',
				'path': 'M825 627.6l1.4 6.2 0.2 3.7-5.2 2.4-6.6 2.2-3.7 2.9 0.2 9.9 2.9 3.1 5.2 3.4 1.5 4.5-0.3 3.9-8 10.4-5.1 10.7-2.3 7.6 2 3.3 1.8 4.5-0.6 7.6-1.6 9.9-3 8.8-3.9 8.5-2.5 7-0.2 3.7-5.7 9.4 2.1 4 3.2 4.1 1.2 5.4 0.9 7.2-1.2 8.4-3.2 12.6-1.6 5.1-4.5 3.1-7.6 2.8-4 5.2-1.3 8.5-5.3 4.7-7.4 0.3-7.4 1.6-5.2 3.9-1.5 4-1.5 2.7 1.7 6.2-3.1 2.8-6 3.5-0.7-2-4.2-5.9-5.8-2.2-4.3-1-0.9-0.2-25.6-0.2-7.6-1.4-1.1-3.8-0.4-5.9-2.7-6.5-1.2-4.8 3-5.1 0.3-5.3-5.1-2.8-4.1-1.2-6.8-2.6-6.1-0.7-2.6-3.5-8.2 0.9-6.8 2-5.8-2.5-4-4.7 0.9-5.7 1.9-5.2-1-7.7 1-7.2 2-4.7-1.9-7.2 2.4-1.6 2.5-2.3 3.8-1.5 1-3.5-5.6-2.9-3.9-1.4-3.6-3.3-2.1-6.3 0.9-13.4 1.2-6.6 0.1-5.7 1.6-5.4 2-4.6-0.5-4 1.2-2.9 4.3-1.6-0.1-3.6 4.3 0.2 17.9 2.5 4.2-0.6 5-4.8 7.6-14.4 3.7-8.5 6.4-3 10.1 1.4 6-0.2 5.8-7.7 3-1.9 8.9 6.7 3.5-0.9 2.6-5.5 4.7-3.9 6.6 0.1 5-1.9 7.9-7.6 5.1-2.9 4.4-0.8 8.8-4.7 6.2-0.2 6.3-1 11.1-4.4 4.6-0.3 4.7 1 13.4 1.3z'
			}, {
				'name': 'Trender 11',
				'id': 'new-taipei-city',
				'path': 'M915.9 357.2l-4.4 2.9-7.2 3.1-3.2 2.2 0.6 2.9 2.9 3.7 1.7 3.5 2.8 3.5 3.7 3.4 3 2.2 10.6 4.4 5.1 0.6 4-1.5 2.5-1.8 0.4-2.5-3.7-3.9-0.2-3 0.3-11.9 34.6 8.4 3.2 2-1.6 3.7-0.4 2.9 0.7 5.2 2.4 8.7 2.6 4.1 2.2 0.9 7-1 3.6 0.4 4.2 1.1 3.7 1.9 2 2.5-8.7 4.3-0.8-1.1-3.3-1.9-5.9 1.3-8.4 4.4-3.7 2.5-11.2 2.3-1.4 2.9 2.5 3.6-1.6 3.8-4.6 2.9-3.5 1.2-3.7 2-3.3 4.1-3.1 5-5 3.6-6.2 1.9-13.5 8.1-13 5.3-3.8 2.3-4.7 4-2 4.9 0.2 4.2 1 3.2 0.4 2-3.9 2.8-6.6 3.2-5 3.5-3.8 3.3-4.9 1.8-5.7 1.6-2.5-5.4-8.9-8.5-1.4-5.6-0.8-5.2 3.1-3.7 1.5-5.3-8.5-12.3-5-2-7.4 0.4-5.1-2.9 1.3-6.7-1-5.1-5.4-5.1-1-5.1 1-5.8-0.2-6.2 3.7-4 13.1-3.9 3.3-3.4 1-4.2-0.5-4.1-5.1-7.5-4.2-2.2-4.1-1-3.2-2.8-4.7-3.1-6.3-3-4.2-4.6 11.2-2.1 4.8-1.8 6.1-5.2 1.9-0.9 2.2-0.4 3.1 0 3.5 1.1 1.9 2.7 1.2 2.7 1.5 1.6 3.5-1.4-3.6-5.7-5.8-5.9-3.1-1.9 0.9-2.7 1.8-1.5 1.9-0.9 0.8-1 2.1-5.1 3.2-5.9 6.6-5.9 9.6-4.9 11-2.5 10.8 1.2 4.5 3.4 10 14.2 3.6 7.4 1.2-0.5 2.7-0.7 3-0.4 2.2 0.6-0.1 0.9-1.1 1.3-1 1.8 0.1 2.2 1.1 1.2 2.3 1.7z m-18.5 56l7.6-9.6 2-4.3-3.8-3.2-4.6-2.6-0.1-5.1 1.6-6.6-1.6-4.4-3.9-3.5-2.5-10-3.2-6.8-0.4-3.5 0.5-3.6-2.1-2.2-3.8-1.2-4 2-2.9 2.5-10.9 6.4-3.6 4-2.1 4.6-1.8 2.4-1.6 3 3.8 4.2 5.7 5.5 1.2 6.3-1.5 7.4 3.9 6.7 5.8 4.6 3.8 4.3 3.7 3.3 4.8 1 5.8 0.1 4.2-1.7z'
			}, {
				'name': 'Trender 12',
				'id': 'penghu-county',
				'path': 'M320.7 926.5l-1.8 0.9-1.3-1.5-1.5-4.7 1-1.2 3.8-1.3 2.7 0.7 0.1 2.1-0.2 1.6-1.2 1.2-1.6 2.2z m-1.2-12l-1.7 3.1-2.2-0.6-2-2.5-0.3-2.5 1.2-1.1 3.2 0.5 1.8 3.1z m48.8-3.2l-0.4 0.1-1.2-1.5 0.3-0.6 2.5-0.2 0.8 2-2 0.2z m14-4.6l0.3 0.2 2.3 0 0 1.3-1.1 1.5-0.7 1.8-1.1-2.8 0.3-2z m-33.5-29.6l-1.7 0.1-3 1.8-0.4-0.4 0.4-1.3 1.1-1.5 0.7-0.6 1.6-0.3 1.5 0.9-0.2 1.3z m-8.4-6.7l0.1 2.3 0.5 1.6 1.4 1.2-0.6 1.6-1.2 1.2 0.6 1.9-1.5 0.6-3.1-0.3-1.6-0.7 1.4-3.1-0.2-4.2-0.9 0.6-2 0.6-0.6-2.3 2.1-5.1 1.6-0.3 2.7 3.6 1.3 0.8z m-49.5-5.7l2.4 0.6 0 1.6-0.6 0.9-2.1 0.6-1.1-1.1 1.4-2.6z m58.5-24.8l-3.2 2.1-2.1 0.6-2.2 1.1-1.3-0.5-0.3-1.8 0.7-0.6 1.8 0.5 4-2 2.6 0.6z m19.5-28l-0.6 1.3 4-1.3 3.1 0.4 2.3-0.2 1.6-2.7 4.7 8.7 1.2 4-0.5 3-2-2-2.5-1.7-2.8-0.5-4 2.2-2.8 0.3-1.4 0.8-0.7 1.5-1.1 4.1-0.7 1.2-4.7 2.7-4.8 0.7-4.8-1.9-4.9-4.9 1.3-2.5 2.7 3.2 4 0.9 4.3-1.2 3.5-2.9-2.4-0.9-2-1.2-1.5-1.6-1.4-2.2-0.8 1.4-1 0.6-0.3-4 0.3-4 1.8 0 2.1 0.5 7.4-4.6 4.6-1.6-1.2 4.4z m-39.9 9.3l-3.8 0 0.7-2.1 1.2-1.3 1.9-0.5 2.5-0.2 2.2-0.9 0.6-2 0.1-4.8 3.2-10.4 3.1-3 4.2 3.6-2.5 1.5-1.7 3.6-2.8 8.5-0.1 2.2 0.7 2-0.3 1.3-3 0.5-2.2 0.1-1.5 0.3-1.3 0.6-1.2 1z m33.8-17.9l-2.2 0.7-1.1-1.5-0.9-3.5-2-2.9-4.3-4.3 5.5-4.1 3.3 1.7 3.2 2.8 1.4 2.9-2.5 2.4 1 3.5-1.4 2.3z m2.6-30.4l-0.3 0.9-1.3-3-0.2-1.4 1.8-1.5 1.6-3 0.5 1.1 2.5 1.4-0.4 1.8-2.2 1.3-2 2.4z'
			}, {
				'name': 'Trender 13',
				'id': 'pingtung-county',
				'path': 'M569.4 1166l2 2.9-0.3 1-2.7 1.8-5 4.3-0.9-3.3 1.4-2.7 2.8-3.6 2 0 0.7-0.4z m126.7-143.3l3.5 6.6 0.7 4.9 5.4 1.3 5.5 3.6-2.8 13.8-0.1 5.2-2 5-9.8 4.1-4.8 2.7-7.6 1.6-5.4 4.5-2.4 6.6-3.7 6.6-3 7.5-0.8 14.7 1.2 6.5 2 6.1 1.1 7.1 0 5.4 2.6 5 4.6 5.6-2.5 3.8-5.3 3.2-2.1 3.9-0.5 4.5 2.7 3.9 3.4 1.7 3.1 4.4-0.1 5.7 0.6 6.1 3.2 5.9 4.6 4.9 10.2 4.7 4.5-0.3 0.9 51.6-1.6 7.3-2.5 6-3.4 2.5-4 3.7 0.1 8.3 1.5 9.2-0.4 5.9-4.5-6.8-6.8-5.2-7.8-3.5-8-1.9-0.3 6.6-2.3 2.3-3.4-0.8-3.7-3.1-0.2-2.4 1.3-7-5.5-9.2-0.5-2.4 0.1-2.1 0.4-3.2 0-10.8 0.5-3.1 2.5-3.6 0.5-3-19.9-51.6-1.6-2.9-5.5-6.8-4.4-9.9-2-2.8-8.2-6.5-5.4-3-0.9-3.7-0.7-1.3-4.4-2.9-10-4.8-4.5-3.1-4.8-4.2-2.6-1.6 8.1-20.5-0.4-8.2-2.7-7.5 0.1-7.1 5.7-21.2 0.1-9.5-0.5-7 2.6-7.9 1.3-7.2 1.7-4.9 17.8 1.1 8-2.8 6.4-7.1 9.4-4.5 13.1 6.6 6.6-5.9 7.2-1.8 7.6 8.9 5.9 5.5 8.5-6.7 4.3-0.2 5.2 0.9z'
			}, {
				'name': 'Trender 14',
				'id': 'taichung-city',
				'path': 'M803.7 570.5l0.8-0.6 10.6-1 2.8 0.8 3.6 1-0.6 5.5 1.4 3.8 4.9 1 4.4 2.6 3.7 2.5 4-0.6 4.7-2.3 4.9 0 5.9 4.7-4.7 4.9-0.4 4.2-2.4 6.2-7.5 4.7-3 5-1.3 5.1-3.1 3.8-3.4 1.7-1.2 2.1-2.8 2-13.4-1.3-4.7-1-4.6 0.3-11.1 4.4-6.3 1-6.2 0.2-8.8 4.7-4.4 0.8-5.1 2.9-7.9 7.6-5 1.9-6.6-0.1-4.7 3.9-2.6 5.5-3.5 0.9-8.9-6.7-3 1.9-5.8 7.7-6 0.2-10.1-1.4-6.4 3-3.7 8.5-7.6 14.4-5 4.8-4.2 0.6-17.9-2.5-4.3-0.2 0-1.4-5.4-3.5-4.3-0.8-1.2-3.3-0.1-4-2-4-3.2-5-4.3-3.6-11.9-3.5-4.5-5.4-1-7.6-2.7-6.3-4-3.5-5.8-1.9 0.6-0.8 0.8-3.3 3.3-2.7 2.2-6.5 2.7-12.3 9.3-16.1 2.8-9.9 3.4-5.5 13.3-14.8 9.2 14.3 4.7 5 6.3 5.5 15.1 11.1 7.3 3.6 6.6 1.2 11.6 6.7 12.1-0.7 5.2-2.8 0.9-7.4 5.5-3.3 9.9 0.8 6 2.4 5 5.6 5.4 2.1 8.9-4.7 6.8-2.9 11.6-9.2 5.9-3.2 4.6-4.4 4.2-3 5.3 0.1 4.9-2 1.8-5.6 3.7-2.6z'
			}, {
				'name': 'Trender 15',
				'id': 'tainan-city',
				'path': 'M483.8 968.3l-0.6 1.2-2.3-2-1.7-4.2 0.3-1.3 0.7 0 0.9 1.2 0.7 1.9 2.1 2.2-0.1 1z m0.5-27.6l-2.9 6.8 3.9-13.3 0.6 0.1-1.6 6.4z m3.5-12.8l3.5-9.9 0.5-0.1 0.2 1.9-4.2 8.1z m6.3-22.5l-0.4 2.4 0.6-10.6 0.5 0.2-0.7 8z m149.5 11.5l-2.3 6.6-10.4 15.1-10 17-6.5 8.4-7.4 7.2-6.5 5.4-6.1 6.4-5.3 7.1-3 5.2-2.4 5.5-6.3 4.4-6.5 2.6-3.5 2.6-4.2 1.5-8.4-1-8.2 0.9-15.7-2.2-4.8-2.5-3.9-8.6-0.2-0.5-6.1 3.7-1-6.3-1.8-3.6-3.9-3.9 4.7-3.4 2.7-6.1-1.1-5.2-6.3-0.9-1.2 1.8-1.1 3.4-1.8 2.7-3.3-0.1-1.3-2.3 0.5-7-0.8-2.4-4.1-1.8-2.3 2.1-1.8 2.9-2.8 0.7-2.9-2.5-0.7-3.5 0.7-3.4 1.1-2.3 3-1.6 3.7-0.5 3.1-1 1-3-1.4-1.5-9.4-2.4 0-1.9 7.9-0.1-0.8-2.6-4.3-3.7-2.8-3.2 0.7-4 2.5-1.5 2.7-0.9 1.4-2.5-0.8-3.9-1.4-3.2 0.9-3 1.4-3.7 2.3-2.6-0.5-2.3 0.5-2.3 3.3-9 1.6-1.7 2.6-0.6-3.7-2.5 1.6-4.1 5.2 2 8.9 1.3 7.2 1.8 6.2-2.8 2.5-4.9 5.8-3.6 6.6-5.1 4.7-4.8 6.1-4.6 7.8-3.5 15.2-2.8 8.5-0.5 7.2 2.4 4 2.4 2.1 4.2 1.7 5.1 9.9 10.1 1 7.5-1.8 14.2 1.6 4.6 4.5 3.5 3.8 0 5.3-2.4 5-0.6 3.7 1.1 8.4 1z'
			}, {
				'name': 'Trender 16',
				'id': 'taipei-city',
				'path': 'M897.4 413.2l-4.2 1.7-5.8-0.1-4.8-1-3.7-3.3-3.8-4.3-5.8-4.6-3.9-6.7 1.5-7.4-1.2-6.3-5.7-5.5-3.8-4.2 1.6-3 1.8-2.4 2.1-4.6 3.6-4 10.9-6.4 2.9-2.5 4-2 3.8 1.2 2.1 2.2-0.5 3.6 0.4 3.5 3.2 6.8 2.5 10 3.9 3.5 1.6 4.4-1.6 6.6 0.1 5.1 4.6 2.6 3.8 3.2-2 4.3-7.6 9.6z'
			}, {
				'name': 'Trender 17',
				'id': 'taitung-county',
				'path': 'M889.2 1263l-5.5 1.7-7.3-2.9-6.8-4.8-3.9-3.7 1.2-2.7-0.1-2.5-1-2.4-1.7-2.1 19.5 0 0 1.8-1.3 3.5-0.4 2.9 0.9 2.5 4.7 3.5 2 2.5-0.3 2.7z m-24-177.6l-0.1 1.1-3.4-0.4-0.4-0.6-2.7-1-2.8-4.9-1.4-4.3 0.6-0.6 10-0.7 1.1 0.6 0.8 2-0.8 3.9-0.9 1.6-0.4 1.7 0.4 1.6z m-163.1 114.1l-4.5 0.3-10.2-4.7-4.6-4.9-3.2-5.9-0.6-6.1 0.1-5.7-3.1-4.4-3.4-1.7-2.7-3.9 0.5-4.5 2.1-3.9 5.3-3.2 2.5-3.8-4.6-5.6-2.6-5 0-5.4-1.1-7.1-2-6.1-1.2-6.5 0.8-14.7 3-7.5 3.7-6.6 2.4-6.6 5.4-4.5 7.6-1.6 4.8-2.7 9.8-4.1 2-5 0.1-5.2 2.8-13.8-5.5-3.6-5.4-1.3-0.7-4.9-3.5-6.6 3.9-0.5-1.2-4.9-6.2-6.4-3-4.6-1.3-8.1 2.3-9.8 8.5-7.2 4.3-5.9 0.1-11.2 3-13.2-2.1-9.9 0.8-6.9 7.4-4 2.7-4.9-2.3-6 0.9-5.7 7.8-5.1 4-3.9 6.4-4.1 15.6-3.8 1.2 7.4 5 8.1 7.8 2.8 6.1 2.9 5 4.8 6.3 0.9 5.7 1.5 9.2 16 11.7 9.7 8.2 1.1 6.5-3.7 0.9-6.2-0.1-6.7 3.1-6.1 4.8-13.2 3.7-7.7 2.4-8.4 2.7-6.6 3.4-5.2 3.6-6.9-0.6-6.9-1.7-6.9 3.9-5.4 10.8-5.2 3.5 1-4.6 26.4-2.2 4.9-7.1 9.4-2.6 4.9-2.1 6.1-1.5 11.4 0.2 10.2-1 9.7-4.9 9.9-2.1 2.1-4.7 3.5-2.2 2.2-1 2.3-1.7 5.8-4.8 8.4-2.9 13.1-2.1 5.9-10.3 14.8-1.3 2.7-13.9 11.8-3.3 3.8-0.4 2.7 0.6 6.2-0.2 2.8-1.2 3.2-2.2 3.5-4.7 6.1-4.7 4.5-16.1 10.7-10.8 11.9-2.7 1.4-2.1 2.7-5.2 13.5-2.6 5-8 10-3.3 6-1.9 12.3-4.8 16.8-9.5 16.7-1.4 5.7-1.7 16.1 0.3 14.7z'
			}, {
				'name': 'Trender 18',
				'id': 'taoyuan-city',
				'path': 'M861.8 498.8l-3.1 0.9-5.4 3.9 3.1 12.4-2.2 3.8-3.4 1.3-3.3-0.6-3.9 1.6-0.5 1.5-4.8-2.2-7.3-4.1-4-2.9-5.5-0.9-6.2-3.8-5.2-3.9-0.5-4.3 4.6-6.5 1.9-7.8-1.6-7.3-0.4-5-3.4-2.6-4.3-2.2-2.6-4.5-3.4-3.5-3.9 0.3-3.8-0.7-3.1-3.1-4.2-3.1-6.5-2.1-3.5-3.7 1.1-5.8-3.6-4.2-6.8-2.2-4.1-2-4.3-1.2-5-2-4-8.7-4.6-3.1-13.7 1-3.1-1.1 8.9-14.2 6.9-8.3 7.2-6.1 18.4-6.1 4.3-2.7 3.7-3.2 4.5-2.5 9-3.2 20.1-3.6 4.2 4.6 6.3 3 4.7 3.1 3.2 2.8 4.1 1 4.2 2.2 5.1 7.5 0.5 4.1-1 4.2-3.3 3.4-13.1 3.9-3.7 4 0.2 6.2-1 5.8 1 5.1 5.4 5.1 1 5.1-1.3 6.7 5.1 2.9 7.4-0.4 5 2 8.5 12.3-1.5 5.3-3.1 3.7 0.8 5.2 1.4 5.6 8.9 8.5 2.5 5.4z'
			}, {
				'name': 'Trender 19',
				'id': 'yilan-county',
				'path': 'M982.4 448.9l2.1 0.5 1.6 2.2-0.7 2.3-3.8-0.1-1.4-0.8-1.7-2.7 0.9 0.3 3-1.7z m-47 152.6l-1.1 0-11.1-1.7-18.5-11.1-3.8 0.9-2.4 6-4.9 4.5-6.5 0-8.3-3.2-15-3.8-6.5-3.1-2.5-2.1-5.9-4.7-4.9 0-4.7 2.3-4 0.6-3.7-2.5-4.4-2.6-4.9-1-1.4-3.8 0.6-5.5-3.6-1 4.3-10.5 14-14.2 3.8-5.8-0.6-4.4 1.4-4.7 2.3-6.5 0.5-1.5 3.9-1.6 3.3 0.6 3.4-1.3 2.2-3.8-3.1-12.4 5.4-3.9 3.1-0.9 5.7-1.6 4.9-1.8 3.8-3.3 5-3.5 6.6-3.2 3.9-2.8-0.4-2-1-3.2-0.2-4.2 2-4.9 4.7-4 3.8-2.3 13-5.3 13.5-8.1 6.2-1.9 5-3.6 3.1-5 3.3-4.1 3.7-2 3.5-1.2 4.6-2.9 1.6-3.8-2.5-3.6 1.4-2.9 11.2-2.3 3.7-2.5 8.4-4.4 5.9-1.3 3.3 1.9 0.8 1.1-12 6-5.5 4.7-18.7 22.8-2.9 4.8-2.3 6.8-1.6 7.7-0.5 7.6 0.3 7.4 3.3 15.5-0.2 4-1.5 3.9 0.2 8.1 3.5 6.3 6.5 4 7.6 1.4 0 1.8-3.2-0.3-3.1 0.3-2.6 0.8-1.9 1.4 2.7 5 1.3 6.5-0.8 5.6-6 3.4-0.4 2.5 0.7 3 1.7 2.7 0.6 2.8-2.5 2.4-6.2 3.6-7 8-0.3 3.2 0.5 7-1.2 2.6-1.3 2.3-0.8 3.2-0.5 6.4-0.6 1.6-1 1.3-0.5 1.4 1.3 1.9z'
			}, {
				'name': 'Trender 20',
				'id': 'yunlin-county',
				'path': 'M642 760.2l1.9 7.2-2 4.7-1 7.2 1 7.7-1.9 5.2-0.9 5.7 4 4.7 5.8 2.5 6.8-2 8.2-0.9 2.6 3.5-0.5 0-0.3 5 0 3.4-4 1.3-11.7 2.4-6.3 0.6-2.4-3.9-4.7-3.4-8.3 2.4-3.7 0.5-12.6-4.6-5-5.9-5.3-4.6-6.9 0.4-12.6 2.3-7.2 2-16.3 9.4-3.8 3.8-4.4 2.4-7 5.7-5.3 0.8-2.1 3-1.7 4.9-3.9 3.2-6.1-0.1-8.3-4.7-11.6 1.4 4.6-5.2-0.2-16.4 0.7-12.3 2.8-9.8 4.3-7.7 1.3-10 2.3-8.8 1.3-3 6.1-8.1 1.1-2.8 0.7-1.5 5.6-4.3 0.8-1.6 7.6 4.4 22-2.6 7.6 0.4 6.6 1.8 11.6 4.4 19.7 2.3 12.2 6 5.8-0.1 12 2.4 1-0.7z'
			}]

		}

*/