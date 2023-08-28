import { Form, TabPanel } from '@/components'
import { useGlobalAuth, useTranslation, useUserMethods } from '@/hooks'
import { type IUser, type IUserUpdate } from '@/models/LOGIC'
import { CTabsDataAccountTabPanel, inputsAccountTabSchema, inputsArray } from '@/pages/Settings/models/UI'
import { toastUtils } from '@/utils'
import { type SubmitHandler } from 'react-hook-form'

interface IProps {
  showBackNavigation?: boolean
  showHeaders?: boolean
}

const AccountInformationTabPanel: React.FC<IProps> = ({ showBackNavigation, showHeaders }) => {
  const { t } = useTranslation()
  const { updateUser } = useUserMethods()
  const { user } = useGlobalAuth()

  const handleOnSubmit: SubmitHandler<IUserUpdate> = (data) => {
    const areValuesNull = Object.values(data).every((actualData) => {
      if (actualData instanceof FileList) {
        return actualData.length === 0
      } else {
        return actualData == null
      }
    })

    if (areValuesNull) {
      toastUtils.error('All fields are empty')
    } else {
      updateUser((user as IUser).id, data)
    }
  }

  return (
        <TabPanel
          value={CTabsDataAccountTabPanel.information.name}
          title={CTabsDataAccountTabPanel.information.traduction}
          description={CTabsDataAccountTabPanel.information.description}
          showBackNavigation={showBackNavigation ?? true}
          showHeader={showHeaders ?? true}
          routingBy='routingSystem'
          loading={false}
        >
            <Form
                buttonSubmitName={t('save')}
                onSubmit={handleOnSubmit}
                inputsData={inputsArray}
                schema={inputsAccountTabSchema}
                styles={{
                  gridColumns: 1,
                  width: '400px',
                  border: 'none',
                  marginY: '1em',
                  paddingY: '0px'
                }}
            />
        </TabPanel>
  )
}

export default AccountInformationTabPanel
