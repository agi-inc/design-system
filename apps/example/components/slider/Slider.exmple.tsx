import { Slider } from '@multion/ui';

export function SliderExample() {
  return (
    <div className="flex flex-col gap-2 relative">
      <div>
        <label>Wihtout steps</label>
        <Slider defaultValue={[10]} className="mb-10" />
      </div>

      <div>
        <label>With steps</label>
        <Slider
          defaultValue={[40]}
          min={0}
          max={100}
          step={20}
          className="mb-10"
        />
        <div className="absolute bottom-6 left-0 right-0 flex justify-between text-sm">
          {[0, 20, 40, 60, 80, 100].map((mark, index) => {
            const isFirst = index === 0;
            const isLast = index === 6;
            const skipPadding = isFirst || isLast;
            return (
              <span
                key={mark}
                className="absolute"
                style={{
                  left: skipPadding
                    ? `left: ${mark}%`
                    : `calc(${mark}% - 10px)`,
                }}
              >
                {(mark / 100).toFixed(1)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
