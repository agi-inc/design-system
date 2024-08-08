import { Input, Textarea } from '@multion/ui';

const MDSInputExample = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Input type="email" placeholder="Email" variantSize={'small'} />
      <Input type="email" placeholder="Email" variantSize={'medium'} />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Ask me to do anything" />
    </div>
  );
};

export default MDSInputExample;
