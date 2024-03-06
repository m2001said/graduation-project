import { v4 as uuidv4 } from "uuid";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

//  for example add card to cards element
export const addElement = (state, action) => {
  const { section, blockName } = action.payload;

  const fields = Object.keys(state[section][blockName][0]);
  const newElement = {};
  const pattern = /\.(jpg|gif|png|svg)$/i;

  fields.forEach((field) => {
    if (typeof state[section][blockName][0][field] === "object") {
      if (Array.isArray(state[section][blockName][0][field])) {
        if (typeof state[section][blockName][0][field][0] === "object") {
          const newObj = Object.keys(state[section][blockName][0][field][0]).reduce((obj, key) => {
            if (key === "id") {
              obj[key] = uuidv4();
            } else if (pattern.test(state[section][blockName][0][field][0][key])) {
              obj[key] = "/assets/icons/picture3.svg";
            } else {
              obj[key] = `Enter ${capitalizeFirstLetter(key)}`;
            }
            return obj;
          }, {});
          newElement[field] = [newObj];
        } else {
          newElement[field] = [`Enter ${capitalizeFirstLetter(field.slice(0, -1))}'s Details`];
        }
      } else {
        // object
        const newObj = Object.keys(state[section][blockName][0][field]).reduce((obj, key) => {
          if (key === "id") {
            obj[key] = uuidv4();
          } else if (pattern.test(state[section][blockName][0][field][key])) {
            obj[key] = "/assets/icons/picture3.svg";
          } else {
            obj[key] = `Enter ${capitalizeFirstLetter(key)}`;
          }
          return obj;
        }, {});
        console.log(newObj);
        console.log(field);

        newElement[field] = newObj;
      }
    } else {
      if (pattern.test(state[section][blockName][0][field])) newElement[field] = "/assets/icons/picture3.svg";
      else newElement[field] = `Enter ${capitalizeFirstLetter(field)}`;
    }
  });

  state[section][blockName].push(newElement);
};

//  for example add feature to array of features
export const addElementToArray = (state, action) => {
  const { section, blockName, cardIndex, subBlockName } = action.payload;
  if (subBlockName) {
    const txt = capitalizeFirstLetter(subBlockName.slice(0, -1));
    state[section][blockName][cardIndex][subBlockName].push(`Enter ${txt}'s Details`);
  } else {
    const txt = capitalizeFirstLetter(blockName.slice(0, -1));
    state[section][blockName].push(`Enter ${txt}'s Details`);
  }
};

// for example add mediaIcons to card in cards element
export const addSubElement = (state, action) => {
  const { section, blockName, cardIndex, subBlockName } = action.payload;
  const pattern = /\.(jpg|gif|png|svg)$/i;

  const newObj = Object.keys(state[section][blockName][cardIndex][subBlockName][0]).reduce((obj, key) => {
    if (key === "id") {
      obj[key] = uuidv4();
    } else if (pattern.test(state[section][blockName][cardIndex][subBlockName][0][key])) {
      obj[key] = "/assets/icons/picture3.svg";
    } else {
      obj[key] = `Enter ${capitalizeFirstLetter(key)}`;
    }
    return obj;
  }, {});

  state[section][blockName][cardIndex][subBlockName].push(newObj);
};

export const deleteElement = (state, action) => {
  const { section, blockName, i, subBlockName, subIndex } = action.payload;
  if (subBlockName) {
    state[section][blockName][i][subBlockName].splice(subIndex, 1);
  } else {
    state[section][blockName].splice(i, 1);
  }
};

export const reorder = (state, action) => {
  const { section, blockName, i, type, subBlockName, subIndex } = action.payload;
  if (subBlockName) {
    type === "up"
      ? state[section][blockName][i][subBlockName].splice(subIndex - 1, 0, state[section][blockName][i][subBlockName].splice(subIndex, 1)[0])
      : state[section][blockName][i][subBlockName].splice(subIndex + 1, 0, state[section][blockName][i][subBlockName].splice(subIndex, 1)[0]);
  } else {
    type === "up"
      ? state[section][blockName].splice(i - 1, 0, state[section][blockName].splice(i, 1)[0])
      : state[section][blockName].splice(i + 1, 0, state[section][blockName].splice(i, 1)[0]);
  }
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
  const { section } = action.payload;
  const updatedState = { ...state };
  delete updatedState[section];
  return updatedState;
};
