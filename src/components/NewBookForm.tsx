import { Card, Input, makeStyles, MenuItem, Modal, TextField } from '@material-ui/core'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useRef, useState } from 'react'
import { useCallback } from 'react'

interface IMyBooksProps {
    open: boolean
    handleClose: () => void
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    minWidth: '44rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const NewBookForm = ({ open, handleClose }: IMyBooksProps) => {
    const formRef = useRef<FormHandles>(null)
    const classes = useStyles()
    const [status, setStatus] = useState([' WANT_READ', 'READING', 'AlREADY_READ'])

    const handleSubmit = useCallback(() => {}, [])

    return (
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.root}
        >
            <Card className={classes.card}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Input name="name" aria-label="Titulo" />
                    <Input name="email" aria-label="Autor" />
                    <TextField
                      id="filled-select-currency"
                      select
                      label="Status"
                      variant="filled"
                    >
                      {status.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                </form>
            </Card>
        </Modal>
    )
}