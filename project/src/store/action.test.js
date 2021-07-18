import {ActionCreator, ActionType} from './action.js';

describe('Actions', () => {
  it('action creator for change genre returns actual film genre', (newGenre) => {
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      payload: newGenre,
    };

    expect(ActionCreator.changeGenre(newGenre)).toEqual(expectedAction);
  });
},
);
