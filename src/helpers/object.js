import { camelCase, snakeCase } from 'lodash'

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