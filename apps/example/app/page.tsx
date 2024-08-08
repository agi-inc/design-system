// src/app/mds/page.tsx
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@multion/ui';

import MDSAvatarExample from '../components/avatar/MDSAvatar.example';
import MDSBadgeExample from '../components/badge/MDSBadge.example';
import MDSButtonExample from '../components/button/MDSButton.example';
import MDSAgentFrameExample from '../components/frame/MDSAgentFrame.example';
import MDSContainedIconExample from '../components/icon/MDSContainedIcon.example';
import MDSInputExample from '../components/input/MDSInput.example';
import MdsLayout from './layout';
import MDSHistoryListExample from '../components/list/MDSHistoryList.example';
import ToastExample from '../components/toast/Toast.example';

const MdsPage = () => {
  return (
    <MdsLayout>
      <div className="p-4 md:p-8 lg:p-12 space-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          MultiOn Design System
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSButtonExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSAvatarExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSInputExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badge</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSBadgeExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>History List Item</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSHistoryListExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ContainedIcon</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSContainedIconExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AgentFrame</CardTitle>
          </CardHeader>
          <CardContent>
            <MDSAgentFrameExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Toast</CardTitle>
          </CardHeader>
          <CardContent>
            <ToastExample />
          </CardContent>
        </Card>
      </div>
    </MdsLayout>
  );
};

export default MdsPage;
