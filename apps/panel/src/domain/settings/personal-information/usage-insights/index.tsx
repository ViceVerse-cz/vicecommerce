import { User } from '@medusajs/medusa';
import React from 'react';
import Badge from '../../../../components/fundamentals/badge';
import Button from '../../../../components/fundamentals/button';
import useToggleState from '../../../../hooks/use-toggle-state';
import { useAdminAnalyticsConfig } from '../../../../services/analytics';
import UsageInsightsModal from './usage-insights-modal';

type Props = {
  user?: Omit<User, 'password_hash'>;
};

const UsageInsights = ({ user }: Props) => {
  const { analytics_config, isLoading } = useAdminAnalyticsConfig();
  const { state, toggle, close } = useToggleState();

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2xsmall'>
          <div className='flex items-center gap-x-xsmall'>
            <h2 className='inter-base-semibold'>Poznatky o používání</h2>
            {isLoading ? (
              <div className='badge bg-grey-10 animate-pulse w-16 h-large' />
            ) : !analytics_config || analytics_config?.opt_out ? (
              <Badge variant='disabled'>Vypnuto</Badge>
            ) : (
              <Badge variant='success'>Aktivní</Badge>
            )}
          </div>
          <p className='inter-base-regular text-grey-50'>
            Podělte se o poznatky o používání a pomozte nám zlepšit Vicecommerce
          </p>
        </div>
        <Button variant='secondary' size='small' onClick={toggle} disabled={!analytics_config}>
          Upravit předvolby
        </Button>
      </div>
      {analytics_config && user && (
        <UsageInsightsModal open={state} onClose={close} config={analytics_config} />
      )}
    </>
  );
};

export default UsageInsights;
