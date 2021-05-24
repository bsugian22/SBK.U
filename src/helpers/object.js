import { camelCase, snakeCase } from 'lodash'

export const camelize = (data) => {
    if (Array.isArray(data)) {
        return data.map(camelize)
    } else if (data !== null && typeof (data) === 'object') {
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
    } else if (data !== null && typeof (data) === 'object') {
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



export const iconsList = { icons: [] }
for (let index = 1; index <= 198; index++) {
    index == 44 ? iconsList.icons.push({ id: index, icon: "icon-svg" }) : iconsList.icons.push({ id: index, icon: "icon-" + index })
}

export const setCompetitorName = (name, homeTeam, awayTeam, specifierData = {}) => {
    if (name.includes('{$competitor1}')) {
        name = name.replaceAll('{$competitor1}', homeTeam)
    }
    if (name.includes('{$competitor2}')) {
        name = name.replaceAll('{$competitor2}', awayTeam)
    }

    if (Object.keys(specifierData).length != 0) {

        let specifierNames = Object.keys(specifierData);


        specifierNames.map((specifier) => {
            let specifierName = specifier

            if (name.includes(specifierName)) {

                if (specifierData[specifier] <= -0.1) {

                    if (name.includes("({+" + specifier + "})")) {
                        name = name.replaceAll("({+" + specifier + "})", "("+specifierData[specifier]+")")
                    } else {
                        if (name.includes("({-" + specifier + "})")) {
                            name = name.replaceAll("({-" + specifier + "})", "(+"+Number(specifierData[specifier])*-1 +")")
                        }
                    }

                } else {
                    name = name.replaceAll(specifierName, specifierData[specifier])
                    name = name.replaceAll("{", "")
                    name = name.replaceAll("}", "")
                }

            }
        })


    }

    return name
}



