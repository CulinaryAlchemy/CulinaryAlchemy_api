import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import Box from '@mui/joy/Box'
import { useId } from 'react'

interface IStyles {
  width?: string
  height?: string
  backdropFilter?: string
  backgroundColor?: string
}

interface IProps {
  styles: IStyles
  onSuccess: (fileData: File) => void
  fileType?: string
}

export const DropZone: React.FC<IProps> = ({ fileType, styles, onSuccess }) => {
  const id = useId()

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.[0] == null) return
    const file: File = event?.target?.files[0]
    onSuccess(file)
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: styles.width,
        height: styles.height,
        backdropFilter: styles.backdropFilter,
        backgroundColor: styles.backgroundColor
      }}
    >
      <label htmlFor={id}>
        <CenterFocusWeakIcon
          sx={{
            cursor: 'pointer',
            fontSize: '2.5em',
            opacity: '60%'
          }}
        />
      </label>
      <input
        onChange={handleOnChange}
        accept={fileType}
        id={id}
        type="file"
        style={{
          display: 'none'
        }}
      />
    </Box>
  )
}
