import { Box, Stack, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react'

const styles = {
  customBox: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#EBD96B',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundPosition: 'cover',
    paddingTop: "1rem",
    borderRadius: '1rem'
  }
}


const Newsletter = () => {

  const [emailValue, setEmailValue] = useState([])

  const handleEmailMsg = () => {
    alert(`Email ${emailValue} has been added`)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setEmailValue(e.target[0].value)
    e.target.value = ''
    handleEmailMsg()
  }

  const handleOnClick = (e) => {
    e.target.form[0].value = ''
    handleEmailMsg()
  }


  return (
    <Box style={styles.customBox}>
      <Stack alignItems='center'>
        <Typography variant='h3' fontWeight={900} textAlign='center'>
          JOIN OUR COMMUNITY
        </Typography>
        <Typography variant='h3' fontWeight={900} textAlign='center'>
          TO GET MONTHLY PROMOS
        </Typography>
        <Typography p={2} variant='subtitle2' fontWeight={500} color='white'>
          Type your email down below
        </Typography>
        <Box
          component='form'
          p={5}
          onSubmit={handleOnSubmit}
        >
          <TextField
            label='Type Email Here'
            sx={{ background: 'white', borderRadius: '4px', border: 'none !important' }}
            color='secondary'
            onChange={(e) => setEmailValue(e.target.value)}
            InputProps={{
              endAdornment: <Button variant='contained' onClick={handleOnClick}
                color='secondary'
              >
                Submit
              </Button>
            }}
          >
          </TextField>
        </Box>
      </Stack>

    </Box>
  )
}

export default Newsletter