import React from 'react';

import classes from './burgerIngredient.css';

const burgerIngredient = (props) => {
	let ingredient = null;

	switch (props.type) {
		case('bread-bottom'):
			ingredient = <div className={classes.BreadBottom}></div>;
			break;
		case ('bread-top'):
			ingredient = (
				<div className={className.BreadTop}>
					<div className={classes.Seeds1}></div>
					<div className={classes.Seeds2}></div>
				</div>
			);
			break;
		case ('meat'):
			ingredient = <div className={className.Meat}></div>;
			break;
		case ('cheese'):
			ingredient = <div className={className.Cheese}></div>;
			break;
		case ('bacon'):
			ingredient = <div className={className.Bacon}></div>;
			break;
		case ('salad'):
			ingredient = <div className={className.Salad}></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
};

export default burgerIngredient;