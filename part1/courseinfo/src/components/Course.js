import React from "react";

const Course = ({ courses }) => {
  return (
    <>
      <Header title="Web development curriculum" />
      <div>
        {courses.map((c) => (
          <Content key={c.id} title={c.name} parts={c.parts} />
        ))}
      </div>
    </>
  );
};
const Header = ({ title }) => <h1>{title}</h1>;
const Title = ({ title }) => <h2>{title}</h2>;
const Content = ({ title, parts }) => {
  return (
    <>
      <Title title={title} />
      <div>
        {parts.map((p) => (
          <Part key={p.id} name={p.name} exercises={p.exercises} />
        ))}
      </div>
      <p>
        <strong>
          total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises
        </strong>
      </p>
    </>
  );
};
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

export default Course;
