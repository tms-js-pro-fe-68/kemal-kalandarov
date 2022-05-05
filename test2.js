let i = 1

function* generatorFunction() {
  while (true) {
    yield (i *= 1000)
  }
}

const iterator = generatorFunction()

while (true) {
  console.log(iterator.next())
}
