const initial_state = { 
	name:null
};

export default (state = initial_state,action) => {
	console.log(action)
	switch (action.type){
		case 'new_name':
			return { ...state, name:action.payload };
		
		default:
			return state
	}
}
