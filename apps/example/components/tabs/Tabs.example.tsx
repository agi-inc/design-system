'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@multion/ui';

const TabsExample = () => {
  return (
    <div className="flex flex-col gap-2">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsExample;
