export interface LayoutProps {
  id: number | undefined,
  encodedSlots: string | undefined,
  wxhb: number,
  xhb: number,
  exhb: number,
  hb: number[],
  isPvp: boolean,
  layout: number,
}

export interface ViewDataProps extends LayoutProps {
  createdAt?: string | null,
  deletedAt?: string | null,
  description?: string,
  jobId?: string,
  title?: string,
  updatedAt?: string | null,
  user?: {
    name: string,
    id: number
  },
  userId?: number,
}

export interface MergeDataProps {
  id?: number | undefined,
  encodedSlots?: string | undefined,
  s?: string | undefined,
  wxhb?: number,
  xhb?: number,
  exhb?: number,
  hb?: number[],
  isPvp?: boolean,
  layout?: number,
}
