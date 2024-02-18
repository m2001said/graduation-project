export const editElement = (state, action) => {
  const { section, variable, value, i, blockName, subBlockName, subIndex, objKey } = action.payload;
  // sub means level 2 of fields
  if (i === undefined) {
    if (variable === null) {
      // edit object filed
      state[section][blockName][objKey] = value;
    } else {
      // edit normal field
      state[section][variable] = value;
    }
  } else {
    if (subIndex === undefined) {
      // edit array filed with index
      if (variable === null) state[section][blockName][i] = value;
      else {
        if (subBlockName === undefined) {
          // edit obj in array of objects
          state[section][blockName][i][variable] = value;
        } else {
          // edit sub obj directly
          state[section][blockName][i][subBlockName][variable] = value;
        }
      }
    } else {
      // edit sub element in array
      if (variable === null) state[section][blockName][i][subBlockName][subIndex] = value;
      else {
        // edit sub obj in array of objects
        state[section][blockName][i][subBlockName][subIndex][variable] = value;
      }
    }
  }
};

export const addElement = (state, action) => {
  const { section, blockName } = action.payload;

  const fields = Object.keys(state[section][blockName][0]);
  const newElement = {};
  const pattern = /\.(jpg|gif|png|svg)$/i;

  fields.forEach((field) => {
    if (pattern.test(state[section][blockName][0][field])) newElement[field] = "/assets/icons/picture3.svg";
    else newElement[field] = "Enter Any Data...";
  });

  state[section][blockName].push(newElement);
};

export const deleteElement = (state, action) => {
  const { section, blockName, i } = action.payload;
  state[section][blockName].splice(i, 1);
};

export const reorder = (state, action) => {
  const { section, blockName, i, type } = action.payload;
  type === "up"
    ? state[section][blockName].splice(i - 1, 0, state[section][blockName].splice(i, 1)[0])
    : state[section][blockName].splice(i + 1, 0, state[section][blockName].splice(i, 1)[0]);
};

export const reorderSections = (state, action) => {
  const { section, type } = action.payload;

  // return array each element is [key , value]
  const sections = Object.entries(state);
  const keys = sections.map(([key]) => key);

  const index = keys.findIndex((key) => key === section);

  type === "up" ? sections.splice(index - 1, 0, sections.splice(index, 1)[0]) : sections.splice(index + 1, 0, sections.splice(index, 1)[0]);
  
  //convert array to object
  const reordered = sections.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  
  return reordered;
};

export const deleteSection = (state, action) => {
  const { section} = action.payload;
  const updatedState = { ...state };
  delete updatedState[section];
  return updatedState;
};