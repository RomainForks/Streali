import * as PopoverLib from '@radix-ui/react-popover';

export interface PopoverProps {
  trigger: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
}

export function Popover(props: PopoverProps) {
  const { trigger, align = 'center', side = 'bottom', children } = props;

  const animationClassName = {
    top: 'slide-down-fade',
    right: 'slide-left-fade',
    bottom: 'slide-up-fade',
    left: 'slide-right-fade',
  };

  return (
    <PopoverLib.Root modal>
      <PopoverLib.Trigger asChild>
        <div>{trigger}</div>
      </PopoverLib.Trigger>
      <PopoverLib.Anchor />
      <PopoverLib.Portal>
        <PopoverLib.Content
          className={`w-[300px] p-3 rounded-md bg-dark-400 ${animationClassName[side]} outline-none`}
          align={align}
          side={side}
          sideOffset={5}
        >
          {children}
        </PopoverLib.Content>
      </PopoverLib.Portal>
    </PopoverLib.Root>
  );
}

export default Popover;