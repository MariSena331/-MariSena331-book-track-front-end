import React, { useCallback } from 'react'
import {
    Avatar,
    Container,
    Grid, IconButton,
    List,
    ListItem,
    ListItemAvatar, ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Typography
} from '@material-ui/core'
import { Book, Delete, Add } from '@material-ui/icons'
import { api } from '../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  container: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

export const MyBooks = ({ books, setBooks }: any) => {
 const classes = useStyles()
 const [dense, setDense] = React.useState(false)

 const handleDelete = useCallback(async(id) => {
    const updatedBooks = await api.delete("/books", {
        data: {
            bookId: id
        }
    })
    setBooks(updatedBooks.data)
 }, [books])

 return (
     <Container maxWidth="sm">
         <Grid item xs={12} md="auto">
             <Typography variant="h6" className={classes.title}>
                Seus livros
                 <IconButton>
                    <Add />
                </IconButton>
             </Typography>
             <div className={classes.container}>
                 <List dense={dense}>
                     {
                        books && books.map((item: any) => (
                         <ListItem key={item.id}>
                             <ListItemAvatar>
                                 <Avatar>
                                     <Book />
                                 </Avatar>
                             </ListItemAvatar>
                             <ListItemText primary={item.title} secondary={item.status} />
                             <ListItemSecondaryAction>
                                 <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                     <Delete />
                                 </IconButton>
                             </ListItemSecondaryAction>
                         </ListItem>
                     ))}
                 </List>
             </div>
         </Grid>
    </Container>
 )
}