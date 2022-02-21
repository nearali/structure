import type { NextPage } from 'next'

import Layout from '@/components/Layout';

import Button from '@/components/core/Button';

import { Wrapper } from './index.styles';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        Dashboard
        <Button>Submit Button</Button>
      </Wrapper>
    </Layout>
  )
}

export default Dashboard;