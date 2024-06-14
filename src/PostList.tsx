import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
