import {
  CLEAR_CHARACTER_DETAILS,
  CLOSE_CHARACTER_DETAILS,
  OPEN_CHARACTER_DETAILS,
  useDetails
} from '@/state/Details';

export function useDrawer() {
  const { state, dispatch } = useDetails();
  if (!state.data?.selected)
    return {
      open: false,
      id: undefined,
      openDrawer: () => {},
      closeDrawer: () => {}
    };

  const openDrawer = () => {
    dispatch &&
      dispatch({
        type: OPEN_CHARACTER_DETAILS
      });
  };
  const closeDrawer = () => {
    dispatch &&
      dispatch({
        type: CLOSE_CHARACTER_DETAILS
      });
    dispatch && dispatch({ type: CLEAR_CHARACTER_DETAILS });
  };
  return {
    open: state.data.open,
    id: state.data?.selected,
    openDrawer,
    closeDrawer
  };
}
