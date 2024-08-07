'use client';

import { useRef, useState } from 'react';

import { Expand, Maximize2 } from 'lucide-react';

import MDSOverlay from '../Overlay/MDSOverlay';
import { Button, Card, CardContent, CardHeader } from '@multion/ui';
import { cn, removeSubdomain } from '@multion/ui-util';
import { AgentFrame } from '../mds.types';

export function MDSAgentFrame({
  frame,
  setIsStowed,
}: {
  frame: AgentFrame;
  setIsStowed?: (isStowed: boolean) => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      className={cn(
        'rounded-sm border-none shadow-lg transition-all',
        isExpanded
          ? 'w-[calc(100vw-2rem)] md:w-[480px] 2xl:w-[640px]'
          : 'w-64 2xl:w-96'
      )}
    >
      <CardHeader
        className={cn(
          'p-2 flex flex-row items-center text-sm',
          isExpanded ? 'justify-between' : 'justify-center'
        )}
      >
        <span>{removeSubdomain(frame.sessionUrl)}</span>
        {isExpanded && (
          <Button
            variant="ghost"
            onClick={() => {
              setIsExpanded(false);
              setIsStowed && setIsStowed(false);
            }}
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="px-4 pb-4 relative">
        {!isExpanded && (
          <MDSOverlay
            targetRef={iframeRef}
            content={<Expand className="w-8 h-8 text-white" />}
            variant="medium"
            onClick={() => {
              setIsExpanded(true);
              setIsStowed && setIsStowed(true);
            }}
          />
        )}
        <iframe
          ref={iframeRef}
          key={frame.sessionId}
          sandbox="allow-same-origin allow-scripts"
          className={cn(
            'w-full rounded-xs',
            isExpanded
              ? 'pointer-events-auto aspect-debugger-lg'
              : 'pointer-events-none aspect-debugger-sm 2xl:aspect-debugger-lg'
          )}
          src={`${frame.debuggerUrl}&navBar=false`}
        ></iframe>
      </CardContent>
    </Card>
  );
}
