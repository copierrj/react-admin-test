import { ChipField, NumberField, Show, SimpleShowLayout, SingleFieldList, TextField } from 'react-admin';
import ChipArrayField from './ChipArrayField';
import { ReferenceManyToManyField } from '@react-admin/ra-relationships';

export const FilmShow = () => {
    const meta = {
        columns: [
            "film_id",
            "title",
            "description",
            "release_year",
            "...language!film_language_id_fkey(language_name:name)",
            "length",
            "rating",
            "special_features"
        ]
    }

    return (
        <Show queryOptions={{ meta }}>
            <SimpleShowLayout>
                <TextField source="title" />
                <TextField source="description" />
                <NumberField source="release_year" options={{useGrouping: false}}/>
                <TextField source="language_name"/>
                <NumberField source="length" />
                <TextField source="rating" />
                <ChipArrayField source="special_features"/>
                <ReferenceManyToManyField
                    label="Categories"
                    source="film_id"
                    reference="category"
                    through="film_category"
                    using="film_id,category_id"
                    filter={{}}>
                    <SingleFieldList linkType={false}>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceManyToManyField>
            </SimpleShowLayout>
        </Show>
    );
}
