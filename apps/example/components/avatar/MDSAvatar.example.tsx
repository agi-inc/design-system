import { Avatar, AvatarImage } from '@multion/ui';

const MDSAvatarExample = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Avatar>
        <AvatarImage src="https://i.imgur.com/KQUyRwM.jpeg" alt="User" />
      </Avatar>
    </div>
  );
};

export default MDSAvatarExample;
