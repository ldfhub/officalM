import { homeState } from './homeModel';
import { listState } from './listModel';

export interface RootState {
  home: homeState;
  list: listState;
}
