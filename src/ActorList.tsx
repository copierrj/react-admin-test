import { Datagrid, List, TextField } from 'react-admin';

export const ActorList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="first_name" />
            <TextField source="last_name" />
        </Datagrid>
    </List>
);
