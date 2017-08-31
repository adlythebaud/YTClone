// A react application is made up of many different components.

// lesson 29, 4 minutes in. Explains a lot of the flow of code of what happens between index.js, API request, and video_detail.js
/*
	React is used to create and manage components
	ReactDOM is used to render to the DOM.


	Do what you can, ask for help with the other stuff.
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
/* Make sure to import SearchBar from ./components/search_bar */
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBLq_ew8B9RtSyQyOIeCL-Inyxg_Zd8104';


// why does this need to go outside of the class definition?


class App extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		videos: [],
	// 		selectedVideo: null
	// 	};
	//
	// 	this.videoSearch('iPhone 8');
	// }

	/*********************************************************************
					  YTSearch comes from youtube-api-search from NPM!!!!
	*********************************************************************/

	// videoSearch(term) {				// another callback to search new videos.
	// 	YTSearch({key: API_KEY, term: term}, (videos) => {													// => is synonymous with making a function.
	// 		this.setState({																														// setting the state causes the component to re-render.
	// 			videos: videos,
	// 			selectedVideo: videos[0]
	// 		}); 																																			// or it's like passing in data to the YTSearch() method, and saying this.setState({ videos: data }), or this.setState({videos: videos})
	// 	});
	//
	// }


	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			console.log(videos);
			// set the state here?
			this.setState({ videos: videos });
		});
	}



	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}

}


ReactDOM.render(<App />, document.querySelector('.container'));
