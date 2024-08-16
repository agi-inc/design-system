'use client';

import { Switch } from '@multion/ui';
import { useState } from 'react';

const SwitchExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <Switch checked={checked} onCheckedChange={() => setChecked(!checked)} />
      <div>{checked ? 'Checked' : 'Unchecked'}</div>
    </div>
  );
};

export default SwitchExample;
