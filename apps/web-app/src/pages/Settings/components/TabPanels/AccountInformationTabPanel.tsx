import { Form, TabPanel } from '@/components'
import { useGlobalAuth, useTranslation, useUserMethods } from '@/hooks'
import { type IUser, type IUserUpdate } from '@/models/LOGIC'
import { CTabsDataAccountTabPanel, inputsAccountTabSchema, inputsArray } from '@/pages/Settings/models/UI'
import { toastUtils } from '@/utils'
import { type SubmitHandler } from 'react-hook-form'

const AccountInformationTabPanel = () => {
  const { t } = useTranslation()
  const { updateUser } = useUserMethods()
  const { user } = useGlobalAuth()

  const handleOnSumbit: SubmitHandler<IUserUpdate> = (data) => {
    const areValuesNull = Object.values(data).every((actualData) => {
      if (actualData instanceof FileList) {
        data.avatar = actualData[0]
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
          showBackNavigation={true}
          routingBy='routingSystem'
          loading={false}
        >
            <Form
                buttonSumbitName={t('save')}
                onSumbit={handleOnSumbit}
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
