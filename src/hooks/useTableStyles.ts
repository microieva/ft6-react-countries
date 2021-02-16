import { Theme } from "@material-ui/core";
import { fade, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    headerRow: {
        
    },
    cell: {
        width: "25rem"
    },
    row : {
        '&:hover': {
            
        },
    }
}))


export default useStyles