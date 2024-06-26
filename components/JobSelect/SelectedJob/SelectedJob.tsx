import React from 'react';
import type { ClassJobProps } from 'types/ClassJob';
import RoleNames from '../../../data/RoleNames.json';
import styles from './SelectedJob.module.scss';

interface Props {
  job: ClassJobProps,
  className?: string
}

interface RoleNamesType {
  [key: string]: string
}

export default function SelectedJob({ job, className }: Props) {
  const roleNames: RoleNamesType = RoleNames;

  return (
    <div className={[styles.container, className].join(' ')}>
      <div className={styles.iconWrapper}>
        <img
          src={job.PreIcon || `/jobIcons${job.Icon}`}
          alt=""
          height={36}
          width={36}
        />
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>
          <abbr className={styles.abbr}>{job.Abbr}</abbr>
          <span className={styles.name}>{job.Name}</span>
        </h2>
        <div className={styles.role}>
          {job.Discipline} {job.Role && (`• ${roleNames[job.Role]}`)}
        </div>
      </div>
    </div>
  );
}

SelectedJob.defaultProps = {
  className: ''
};
