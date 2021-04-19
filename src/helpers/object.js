import { camelCase, snakeCase } from 'lodash'

export const socket = new WebSocket("wss://io.vosa.dev");
export const camelize = (data) => {
    if (Array.isArray(data)) {
        return data.map(camelize)
    } else if (data !== null && typeof(data) === 'object') {
        return Object.keys(data).reduce(
            (value, key) => ({
                ...value,
                [camelCase(key)]: camelize(data[key]),
            }),
            {},
        )
    }

    return data
}

export const snakelize = function (data) {
    if (Array.isArray(data)) {
        return data.map(snakelize)
    } else if (data !== null && typeof(data) === 'object') {
        return Object.keys(data).reduce(
            (value, key) => ({
            ...value,
            [snakeCase(key)]: snakelize(data[key]),
            }),
            {},
        )
    }

    return data
}



export const iconsList = {icons:[]}
for (let index = 1; index <= 198; index++) {
    index == 44 ? iconsList.icons.push({id:index , icon:"icon-svg"}) : iconsList.icons.push({id:index , icon:"icon-"+index})
}
    


