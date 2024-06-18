import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const FilmEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="description" />
                <NumberInput source="release_year" />
                <NumberInput source="length" />
                <TextInput source="rating" />
            </SimpleForm>
        </Edit>
    );
}
