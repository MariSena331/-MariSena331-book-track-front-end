import { Card, makeStyles, MenuItem, Modal, TextField } from '@material-ui/core'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { useRef, useState } from 'react'
import { Input } from './Input/index'
import { useCallback } from 'react'
import { api } from '../services/api'
import { Books } from '../interfaces/Books'

interface IMyBooksProps {
    open: boolean
    books: Books[]
    setBooks: any
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

export const NewBookForm = ({ open, handleClose, books, setBooks }: IMyBooksProps) => {
    const formRef = useRef<FormHandles>(null)
    const classes = useStyles()
    const [status, setStatus] = useState<string>('WANT_READ')
    const [options, setOptions] = useState<string[]>(['WANT_READ', 'READING', 'AlREADY_READ'])

    const handleSubmit: SubmitHandler = useCallback(async(data) => {
        try {
            await api.post("/books", {
                   title: data.title,
                   author: data.author,
                   status: status
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }, [status])
    return (
        <Modal
          open={open}
          onClose={handleClose}
          className={classes.root}
        >
            <Card className={classes.card}>
                <Form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
                    <Input name="title" label="Titulo" />
                    <Input name="author" label="Autor" />
                    <Input name="concluded_at" label="Data de conclusão" />
                    <TextField
                      select
                      name="status"
                      onChange={(e) => setStatus(e.target.value)}
                      label="Status"
                      variant="filled"
                    >
                      {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <button type="submit">Salvar</button>
                </Form>
            </Card>
        </Modal>
    )
}