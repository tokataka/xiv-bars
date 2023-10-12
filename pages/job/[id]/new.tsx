import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import {
  listJobActions,
  listRoleActions
} from 'lib/api';
import shortDesc from 'lib/shortDesc';
import I18n from 'lib/I18n/locale/en-US';
import { AppContextProvider } from 'components/App/context';
import GlobalHeader from 'components/GlobalHeader';
import Hero from 'components/Hero';
import Lore from 'components/Lore';
import HowTo from 'components/HowTo';
import Footer from 'components/Footer';
import App from 'components/App';
import EorzeaProfile from 'components/EorzeaProfile';
import Jobs from 'apiData/Jobs.json';
import type { ClassJobProps } from 'types/ClassJob';
import type { ActionProps } from 'types/Action';
import styles from '../../Index.module.scss';

interface Props {
  selectedJob: ClassJobProps,
  actions: ActionProps[],
  roleActions: ActionProps[]
}

export default function Index({
  selectedJob,
  actions,
  roleActions,
}: Props) {
  const canonicalUrl = `https://xivbars.bejezus.com/job/${selectedJob.Abbr}`;
  const pageDescription = shortDesc(selectedJob, actions);

  return (
    <>
      <Head>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <AppContextProvider
        actions={actions}
        roleActions={roleActions}
        selectedJob={selectedJob}
        viewAction="new"
      >
        <GlobalHeader />

        <App />

        <div className="container section">
          <div className={styles.description}>
            <h2>{selectedJob.Name} {I18n.Global.title}</h2>
            <p className={styles.jobDesc}>
              {shortDesc(selectedJob, actions)}
            </p>

            { selectedJob.Description && <Lore selectedJob={selectedJob} /> }
          </div>
        </div>
      </AppContextProvider>

      <div className={styles.articles}>
        {(selectedJob) && <Hero primary={(!selectedJob)} />}
        <HowTo />
        <EorzeaProfile />
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  // Get Selected Job
  const selectedJob = id
    ? Jobs.find((job) => job.Abbr === id)
    : null;

  if (!selectedJob) {
    return {
      notFound: true,
    };
  }

  let jobActions = [];
  let roleActions = [];

  // Fetch Actions
  if (selectedJob) {
    jobActions = await listJobActions(selectedJob);
    // TODO: Refactor this is pull IDS from ClassJob object instead of ROLE_ACTION_IDS
    if (selectedJob.Role) {
      roleActions = await listRoleActions(selectedJob);
    }
  }

  return {
    props: {
      actions: jobActions,
      selectedJob,
      roleActions
    }
  };
};