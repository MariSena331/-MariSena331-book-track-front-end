import { Input, MenuItem, Modal, TextField } from '@material-ui/core'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useRef, useState } from 'react'
import { useCallback } from 'react'

interface IMyBooksProps {
    open: boolean
    handleClose: () => void
}

export const NewBookForm = ({ open, handleClose }: IMyBooksProps) => {
    const formRef = useRef<FormHandles>(null)
    const [status, setStatus] = useState([' WANT_READ', 'READING', 'AlREADY_READ'])

    const handleSubmit = useCallback(() => {

    }, [])

    return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
            <form onSubmit={handleSubmit}>
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
        </Modal>
    )
}