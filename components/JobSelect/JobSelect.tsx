import React from 'react';
import { ClassJob } from 'types/ClassJob';
import SelectedJob from './SelectedJob';
import styles from './JobSelect.module.scss';

interface Props {
  selectedJob: ClassJob,
  toOpen: React.MouseEventHandler,
  disabled: boolean
}

export function JobSelect({ selectedJob, toOpen, disabled }: Props) {
  return (
    <button
      type="button"
      id="jobSelectTitle"
      className={styles.button}
      onClick={toOpen}
      disabled={disabled}
    >
      <SelectedJob job={selectedJob} />
    </button>
  );
}

export default JobSelect;
