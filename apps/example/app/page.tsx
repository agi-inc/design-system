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
import AlertsExample from '../components/alerts/Alerts.example';
import SwitchExample from '../components/switch/Switch.example';
import TabsExample from '../components/tabs/Tabs.example';
import CommandExample from '../components/command/Command.example';
import { TooltipExample } from '../components/tooltip/Tooltip.example';
import { AccordionExample } from '../components/accordion/Accordion.example';
import { SliderExample } from '../components/slider/Slider.exmple';
import { RadtioGroupExample } from '../components/radio-group/RadioGroup.example';
import { DropdownMenuExample } from '../components/dropdown-menu/DropdownMenu.example';
import TableExample from '../components/table/Table.example';
import SheetExample from '../components/sheet/Sheet.example';

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

        <Card>
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <AlertsExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Switch </CardTitle>
          </CardHeader>
          <CardContent>
            <SwitchExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tabs </CardTitle>
          </CardHeader>
          <CardContent>
            <TabsExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Command </CardTitle>
          </CardHeader>
          <CardContent>
            <CommandExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tooltip </CardTitle>
          </CardHeader>
          <CardContent>
            <TooltipExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accordion </CardTitle>
          </CardHeader>
          <CardContent>
            <AccordionExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Slider </CardTitle>
          </CardHeader>
          <CardContent>
            <SliderExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>RadtioGroup </CardTitle>
          </CardHeader>
          <CardContent>
            <RadtioGroupExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dropdown </CardTitle>
          </CardHeader>
          <CardContent>
            <DropdownMenuExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Table </CardTitle>
          </CardHeader>
          <CardContent>
            <TableExample />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sheet </CardTitle>
          </CardHeader>
          <CardContent>
            <SheetExample />
          </CardContent>
        </Card>
      </div>
    </MdsLayout>
  );
};

export default MdsPage;
