import { AppActions } from 'components/App/actions';
import type { ActionProps, SlotProps } from 'types/Action';
import type { ClassJobProps } from 'types/ClassJob';
import type { ViewDataProps } from 'types/Layout';
import type { URLParams } from 'types/Page';

export interface AppState {
  viewData: ViewDataProps,
  jobs: ClassJobProps[],
  readOnly: boolean,
  selectedJob?: ClassJobProps,
  showTitles?: boolean,
  showAllLvl?: boolean,
  viewAction: string,
  roleActions?: ActionProps[],
  actions?: ActionProps[],
  chotbar: {[key: string]: object},
  hotbar: {[key: string]: object}
}

interface DispatchPayload {
  action?: ActionProps,
  actions?: ActionProps[],
  encodedSlots?: string,
  hbId?: string,
  viewData?: ViewDataProps,
  roleActions?: ActionProps[],
  viewAction?: string,
  readOnly?: boolean,
  selectedJob?: ClassJobProps,
  slotID?: string,
  slottedActions?: SlotProps[],
  urlParams?: URLParams,
}

type AppActionTypes =
  AppActions.SLOT_ACTIONS
  | AppActions.SLOT_ACTION
  | AppActions.TOGGLE_TITLES
  | AppActions.TOGGLE_LVLS
  | AppActions.EDIT_LAYOUT
  | AppActions.CANCEL_EDITS
  | AppActions.PUBLISH_LAYOUT
  | AppActions.LAYOUT_SAVED
  | AppActions.LOAD_VIEW_DATA;

export type AppDispatchActions = {
  type: AppActionTypes,
  payload?: DispatchPayload;
}
