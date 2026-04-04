import type { FC } from 'react';
import { useIsResponsive } from 'shared/hooks/isResponsive';
import { Ornament } from 'shared/ui/ornament/Ornament';
import { Survey } from 'widgets/survey/Survey';

export const CreatePage: FC = () => {
  return (
    <div style={{ position: 'relative', overflow: 'clip' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Survey />
      </div>
      <Ornament right={useIsResponsive(1024) ? -750 : -398} top={0} />
      <Ornament left={useIsResponsive(1024) ? -750 : -398} top={0} />
    </div>
  );
};
