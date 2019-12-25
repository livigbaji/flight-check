import { persistState } from '@datorama/akita';
import { debounceTime } from 'rxjs/operators';

export const storage = persistState({
    preStorageUpdateOperator: () => debounceTime(2000),
    exclude: ['flights', 'cities']
});
