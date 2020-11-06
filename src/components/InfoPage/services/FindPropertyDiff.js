function FindDiff(newData, oldData, count) {
  for (const key of Object.keys(newData)) {
    if (newData[key] !== oldData[key]) {
      count += 1;
    }
  }
  return count;
}

export default FindDiff;
