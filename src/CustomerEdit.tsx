import { BooleanInput, Edit, Toolbar, SimpleForm, TextInput, ReferenceInput, AutocompleteInput } from 'react-admin';
import { ReferenceOneInput } from "@react-admin/ra-relationships";

const MyToolbar = () => {
    return <Toolbar/>;
};

export const CustomerEdit = () => {

    const meta = {
        columns: [
            "customer_id",
            "first_name",
            "last_name",
            "email",
            "activebool",
            "address_id"
        ]
    };

    return (
        <Edit queryOptions={{ meta }} mutationMode="optimistic">
            <SimpleForm toolbar={<MyToolbar/>}>
                <TextInput source="first_name" />
                <TextInput source="last_name" />
                <TextInput source="email" />
                <BooleanInput source="activebool" label="Active"/>
                <ReferenceOneInput source="address_id" reference="address" target="address_id">
                    <TextInput source="address" />
                    <TextInput source="distict" />
                    <TextInput source="postal_code" />
                    <ReferenceInput source="city_id" reference="city" sort={{ field: "city", order: 'ASC' }}>
                        <AutocompleteInput optionText="city" filterToQuery={(q) => ({ "city@ilike": q })} />
                    </ReferenceInput>
                    <TextInput source="phone" />
                </ReferenceOneInput>
            </SimpleForm>
        </Edit>
    );
};
