const raisinAlarmArray = function (cookies) {
  let result = [];

  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("🍇")) {
        result.push('Raisin alert!');
      }
      if (!cookies[i].includes("🍇")) {
        result.push('All good!');
      }
    }
  return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫"],
    ["🍫", "🍫", "🍫"],
  ])
);