import React, { useState } from 'react'
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core'

const MuiDialog = () => {
  const [dialog, setDialog] = useState(false)

  function handleSetDialog () {
    setDialog(false)
  }

 return (
   <Dialog
     open={dialog}
     onClose={handleSetDialog}
   >
     <DialogTitle>Edit Song</DialogTitle>
     <DialogContent>
       <img src="https://i1.sndcdn.com/
          artworks-000670470790-ej1gvb-t500x500.jpg"
            alt="Song thumbnail"
       />
       <TextField
         margin='dense'
         name='title'
         lable='Title'
         fullWidth
       />
       <TextField
         margin='dense'
         name='title'
         lable='Title'
         fullWidth
       />
       <TextField
         margin='dense'
         name='title'
         lable='Title'
         fullWidth
       />
     </DialogContent>
   </Dialog>
  )
}

export default MuiDialog
