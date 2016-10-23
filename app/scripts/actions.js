import { actionCreator } from './rxflux';
import { Observable } from 'rxjs/Rx';
import { pluck, map, prop } from 'ramda'
import { log } from './utils';

export const loadGithubFollowers = actionCreator((payload) => {
  const url = `https://api.github.com/users/${payload}/followers`;
  console.log(payload)
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map(prop('response'))
      .map(pluck('login'))
      .do(log)
      .subscribe(
        (el) => updateFollowers(el),
        (err) => {
          console.log('Error message', err.message)
          errorMessage(err.message)
        },
        () => console.log('Compl')
      )
  };
});

export const updateFollowers = actionCreator( followers => ({
  type: 'GITHUB_FOLLOWERS_LOADED',
  payload: followers
}))

export const errorMessage = actionCreator( message  => ({
  type: 'AJAX_ERROR',
  payload: message
}))

export const changeName = actionCreator( payload => ({
  type: 'NAME_CHANGED',
  payload
}));
