import { Carousel } from '@/components'
import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'

interface IStyles {
  paddingInline?: string
  alignItems?: string
  justifyContent?: string
  flexDirection: 'column' | 'row'
  maxHeight?: string
  paddingBottom?: string
  gap?: string
  carrousel: {
    maxWidth: string
    borderRadius?: string
  }
  informationSection: {
    paddingInline?: string
    alignSelf?: string
    width?: string
    maxWidth?: string
  }
}

interface IProps {
  styles: IStyles
  information?: React.ReactNode
  id?: string
  images?: string[]
}

const testImages = [
  'https://res.cloudinary.com/dy9gxuv2j/image/upload/v1692994795/default-header.jpg',
  'https://res.cloudinary.com/dy9gxuv2j/image/upload/v1692989889/default-avatar.jpg',
  'https://res.cloudinary.com/dmjqr9trc/image/upload/v1693965462/icrymhri5admsjxi6uoa.jpg',
  'https://res.cloudinary.com/dmjqr9trc/image/upload/v1694168250/kno16gs0bjpfad6utdgh.jpg'
]

export const ContentLayout: React.FC<IProps> = ({ information, styles, id, images }) => {
  return (
    <Box
      component='div'
      id={id}
      sx={{
        display: 'flex',
        flexShrink: 0,
        flexBasis: '100%',
        whiteSpace: 'normal',
        justifyContent: styles.justifyContent,
        alignItems: {
          md: styles.alignItems,
          sx: 'start'
        },
        paddingBottom: {
          md: styles.paddingBottom
        }
      }}
    >
      <Stack
        sx={{
          width: '100%',
          flexDirection: {
            md: styles.flexDirection,
            sx: 'column'
          },
          justifyContent: styles.justifyContent,
          gap: styles.gap,
          paddingInline: styles.paddingInline
        }}
      >
        <Box
          component='section'
          sx={{
            height: '25em',
            width: '100%',
            minHeight: '20em',
            maxWidth: {
              md: styles.carrousel.maxWidth,
              sx: '100%'
            },
            overflow: 'hidden'
          }}>
          <Carousel
            imageSources={images ?? testImages}
            styles={{
              height: '100%',
              width: '100%',
              borderRadius: styles.carrousel.borderRadius
            }}
          />
        </Box>
        <Box
          component='main'
          sx={{
            width: styles.informationSection.width ?? '100%',
            maxWidth: {
              xs: '100%',
              md: styles.informationSection.maxWidth ?? '100%'
            },
            alignSelf: styles.informationSection.alignSelf
          }}
        >
          {information}
        </Box>
      </Stack>
    </Box>
  )
}
