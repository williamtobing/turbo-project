import { useState, useCallback } from 'react';

export function useToggle(
  initialState = false
): [state: boolean, toggle: () => void] {
  const [state, setState] = useState(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
}
