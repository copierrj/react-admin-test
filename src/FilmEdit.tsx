import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';
import { DualListInput, ReferenceManyToManyInput } from '@react-admin/ra-relationships';

export const FilmEdit = () => {
    return (
        <Edit mutationMode="pessimistic">
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="description" />
                <NumberInput source="release_year" />
                <NumberInput source="length" />
                <TextInput source="rating" />
                <ReferenceManyToManyInput
                    source="film_id"
                    reference="category"
                    through="film_category"
                    using="film_id,category_id"
                    filter={{}}>

                    <DualListInput label="Category" />
                </ReferenceManyToManyInput>
            </SimpleForm>
        </Edit>
    );
}
