import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export  function CreateTodoButton(props) {
    return (
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    ) ;
}
