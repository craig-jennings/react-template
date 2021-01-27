import { ChangeEvent, useCallback, useState } from 'react';

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    [],
  );

  return {
    onChange,
    value,
  };
}

export default useFormInput;
