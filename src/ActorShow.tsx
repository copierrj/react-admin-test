import { Show, SimpleShowLayout, TextField, SimpleList, ArrayField } from 'react-admin';

export const ActorShow = () => {
    const meta = {
        columns: [
            "first_name",
            "last_name",
            "films:film(id:film_id,title,release_year)"
        ]
    };

    return (
        <Show queryOptions={{ meta }}>
            <SimpleShowLayout>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <ArrayField source="films">
                    <SimpleList
                        resource="film"
                        linkType="show"
                        primaryText={film => film.title}
                        secondaryText={film => film.release_year}
                    />
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
};
