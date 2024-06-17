import { BooleanField, Datagrid, DateField, EditButton, EmailField, List, TextField } from 'react-admin';

export const CustomerList = () => {
    return (
        <List>
            <Datagrid rowClick="false">
                <TextField source="first_name" />
                <TextField source="last_name" />
                <EmailField source="email" />
                <BooleanField source="activebool" label="Active" />
                <DateField source="create_date" />
                <DateField source="last_update" />
                <EditButton/>
            </Datagrid>
        </List>
    );
};