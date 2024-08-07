import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Clock3 } from 'lucide-react';
import { useFormatter } from 'next-intl';

import { Popover, PopoverTrigger, PopoverContent } from '@multion/ui';

import { MDSBadge } from '../../Badge/MDSBadge';

// const PopoverContent = dynamic(() =>
//   import('@multion/ui/lib/ui/popover').then((mod) => mod.PopoverContent)
// );

export default function MDSMessageRow({
  leftAddon,
  stepItems,
  content,
  time,
  bottomPlugin,
}: {
  leftAddon?: React.ReactNode;
  stepItems?: {
    step: number;
    content: string;
    url?: string;
  }[];
  content: string;
  time?: Date;
  bottomPlugin?: React.ReactNode;
}) {
  const format = useFormatter();
  return (
    <div className="flex flex-row py-4 items-center justify-between text-base font-normal">
      <div className="flex flex-row gap-2">
        {stepItems && stepItems.length > 0 ? (
          <Popover>
            <PopoverTrigger asChild>{leftAddon}</PopoverTrigger>
            <PopoverContent side="top" align="start" alignOffset={-12}>
              <div className="max-w-2xl flex flex-col gap-2">
                {stepItems.map((i, idx) => {
                  return (
                    <div
                      key={`${i.step}_${idx}`}
                      className="flex flex-row gap-2 "
                    >
                      <MDSBadge
                        size="sm"
                        type="secondary"
                        content={i.step.toString()}
                        cursor="default"
                      />
                      {i.url ? (
                        // TODO: confirm link styling
                        <p className="truncate text-muted-foreground">
                          {i.content.split(' ').slice(0, -1).join(' ')}{' '}
                          <Link href={i.url} className="hover:underline">
                            {i.content.split(' ').pop()} ↗
                          </Link>
                        </p>
                      ) : (
                        <p className="truncate text-muted-foreground">
                          {i.content}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          leftAddon
        )}
        <div className="flex flex-col gap-2">
          <p className="leading-8 whitespace-pre-wrap">{content}</p>
          {bottomPlugin ?? bottomPlugin}
        </div>
      </div>
      {time && (
        <div className="flex flex-shrink-0 items-center gap-2 text-sm text-muted-foreground">
          <Clock3 height={16} width={16} /> {format.relativeTime(time)}
        </div>
      )}
    </div>
  );
}
