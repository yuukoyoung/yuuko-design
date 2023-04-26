function capitalize(input: string) {
  if (!input) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}

function uncapitalize(input: string) {
  if (!input) {
    return input;
  }

  return input.charAt(0).toLowerCase() + input.slice(1);
}

export { capitalize, uncapitalize };
