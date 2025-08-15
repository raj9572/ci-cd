const { sum } = require("../math.js");

test("adds 2 + 3 to equal 5 (PASS)", () => {
  expect(sum(2, 3)).toBe(5); // ✅ This will pass
});

test("adds 5 + 5 to equal 20 (FAIL)", () => {
  expect(sum(5, 5)).toBe(20); // ❌ This will fail on purpose
});
