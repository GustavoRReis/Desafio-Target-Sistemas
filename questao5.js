const reverseString = (string) => {
  let reversed = '';
  const strArray = str.split('');
  strArray.forEach((element) => {
    reversed = element + reversed;
  });
  return reversed;
};

