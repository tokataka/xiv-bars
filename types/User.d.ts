import type { ViewDataProps } from 'types/Layout';
import { UserActions } from 'components/User/actions';

export interface UserProps {
  name: string,
  id: number,
  image: string,
  layouts: ViewDataProps[]
}

export interface UserState {
  loggedIn: boolean,
  canPublish: boolean,
  layouts?: ViewDataProps[]
}

type UserDispatchPayload = {
  user?: object,
  layouts?: ViewDataProps[]
}

export interface UpdateUser {
  type: UserActions.UPDATE_USER,
  payload: UserDispatchPayload
}

export interface UpdateLayouts {
  type: UserActions.UPDATE_LAYOUTS,
  payload: UserDispatchPayload
}

export type UserDispatchActions = UpdateUser | UpdateLayouts
