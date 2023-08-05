import { ToggleTheme, ToggleTranslation } from '@/components'
import { useTranslation } from '@/hooks'
import Popper from '@mui/base/Popper'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import IconButton from '@mui/joy/IconButton'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import ListItemContent from '@mui/joy/ListItemContent'
import { useState } from 'react'

export const UserMenu = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null)

  const open = Boolean(anchorEl)
  const id = open ? 'admissions-popper' : undefined
  return (
    <Box onMouseLeave={() => { setAnchorEl(null) }}>
      <IconButton
        color='neutral'
        variant='outlined'
        sx={{ width: '2.5em', height: '2.5em', borderRadius: '100%' }}
        aria-haspopup
        aria-expanded={open ? 'true' : 'false'}
        role="menuitem"
        onFocus={(event) => { setAnchorEl(event.currentTarget) }}
        onMouseEnter={(event) => {
          setAnchorEl(event.currentTarget)
        }}
      >
        <Avatar sx={{ width: '2.5em', height: '2.5em', borderRadius: '100%' }} alt='user logo' src='/logo.webp' />
      </IconButton>
      <Box sx={{ position: 'relative', zIndex: '2000', '& > *': { backgroundColor: 'var(--joy-palette-background-body)', borderRadius: 'sm' } }}>
        <Popper id={id} open={open} anchorEl={anchorEl} keepMounted disablePortal>
          <List
            role="menu"
            aria-label="About"
            variant="outlined"
            sx={{
              overflow: 'hidden',
              boxShadow: 'md',
              minWidth: 180,
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px'
            }}
          >
            <ListItem role="none">
              <ListItemButton role="menuitem">
                <ListItemContent>{t('settings')}</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ToggleTheme />
            <ToggleTranslation />
          </List>
        </Popper>
      </Box>
    </Box>
  )
}
