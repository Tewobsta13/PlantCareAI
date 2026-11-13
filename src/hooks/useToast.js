import { useContext } from 'react';
import { ToastContext } from '../components/ToastProvider';

export const PLACEHOLDER_MESSAGE = 'Placeholder in the demo build. This action will be available once the backend is connected.';

/** Returns `notify(text)`; call it for actions that have no real backend yet. */
export default function useToast() {
  return useContext(ToastContext).notify;
}
