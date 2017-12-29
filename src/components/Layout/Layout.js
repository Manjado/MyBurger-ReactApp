import React,{ Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}
	//It's bad solution,because it is contrary to asynchronous nature of state
	// sideDrawerToggleHandler = () => {
	// 	this.setState({showSideDrawer: !this.state.showSideDrawer});
	// }
	//clean way
	sideDrawerToggleHandler = () => {
		this.setState( ( prevState ) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		} );
	}
	render() {
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<SideDrawer 
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
}

export default Layout;