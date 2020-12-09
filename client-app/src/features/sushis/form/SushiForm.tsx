import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { ISushi } from '../../../app/models/sushi';
import { v4 as uuid } from 'uuid';
import SushiStore from '../../../app/stores/sushiStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';

interface DetailParams {
    id: string;
}

const SushiForm: React.FC<RouteComponentProps<DetailParams>> = ({
    match,
    history
}) => {
    const sushiStore = useContext(SushiStore);
    const {
        createSushi,
        editSushi,
        submitting,
        sushi: initialFormState,
        loadSushi,
        clearSushi
    } = sushiStore;

    const [sushi, setSushi] = useState<ISushi>({
        id: '',
        name: '',
        description: '',
        category: '',
        type: '',
    });

    useEffect(() => {
        if (match.params.id && sushi.id.length === 0) {
            loadSushi(match.params.id).then(
                () => initialFormState && setSushi(initialFormState)
            );
        }
        return () => {
            clearSushi()
        }
    }, [
        loadSushi,
        clearSushi,
        match.params.id, 
        initialFormState, 
        sushi.id.length]);

    const handleSubmit = () => {
        if (sushi.id.length === 0) {
            let newSushi = {
                ...sushi,
                id: uuid()
            };
            createSushi(newSushi).then(() => history.push(`/sushis/${newSushi.id}`))
        } else {
            editSushi(sushi).then(() => history.push(`/sushis/${sushi.id}`));
        }
    };

    const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget;
        setSushi({ ...sushi, [name]: value });
    };

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input
                    onChange={handleInputChange}
                    name='name'
                    placeholder='Name'
                    value={sushi.name}
                />
                <Form.TextArea
                    onChange={handleInputChange}
                    name='description'
                    rows={2}
                    placeholder='Description'
                    value={sushi.description}
                />
                <Form.Input
                    onChange={handleInputChange}
                    name='category'
                    placeholder='Category'
                    value={sushi.category}
                />
                <Form.Input
                    onChange={handleInputChange}
                    name='type'
                    placeholder='Type'
                    value={sushi.type}
                />
                <Button
                    loading={submitting}
                    floated='right'
                    positive
                    type='submit'
                    content='Submit'
                />
                <Button
                    onClick={() => history.push('/sushis')}
                    floated='right'
                    type='button'
                    content='Cancel'
                />
            </Form>
        </Segment>
    );
};

export default observer(SushiForm);