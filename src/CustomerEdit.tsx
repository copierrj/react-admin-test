import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CustomerEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="first_name" />
                <TextInput source="last_name" />
                <TextInput source="email" />
                <BooleanInput source="activebool" label="Active"/>
            </SimpleForm>
        </Edit>
    );
};
