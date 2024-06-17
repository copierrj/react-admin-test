import { BooleanInput, Edit, Toolbar, SimpleForm, TextInput } from 'react-admin';

const MyToolbar = () => {
    return <Toolbar/>;
};

export const CustomerEdit = () => {

    const meta = {
        columns: [
            "first_name",
            "last_name",
            "email",
            "activebool"
        ]
    };

    return (
        <Edit queryOptions={{ meta }}>
            <SimpleForm toolbar={<MyToolbar/>}>
                <TextInput source="first_name" />
                <TextInput source="last_name" />
                <TextInput source="email" />
                <BooleanInput source="activebool" label="Active"/>
            </SimpleForm>
        </Edit>
    );
};
