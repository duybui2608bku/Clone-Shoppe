import config from '../constants/config'

export interface SuccessResponse<Data> {
  mesage: string
  data: Data
}

export interface ErrorResponse<Data> {
  mesage: string
  data?: Data
}

const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-')
  return arr[arr.length - 1]
}

export const getAvatar = (avataName?: string) =>
  avataName
    ? `${config.baseUrl}images/${avataName} `
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4JWdrzCwY2owucPdunvUNiBWZBV3n7KYRA&s'
