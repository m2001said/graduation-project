import { editElement, addElement, addElementToArray, addSubElement, deleteElement, reorder, reorderSections, deleteSection } from '../features/templateData/actions';

describe('editElement', () => {
    it('should edit object field when i is undefined and variable is null', () => {
        const state = {
            section: {
                blockName: {
                    objKey: 'oldValue'
                }
            }
        };
        const action = {
            payload: {
                section: 'section',
                variable: null,
                value: 'newValue',
                i: undefined,
                blockName: 'blockName',
                objKey: 'objKey'
            }
        };
        editElement(state, action);
        expect(state.section.blockName.objKey).toEqual('newValue');
    });

});

describe('addElement', () => {
    it('should add a new element to the specified section and blockName', () => {
        const state = {
            section: {
                blockName: [
                    { field1: 'value1' }
                ]
            }
        };
        const action = {
            payload: {
                section: 'section',
                blockName: 'blockName'
            }
        };
        addElement(state, action);
        expect(state.section.blockName.length).toEqual(2);
        expect(typeof state.section.blockName[1]).toEqual('object');
    });

});

describe('addElementToArray', () => {
    it('should add a new element to the specified array', () => {
        const initialState = {
            section: {
                blockName: [
                    { subBlockName: ['Existing Data'] } 
                ]
            }
        };
        const action = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                cardIndex: 0,
                subBlockName: 'subBlockName'
            }
        };

        addElementToArray(initialState, action);

        expect(initialState.section.blockName[0].subBlockName.length).toEqual(2); // New element is added
        expect(initialState.section.blockName[0].subBlockName[1]).toEqual("Enter SubBlockName's Details"); // New element content is correct
    });

});

describe('addSubElement', () => {
    it('should add a new sub-element to the specified array', () => {
        const initialState = {
            section: {
                blockName: [
                    {
                        cardIndex: [
                            {
                                subBlockName: [{ existingKey: 'Existing Value' }]
                            }
                        ]
                    }
                ]
            }
        };
        const action = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                cardIndex: 0,
                subBlockName: 'subBlockName'
            }
        };

        addSubElement(initialState, action);

        const addedSubElement = initialState.section.blockName[0].cardIndex[0].subBlockName[1];
        expect(addedSubElement).toBeDefined(); 
        expect(addedSubElement.id).toBeDefined(); 
    });
});

describe('deleteElement function', () => {
    it('should delete an element from a normal block', () => {
        const initialState = {
            section: {
                blockName: ['item1', 'item2', 'item3']
            }
        };
        const action = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                i: 1 
            }
        };
        deleteElement(initialState, action);
        expect(initialState.section.blockName).toEqual(['item1', 'item3']); 
    });

    it('should delete an element from a sub-block', () => {
        const initialState = {
            section: {
                blockName: [
                    { subBlock: ['subItem1', 'subItem2', 'subItem3'] }
                ]
            }
        };
        const action = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                i: 0,
                subBlockName: 'subBlock',
                subIndex: 1 
            }
        };
        deleteElement(initialState, action);
        expect(initialState.section.blockName[0].subBlock).toEqual(['subItem1', 'subItem3']); // التحقق من أن العنصر الثاني تم حذفه
    });
});

describe('reorder', () => {
    it('should reorder elements within the specified array', () => {
        const initialState = {
            section: {
                blockName: [1, 2, 3, 4, 5]
            }
        };
        const actionMoveUp = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                i: 2,
                type: 'up'
            }
        };
        reorder(initialState, actionMoveUp);
        expect(initialState.section.blockName).toEqual([1, 3, 2, 4, 5]);
        const actionMoveDown = {
            payload: {
                section: 'section',
                blockName: 'blockName',
                i: 3,
                type: 'down'
            }
        };
        reorder(initialState, actionMoveDown);
        expect(initialState.section.blockName).toEqual([1, 3, 2, 5, 4]);
    });
});

describe('reorderSections', () => {
    it('should move the specified section up in the state object', () => {
        const initialState = {
            section1: { data: 'section1 data' },
            section2: { data: 'section2 data' },
            section3: { data: 'section3 data' }
        };

        const action = {
            payload: {
                section: 'section2',
                type: 'up'
            }
        };
        const reorderedState = reorderSections(initialState, action);

        expect(Object.keys(reorderedState)).toEqual(['section2', 'section1', 'section3']);
        expect(reorderedState.section2).toEqual({ data: 'section2 data' });
        expect(reorderedState.section1).toEqual({ data: 'section1 data' });
        expect(reorderedState.section3).toEqual({ data: 'section3 data' });
    });

    it('should move the specified section down in the state object', () => {
        const initialState = {
            section1: { data: 'section1 data' },
            section2: { data: 'section2 data' },
            section3: { data: 'section3 data' }
        };

        const action = {
            payload: {
                section: 'section2',
                type: 'down'
            }
        };
        const reorderedState = reorderSections(initialState, action);

        expect(Object.keys(reorderedState)).toEqual(['section1', 'section3', 'section2']);
        expect(reorderedState.section1).toEqual({ data: 'section1 data' });
        expect(reorderedState.section3).toEqual({ data: 'section3 data' });
        expect(reorderedState.section2).toEqual({ data: 'section2 data' });
    });
});

describe('deleteSection', () => {
    it('should delete the specified section from the state', () => {
        const initialState = {
            section1: { data: 'section1 data' },
            section2: { data: 'section2 data' },
            section3: { data: 'section3 data' }
        };
        const action = {
            payload: {
                section: 'section2'
            }
        };
        const newState = deleteSection(initialState, action);

        expect(newState).toEqual({
            section1: { data: 'section1 data' },
            section3: { data: 'section3 data' }
        });
        expect(newState.section2).toBeUndefined();
    });
    it('should return the original state if the specified section does not exist', () => {
        const initialState = {
            section1: { data: 'section1 data' },
            section2: { data: 'section2 data' },
            section3: { data: 'section3 data' }
        };

        const action = {
            payload: {
                section: 'nonExistingSection'
            }
        };

        const newState = deleteSection(initialState, action);

        expect(newState).toEqual(initialState);
    });

});
