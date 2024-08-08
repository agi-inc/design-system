'use client';

import { showToast } from '@multion/mds';
import { Button } from '@multion/ui';

const ToastExample = () => {
  return (
    <div>
      <Button
        onClick={() =>
          showToast({
            title: 'Toast',
            description: 'Toast message',
          })
        }
      >
        Show Toast
      </Button>
      <Button
        onClick={() =>
          showToast({
            title: 'Toast',
            description: 'Toast message',
            variant: 'destructive',
          })
        }
      >
        Show Destructive Toast
      </Button>
    </div>
  );
};

export default ToastExample;
