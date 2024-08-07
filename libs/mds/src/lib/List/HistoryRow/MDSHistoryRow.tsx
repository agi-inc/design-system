import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Clock3 } from 'lucide-react';
import { useFormatter } from 'next-intl';

import { Popover, PopoverTrigger, PopoverContent } from '@multion/ui';

import { MDSBadge } from '../../Badge/MDSBadge';

// const PopoverContent = dynamic(() =>
//   import('@multion/ui/lib/ui/popover').then((mod) => mod.PopoverContent)
// );

export default function MDSHistoryRow({
  leftAddon,
  stepItems,
  content,
  time,
  bottomPlugin,
  href,
}: {
  leftAddon?: React.ReactNode;
  stepItems?: {
    step: number;
    content: string;
  }[];
  content: string;
  time?: Date;
  bottomPlugin?: React.ReactNode;
  href?: string;
}) {
  const format = useFormatter();
  return (
    <div className="flex flex-row py-4 items-center justify-between text-base font-normal cursor-pointer">
      <div className="flex flex-row gap-2 overflow-hidden w-full">
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
                      />
                      <p className="truncate text-muted-foreground">
                        {i.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          leftAddon
        )}

        <Link
          href={href ?? ''}
          prefetch={false}
          className="flex flex-col gap-2 overflow-hidden w-full cursor-pointer"
        >
          <p className="leading-8 truncate">{content}</p>
          {bottomPlugin ?? bottomPlugin}
        </Link>
      </div>
      {time && (
        <Link
          href={href ?? ''}
          prefetch={false}
          className="flex flex-shrink-0 items-center gap-2 text-sm text-muted-foreground pl-8 h-8 cursor-pointer"
        >
          <Clock3 height={16} width={16} /> {format.relativeTime(time)}
        </Link>
      )}
    </div>
  );
}
