export default function () {
  return {
    config: {
      errorHandler(err: any, vm: any, info: any) {
        const arr = ['T', 'O', 'D', 'O', ':', 'f', 'i', 'x']
        console.log(arr.join(''), err, vm, info)
      },
    },
  }
}
