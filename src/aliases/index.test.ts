import makeAliases from "./makeAliases";
import { MediaLabels, MediaAliases } from "../media/types";

it('makeAliases', () => {
  const tmp = makeAliases({
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  });
  expect(Object.keys(tmp).sort()).toEqual([
    ...Object.values(MediaAliases as Object) as string[],
    ...Object.values(MediaLabels as Object) as string[]
  ].sort())
})