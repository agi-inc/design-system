import { Plus } from 'lucide-react';

import { MDSContainedIcon, MultiOnLogoSvgIcon } from '@multion/mds';

const MDSContainedIconExample = () => {
  return (
    <div className="flex gap-4">
      <MDSContainedIcon
        icon={<MultiOnLogoSvgIcon size="32px" logocolor="black" />}
      />
      <MDSContainedIcon
        icon={<MultiOnLogoSvgIcon size="32px" logocolor="black" />}
        type="square"
        size="lg"
      />
      <MDSContainedIcon
        icon={<MultiOnLogoSvgIcon size="32px" logocolor="black" />}
        size="md"
      />
      <MDSContainedIcon
        icon={<MultiOnLogoSvgIcon size="32px" logocolor="black" />}
        containerColor="tertiary"
      />
      <MDSContainedIcon icon={<Plus />} />
    </div>
  );
};

export default MDSContainedIconExample;
