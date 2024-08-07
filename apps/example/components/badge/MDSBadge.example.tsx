import { MDSBadge } from '@multion/mds';

const MDSBadgeExample = () => {
  return (
    <div className="flex flex-col space-y-4">
      <MDSBadge content="17" size="sm" />
      <MDSBadge content="17" size="md" />
      <MDSBadge type="secondary" content="1" size="md" />
      <MDSBadge type="secondary" content="17" size="md" />
      <MDSBadge type="tertiary" content="17" size="md" />
      <MDSBadge type="destructive" content="17" size="md" />
      <MDSBadge content="17" size="lg" />
    </div>
  );
};

export default MDSBadgeExample;
