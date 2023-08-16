import { type TTabDataRecord } from '@/models/UI'
import { Trans } from 'react-i18next'

export const CTabsData: TTabDataRecord = {
  account: {
    name: 'account',
    traduction: <Trans>account</Trans>
  },
  text: {
    name: 'test',
    traduction: <Trans>test</Trans>
  }
} as const


