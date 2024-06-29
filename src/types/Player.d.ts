type Skills = {
  defending: Number;
  passing: Number;
  shooting: Number;
};
type Player = {
  name: string;
  age: Number;
  position: string;
  rating: Number;
  //   skills: Skills;
  //   playerType: string;
};
type PlayerType = {
  name: string;
  label: string;
  attributes: Partial<Skills>;
};
