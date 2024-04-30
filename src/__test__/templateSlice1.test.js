import { configureStore } from '@reduxjs/toolkit';
import templateReducer, { templateActions1 } from '../features/templateData/templateSlice';

describe('templateSlice reducer', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                template: templateReducer,
            },
        });
    });

    test('should update template info', () => {
        const newTemplateInfo = {
            id: 1,
            title: 'New Title',
            description: 'New Description',
            imgUrl: 'new-image-url.jpg',
        };

        store.dispatch(templateActions1.updateTemplate({
            section: 'templateInfo',
            variable: null,
            value: newTemplateInfo,
        }));

        const updatedTemplateInfo = store.getState().template.templateInfo;
        expect(updatedTemplateInfo).toEqual(newTemplateInfo);
    });

});
