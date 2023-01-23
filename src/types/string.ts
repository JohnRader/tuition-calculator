type SpaceType = ' ';

/*
* recursively defines a type that is the title-cased version of the string
* that is passed as a type parameter ex. typeof TitleCase<"HELLO"> === "Hello";
* typeof TitleCase<"hello"> === "Hello"
*/
export type TitleCase<
  T extends string,
  D extends string = '_' | ' ',
> = string extends T
  ? never
  : T extends `${infer F}${D}${infer R}`
    ? `${Capitalize<Lowercase<F>>}${SpaceType}${TitleCase<R, D>}`
    : Capitalize<Lowercase<T>>;
