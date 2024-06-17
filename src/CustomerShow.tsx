import { EmailField, ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export const CustomerShow = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <EmailField source="email" />
                <ReferenceField label="Address" reference="address" source="address_id">
                    <SimpleShowLayout>
                        <TextField source="address" />
                        <TextField source="district" />
                        <TextField source="postal_code" />
                    </SimpleShowLayout>
                </ReferenceField>
            </SimpleShowLayout>
        </Show>
    );
};
