import { Plus, Search } from 'lucide-react';

import MultiOnLogoSvgIcon from '@multion/mds/lib/MultiOnLogoSvgIcon';
import { Button } from '@multion/ui';

const MDSButtonExample = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Button variant="default">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="default" disabled>
        Disabled Primary Button
      </Button>
      <Button variant="secondary" disabled>
        Disabled Secondary Button
      </Button>
      <Button variant="tertiary" disabled>
        Disabled Tertiary Button
      </Button>
      <Button variant="ghost" disabled>
        Disabled Ghost Button
      </Button>
      <Button variant="link" disabled>
        Disabled Link Button
      </Button>
      <Button variant="default" size="icon">
        <MultiOnLogoSvgIcon logocolor="white" size="50%" />
      </Button>
      <Button variant="ghost" size="icon">
        <Search />
      </Button>
      <Button variant="ghost" size="icon">
        <Plus />
      </Button>
    </div>
  );
};

export default MDSButtonExample;
