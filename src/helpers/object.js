import { camelCase, snakeCase } from 'lodash'
import socketIOClient from "socket.io-client";

export const socket = socketIOClient("wss://io.vosa.dev");
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
        // console.log(specifier)
        let specifierNames = Object.keys(specifierData);

        specifierNames.map((specifier)=>{
            let specifierName = specifier

            if (name.includes(specifierName)) {
                name = name.replaceAll(specifierName, specifierData[specifier])
                name = name.replaceAll("{", "")
                name = name.replaceAll("}", "")
                // console.log(specifierData[specifier])
                // console.log(specifierName)
            }
        })

        
    }

    return name
}



