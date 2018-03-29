import { Fetch } from 'Utils';
import API from './API';

class IndexService {
    //切换语言
    getLanguage(options, callback) {
        Fetch.get(API.changeLanguage, options, callback);
    }
}

export default new IndexService();
