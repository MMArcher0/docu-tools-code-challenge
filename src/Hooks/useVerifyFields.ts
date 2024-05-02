export default function useVerifyFields () {

  const isEmpty = (value:string) => {
    const replacedValue = value.replace( '','')
    return replacedValue.length <=0
  }

  const minCharacters = (value:string, minValue: number) => {
    return value.length <= minValue
  }

  return {
    isEmpty,
    minCharacters
  }

}