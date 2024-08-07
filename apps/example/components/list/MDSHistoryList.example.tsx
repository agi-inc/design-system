/* eslint-disable react/jsx-key */
import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { MDSBadge, MDSList, MDSListItem } from '@multion/mds';

const MDSHistoryListExample = () => {
  const exampleDate = new Date('Tue, 9 July 2024 07:00:00 GMT');
  const exampleSteps = [
    {
      step: 1,
      content: `OK, got it! I am searching for "Meditations by Marcus Aurelius" book under $5 on Google. OK, got it! I am searching for "Meditations by Marcus Aurelius" book under $5 on Google. OK, got it! I am searching for "Meditations by Marcus Aurelius" book under $5 on Google.`,
    },
    {
      step: 2,
      content: `I am clicking on the Amazon link that offers "Meditations by Marcus Aurelius" for $4.89.`,
    },
  ];
  return (
    <div className="flex flex-col space-y-4">
      <MDSList
        items={[
          <MDSListItem
            leftAddon={
              <MDSBadge
                type="secondary"
                content={exampleSteps.length.toString()}
              />
            }
            stepItems={exampleSteps}
            content={
              "I'm searching Amazon for the Meditations by Marcus Aurelius book..."
            }
          />,
          <MDSListItem
            leftAddon={
              <MDSBadge
                type="secondary"
                content={exampleSteps.length.toString()}
              />
            }
            stepItems={exampleSteps}
            content={
              "I'm searching Amazon for the Meditations by Marcus Aurelius book..."
            }
            time={exampleDate}
          />,
          <MDSListItem
            leftAddon={
              <MDSBadge
                type="secondary"
                content={exampleSteps.length.toString()}
              />
            }
            stepItems={exampleSteps}
            content={
              "I'm searching Amazon for the Meditations by Marcus Aurelius book... Again I'm searching Amazon for the Meditations by Marcus Aurelius book... Again I'm searching Amazon for the Meditations by Marcus Aurelius book..."
            }
            time={exampleDate}
            bottomPlugin={<RatingGroup rating={true} />}
          />,
          <MDSListItem
            leftAddon={
              <MDSBadge
                type="secondary"
                content={exampleSteps.length.toString()}
              />
            }
            stepItems={exampleSteps}
            content={
              "I'm searching Amazon for the Meditations by Marcus Aurelius book..."
            }
            time={exampleDate}
            bottomPlugin={<RatingGroup rating={false} />}
          />,
        ]}
      />
    </div>
  );
};

function RatingGroup({ rating }: { rating: boolean }) {
  return (
    <div className="flex gap-2 text-muted-foreground">
      {rating === true ? (
        <ThumbsUp height={12} width={12} />
      ) : (
        <ThumbsUp height={12} width={12} fill="hsl(var(--muted-foreground))" />
      )}
      {rating === false ? (
        <ThumbsDown height={12} width={12} />
      ) : (
        <ThumbsDown
          height={12}
          width={12}
          fill="hsl(var(--muted-foreground))"
        />
      )}
    </div>
  );
}

export default MDSHistoryListExample;
