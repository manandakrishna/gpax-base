import * as React from 'react';
import Typography from '@mui/material/Typography';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Dashboard from '../app/dashboard/page'
import Link from 'next/link';

export default function HomePage() {
  return (

      <DashboardLayout>
      <PageContainer>
         <Typography>
              <Dashboard />
          </Typography>
      </PageContainer>
      </DashboardLayout>

  );
}