import _ from 'lodash';
import * as constants from '../constants/constants';
import foods from '../data/Diogenes-GI-Database-for-Website-UK.json';

export default utils = {
    filterFoodsBy(searchTerm, sortBy) {
        const filtered_foods = _.filter(foods, (food) => {
            return food["Food name"].toLowerCase().indexOf(searchTerm) > -1;
        });
        switch (sortBy) {
            case constants.SORT_BY_CHO:
                return _.sortBy(filtered_foods, "CHO (g/100g)");
            case constants.SORT_BY_GI_VALUE:
                return _.sortBy(filtered_foods, 'GI value');
            case constants.SORT_BY_GI_LOAD:
                return _.sortBy(filtered_foods, 'GL');
            default:
                return filtered_foods;
        }
    },
    getByName(name) {
        const match = _.find(foods, (food) => {
            return food["Food name"] === name;
        });
        return match;
    }
}