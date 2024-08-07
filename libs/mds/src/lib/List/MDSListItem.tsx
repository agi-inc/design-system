import MDSHistoryRow from './HistoryRow/MDSHistoryRow';
import MDSMessageRow from './MessageRow/MDSMessageRow';

export function MDSListItem({
  leftAddon,
  stepItems,
  content,
  time,
  bottomPlugin,
  href,
}: {
  leftAddon: React.ReactNode;
  stepItems: {
    step: number;
    content: string;
  }[];
  content: string;
  time?: Date;
  bottomPlugin?: React.ReactNode;
  href?: string;
}) {
  const Comp = href ? MDSHistoryRow : MDSMessageRow;
  return (
    <Comp
      leftAddon={leftAddon}
      stepItems={stepItems}
      content={content}
      time={time}
      bottomPlugin={bottomPlugin}
      href={href}
    />
  );
}
