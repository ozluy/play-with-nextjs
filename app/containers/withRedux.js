import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { fetchRepos } from 'data/app/actions'

const initialState = {}
const store = configureStore(initialState);
store.dispatch(fetchRepos())
const withStore = Component => {
    return class Wrapper extends React.Component {
        render(){
            return <Provider store={store}>
                         <Component {...this.props} />
                    </Provider>
        }
    }

}

export default withStore