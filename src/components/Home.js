import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { testAction } from '../actions'

class Home extends Component {
	render(){
		return(
			<View>
				<Text>Hello World</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	testValue:state.sample_state.name
}

export default connect(null,{ testAction })(Home);