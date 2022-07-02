import store from '../../store/store';
import { v4 as uuid } from 'uuid';

export function useToast(passed) {
    passed.id = uuid();
    store.commit('addToast', passed);
}
