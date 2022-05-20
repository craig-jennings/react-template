import styled, { keyframes } from 'styled-components';
import toast from 'react-hot-toast';
import type { ToastOptions } from 'react-hot-toast';

const enter = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`;

const leave = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(0); }
`;

const Enter = styled.div`
  animation: 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${enter};
  width: 100%;
`;

const Leave = styled(Enter)`
  animation: 0.23s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${leave};
`;

interface CustomToastOptions extends ToastOptions {
  isDismissable?: boolean;
}

const defaultOptions: CustomToastOptions = {
  isDismissable: true,
};

function addToast(content: JSX.Element, options: CustomToastOptions = defaultOptions) {
  const { isDismissable, ...toastOptions } = options;

  toast.custom((t) => {
    if (t.visible) {
      if (isDismissable) {
        return <Enter onClick={() => toast.dismiss(t.id)}>{content}</Enter>;
      }

      return <Enter>{content}</Enter>;
    }

    return <Leave>{content}</Leave>;
  }, toastOptions);
}

export { addToast };
