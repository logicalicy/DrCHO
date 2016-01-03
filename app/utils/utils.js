import _ from 'lodash';
import foods from '../data/Diogenes-GI-Database-for-Website-UK.json';

export default utils = {
	filterFoodsBy(searchTerm) {
		return _.filter(foods, (food) => {
            return food["Food name"].toLowerCase().indexOf(searchTerm) > -1;
        });
	}
}